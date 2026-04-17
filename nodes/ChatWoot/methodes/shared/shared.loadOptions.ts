import type { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';

type CredentialType = 'chatwootApplicationApi' | 'chatwootPlatformApi' | 'chatwootClientApi';

type ApiItem = {
	id?: string | number;
	uuid?: string;
	name?: string;
	display_name?: string;
	title?: string;
	email?: string;
	identifier?: string;
	source_id?: string;
	content?: string;
	conversation_id?: string | number;
	[key: string]: unknown;
};

function optionName(item: ApiItem): string {
	return String(
		item?.name ??
			item?.display_name ??
			item?.title ??
			item?.email ??
			item?.identifier ??
			item?.content ??
			item?.id ??
			item?.uuid ??
			item?.conversation_id ??
			'Unknown',
	);
}

function optionValue(item: ApiItem): string | number {
	return (
		item?.id ??
		item?.uuid ??
		item?.identifier ??
		item?.source_id ??
		item?.conversation_id ??
		item?.name ??
		optionName(item)
	);
}

export function extractItems(response: unknown): ApiItem[] {
	if (Array.isArray(response)) return response as ApiItem[];
	if (response && typeof response === 'object') {
		const obj = response as Record<string, unknown>;
		for (const key of [
			'payload',
			'data',
			'items',
			'results',
			'conversations',
			'contacts',
			'inboxes',
			'teams',
			'users',
			'agents',
			'labels',
		]) {
			if (Array.isArray(obj[key])) return obj[key] as ApiItem[];
		}
		return [obj as ApiItem];
	}
	return [];
}

async function requestOptions(
	this: ILoadOptionsFunctions,
	credentialType: CredentialType,
	baseURL: string,
	path: string,
	authenticate = true,
): Promise<INodePropertyOptions[]> {
	try {
		const response = authenticate
			? await this.helpers.httpRequestWithAuthentication.call(this, credentialType, {
					method: 'GET',
					url: baseURL + path,
					json: true,
				})
			: await this.helpers.httpRequest({ method: 'GET', url: baseURL + path, json: true });
		return extractItems(response).map((item) => ({
			name: optionName(item),
			value: optionValue(item),
		}));
	} catch {
		return [];
	}
}

export function getParam(ctx: ILoadOptionsFunctions, name: string): string | number | undefined {
	try {
		return ctx.getCurrentNodeParameter(name) as string | number;
	} catch {
		return undefined;
	}
}

export function resolveLoadOptionsUrl(
	ctx: ILoadOptionsFunctions,
	credentials: Record<string, unknown>,
	url: string,
): string | undefined {
	const resolvedUrl = url
		.replace(
			/{{$credentials.inboxIdentifier}}/g,
			encodeURIComponent(String(credentials.inboxIdentifier ?? '')),
		)
		.replace(/{([^}]+)}/g, (_match, name) => {
			const value = getParam(ctx, name);
			return value === undefined || value === ''
				? '__MISSING__'
				: encodeURIComponent(String(value));
		});

	return resolvedUrl.includes('__MISSING__') ? undefined : resolvedUrl;
}

export function createLoadOptions(
	credentialType: CredentialType,
	url: string,
	authenticate = true,
): (this: ILoadOptionsFunctions) => Promise<INodePropertyOptions[]> {
	return async function loadOptions(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const credentials = (await this.getCredentials(credentialType)) as Record<string, unknown>;
		const baseURL = String(credentials.url ?? '').replace(/\/$/, '');
		const resolvedUrl = resolveLoadOptionsUrl(this, credentials, url);
		if (!resolvedUrl) return [];
		return requestOptions.call(this, credentialType, baseURL, resolvedUrl, authenticate);
	};
}

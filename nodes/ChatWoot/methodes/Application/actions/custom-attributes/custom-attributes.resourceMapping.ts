import type { ILoadOptionsFunctions, ResourceMapperFields } from 'n8n-workflow';
import { extractItems, getParam } from '../../../shared/shared.loadOptions';

export async function getCustomAttributeFieldsConversation(
	this: ILoadOptionsFunctions,
): Promise<ResourceMapperFields> {
	const accountId = getParam(this, 'account_id') ?? 1;
	const credentials = (await this.getCredentials('chatwootApplicationApi')) as Record<
		string,
		unknown
	>;
	const baseURL = String(credentials.url ?? '').replace(/\/$/, '');
	const response = await this.helpers.httpRequestWithAuthentication.call(
		this,
		'chatwootApplicationApi',
		{
			method: 'GET',
			url:
				baseURL +
				'/api/v1/accounts/' +
				encodeURIComponent(String(accountId)) +
				'/custom_attribute_definitions',
			qs: { attribute_model: '0' },
			json: true,
		},
	);
	const fields = extractItems(response).map((item) => ({
		id: String(item.attribute_key),
		displayName: String(item.attribute_display_name ?? item.attribute_key),
		defaultMatch: false,
		canBeUsedToMatch: false,
		required: false,
		display: true,
		type: 'string' as const,
	}));
	return { fields };
}

export async function getCustomAttributeFieldsContact(
	this: ILoadOptionsFunctions,
): Promise<ResourceMapperFields> {
	const accountId = getParam(this, 'account_id') ?? 1;
	const credentials = (await this.getCredentials('chatwootApplicationApi')) as Record<
		string,
		unknown
	>;
	const baseURL = String(credentials.url ?? '').replace(/\/$/, '');
	const response = await this.helpers.httpRequestWithAuthentication.call(
		this,
		'chatwootApplicationApi',
		{
			method: 'GET',
			url:
				baseURL +
				'/api/v1/accounts/' +
				encodeURIComponent(String(accountId)) +
				'/custom_attribute_definitions',
			qs: { attribute_model: '1' },
			json: true,
		},
	);
	const fields = extractItems(response).map((item) => ({
		id: String(item.attribute_key),
		displayName: String(item.attribute_display_name ?? item.attribute_key),
		defaultMatch: false,
		canBeUsedToMatch: false,
		required: false,
		display: true,
		type: 'string' as const,
	}));
	return { fields };
}

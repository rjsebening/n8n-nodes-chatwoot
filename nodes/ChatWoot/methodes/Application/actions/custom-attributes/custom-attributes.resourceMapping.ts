import type {
	ILoadOptionsFunctions,
	INodePropertyOptions,
	ResourceMapperFields,
} from 'n8n-workflow';
import { extractItems, getParam } from '../../../shared/shared.loadOptions';

type MapperFieldType = 'string' | 'number' | 'dateTime' | 'boolean' | 'options';

const DISPLAY_TYPE_BY_INDEX = [
	'text',
	'number',
	'currency',
	'percent',
	'link',
	'date',
	'list',
	'checkbox',
] as const;

function resolveFieldType(displayType: unknown): MapperFieldType {
	const name =
		typeof displayType === 'number'
			? DISPLAY_TYPE_BY_INDEX[displayType]
			: String(displayType ?? 'text').toLowerCase();
	switch (name) {
		case 'number':
		case 'currency':
		case 'percent':
			return 'number';
		case 'date':
			return 'dateTime';
		case 'checkbox':
			return 'boolean';
		case 'list':
			return 'options';
		default:
			return 'string';
	}
}

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
	const fields = extractItems(response).map((item) => {
		const type = resolveFieldType(item.attribute_display_type);
		const options: INodePropertyOptions[] | undefined =
			type === 'options' && Array.isArray(item.attribute_values)
				? (item.attribute_values as unknown[]).map((v) => ({
						name: String(v),
						value: String(v),
					}))
				: undefined;
		return {
			id: String(item.attribute_key),
			displayName: String(item.attribute_display_name ?? item.attribute_key),
			defaultMatch: false,
			canBeUsedToMatch: false,
			required: false,
			display: true,
			type,
			...(options ? { options } : {}),
		};
	});
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
	const fields = extractItems(response).map((item) => {
		const type = resolveFieldType(item.attribute_display_type);
		const options: INodePropertyOptions[] | undefined =
			type === 'options' && Array.isArray(item.attribute_values)
				? (item.attribute_values as unknown[]).map((v) => ({
						name: String(v),
						value: String(v),
					}))
				: undefined;
		return {
			id: String(item.attribute_key),
			displayName: String(item.attribute_display_name ?? item.attribute_key),
			defaultMatch: false,
			canBeUsedToMatch: false,
			required: false,
			display: true,
			type,
			...(options ? { options } : {}),
		};
	});
	return { fields };
}

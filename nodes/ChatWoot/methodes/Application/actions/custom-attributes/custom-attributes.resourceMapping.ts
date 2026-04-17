import type { ILoadOptionsFunctions, ResourceMapperFields } from 'n8n-workflow';
import { extractItems, getParam } from '../../../shared/shared.loadOptions';

export async function getCustomAttributeFields(
	this: ILoadOptionsFunctions,
): Promise<ResourceMapperFields> {
	const accountId = getParam(this, 'account_id') ?? 1;
	const credentials = (await this.getCredentials('chatwootApplicationApi')) as Record<
		string,
		unknown
	>;
	const baseURL = String(credentials.url ?? '').replace(/\/$/, '');
	try {
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
			id: String(item.attribute_key ?? item.key ?? item.name ?? item.id),
			displayName: String(
				item.attribute_display_name ?? item.name ?? item.attribute_key ?? item.id,
			),
			defaultMatch: false,
			canBeUsedToMatch: false,
			required: false,
			display: true,
			type: 'string' as const,
		}));
		return { fields };
	} catch {
		return { fields: [] };
	}
}

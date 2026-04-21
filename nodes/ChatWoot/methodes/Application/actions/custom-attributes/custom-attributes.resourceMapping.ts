import type { ILoadOptionsFunctions, ResourceMapperFields } from 'n8n-workflow';
import { extractItems, getParam } from '../../../shared/shared.loadOptions';

async function loadCustomAttributeFields(
	ctx: ILoadOptionsFunctions,
	attributeModel: '0' | '1',
): Promise<ResourceMapperFields> {
	const accountId = getParam(ctx, 'account_id') ?? 1;
	const credentials = (await ctx.getCredentials('chatwootApplicationApi')) as Record<
		string,
		unknown
	>;
	const baseURL = String(credentials.url ?? '').replace(/\/$/, '');
	try {
		const response = await ctx.helpers.httpRequestWithAuthentication.call(
			ctx,
			'chatwootApplicationApi',
			{
				method: 'GET',
				url:
					baseURL +
					'/api/v1/accounts/' +
					encodeURIComponent(String(accountId)) +
					'/custom_attribute_definitions',
				qs: { attribute_model: attributeModel },
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

export async function getCustomAttributeFieldsConversation(
	this: ILoadOptionsFunctions,
): Promise<ResourceMapperFields> {
	return loadCustomAttributeFields(this, '0');
}

export async function getCustomAttributeFieldsContact(
	this: ILoadOptionsFunctions,
): Promise<ResourceMapperFields> {
	return loadCustomAttributeFields(this, '1');
}

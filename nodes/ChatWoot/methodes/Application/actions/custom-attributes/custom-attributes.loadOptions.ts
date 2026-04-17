import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationGetAccountCustomAttribute = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/custom_attribute_definitions',
	true,
);

export const loadApplicationGetDetailsOfASingleCustomAttribute = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/custom_attribute_definitions/{id}',
	true,
);

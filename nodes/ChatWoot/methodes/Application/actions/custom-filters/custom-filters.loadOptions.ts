import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationListAllFilters = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/custom_filters',
	true,
);

export const loadApplicationGetDetailsOfASingleCustomFilter = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}',
	true,
);

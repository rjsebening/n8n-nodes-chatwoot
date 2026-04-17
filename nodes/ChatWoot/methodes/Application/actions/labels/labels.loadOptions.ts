import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationListAllLabels = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/labels',
	true,
);

export const loadApplicationGetDetailsOfASingleLabel = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/labels/{id}',
	true,
);

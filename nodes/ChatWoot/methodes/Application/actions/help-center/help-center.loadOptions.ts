import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationGetPortal = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/portals',
	true,
);

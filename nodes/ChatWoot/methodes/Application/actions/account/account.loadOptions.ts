import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationGetAccountDetails = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}',
	true,
);

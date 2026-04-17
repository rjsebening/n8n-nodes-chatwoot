import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadPlatformListAllAccountUsers = createLoadOptions(
	'chatwootPlatformApi',
	'/platform/api/v1/accounts/{account_id}/account_users',
	true,
);

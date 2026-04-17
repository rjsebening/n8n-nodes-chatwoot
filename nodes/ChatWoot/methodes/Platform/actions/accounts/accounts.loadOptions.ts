import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadPlatformGetDetailsOfAnAccount = createLoadOptions(
	'chatwootPlatformApi',
	'/platform/api/v1/accounts/{account_id}',
	true,
);

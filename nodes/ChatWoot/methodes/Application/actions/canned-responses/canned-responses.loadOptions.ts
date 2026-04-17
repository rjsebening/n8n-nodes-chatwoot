import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationGetAccountCannedResponse = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/canned_responses',
	true,
);

import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationListAllWebhooks = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/webhooks',
	true,
);

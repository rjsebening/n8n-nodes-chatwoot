import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationGetDetailsOfAllIntegrations = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/integrations/apps',
	true,
);

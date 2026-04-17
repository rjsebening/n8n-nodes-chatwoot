import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationGetAccountAgents = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/agents',
	true,
);

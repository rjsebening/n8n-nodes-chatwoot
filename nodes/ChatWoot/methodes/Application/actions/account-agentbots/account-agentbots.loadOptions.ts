import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationListAllAccountAgentBots = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/agent_bots',
	true,
);

export const loadApplicationGetDetailsOfASingleAccountAgentBot = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/agent_bots/{id}',
	true,
);

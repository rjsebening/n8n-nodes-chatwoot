import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadPlatformListAllAgentBots = createLoadOptions(
	'chatwootPlatformApi',
	'/platform/api/v1/agent_bots',
	true,
);

export const loadPlatformGetDetailsOfASingleAgentBot = createLoadOptions(
	'chatwootPlatformApi',
	'/platform/api/v1/agent_bots/{id}',
	true,
);

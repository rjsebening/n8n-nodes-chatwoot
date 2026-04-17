import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationListAllInboxes = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/inboxes',
	true,
);

export const loadApplicationGetInbox = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/inboxes/{id}',
	true,
);

export const loadApplicationGetInboxAgentBot = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/inboxes/{id}/agent_bot',
	true,
);

export const loadApplicationGetInboxMembers = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/inbox_members/{inbox_id}',
	true,
);

import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationConversationListMeta = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/conversations/meta',
	true,
);

export const loadApplicationConversationList = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/conversations',
	true,
);

export const loadApplicationGetDetailsOfAConversation = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/conversations/{conversation_id}',
	true,
);

export const loadApplicationListAllLabelsOfAConversation = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/conversations/{conversation_id}/labels',
	true,
);

export const loadApplicationGetConversationReportingEvents = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/conversations/{conversation_id}/reporting_events',
	true,
);

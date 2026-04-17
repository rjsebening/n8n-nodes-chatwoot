import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationListAllMessages = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages',
	true,
);

export const loadApplicationGetConversationMessages = createLoadOptions(
	'chatwootApplicationApi',
	'/accounts/{account_id}/conversations/{conversation_id}/messages',
	true,
);
export { loadApplicationConversationList } from '../conversations/conversations.loadOptions';

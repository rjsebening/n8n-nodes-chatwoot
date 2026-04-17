import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadClientListAllConversationMessages = createLoadOptions(
	'chatwootClientApi',
	'/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{contact_identifier}/conversations/{conversation_id}/messages',
	false,
);
export { loadClientGetDetailsOfAInbox } from '../inbox-api/inbox-api.loadOptions';

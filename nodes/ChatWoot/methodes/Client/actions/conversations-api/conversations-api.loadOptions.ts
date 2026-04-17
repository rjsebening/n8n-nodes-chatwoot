import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadClientListAllContactConversations = createLoadOptions(
	'chatwootClientApi',
	'/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{contact_identifier}/conversations',
	false,
);

export const loadClientGetSingleConversation = createLoadOptions(
	'chatwootClientApi',
	'/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{contact_identifier}/conversations/{conversation_id}',
	false,
);
export { loadClientGetDetailsOfAInbox } from '../inbox-api/inbox-api.loadOptions';

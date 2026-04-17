import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadClientGetDetailsOfAContact = createLoadOptions(
	'chatwootClientApi',
	'/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{contact_identifier}',
	false,
);
export { loadClientGetDetailsOfAInbox } from '../inbox-api/inbox-api.loadOptions';

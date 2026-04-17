import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadClientGetDetailsOfAInbox = createLoadOptions(
	'chatwootClientApi',
	'/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}',
	false,
);

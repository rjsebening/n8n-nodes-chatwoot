import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationContactList = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/contacts',
	true,
);

export const loadApplicationContactDetails = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/contacts/{id}',
	true,
);

export const loadApplicationContactConversations = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/contacts/{id}/conversations',
	true,
);

export const loadApplicationContactSearch = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/contacts/search',
	true,
);

export const loadApplicationContactableInboxesGet = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/contacts/{id}/contactable_inboxes',
	true,
);

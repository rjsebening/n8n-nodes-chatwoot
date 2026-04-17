import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationListAllLabelsOfAContact = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/contacts/{id}/labels',
	true,
);

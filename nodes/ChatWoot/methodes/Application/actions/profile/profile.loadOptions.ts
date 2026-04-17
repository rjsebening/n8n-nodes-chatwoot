import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationFetchProfile = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/profile',
	true,
);

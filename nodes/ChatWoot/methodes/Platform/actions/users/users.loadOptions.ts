import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadPlatformGetDetailsOfAUser = createLoadOptions(
	'chatwootPlatformApi',
	'/platform/api/v1/users/{id}',
	true,
);

export const loadPlatformGetSsoUrlOfAUser = createLoadOptions(
	'chatwootPlatformApi',
	'/platform/api/v1/users/{id}/login',
	true,
);

import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationGetAccountAutomationRule = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/automation_rules',
	true,
);

export const loadApplicationGetDetailsOfASingleAutomationRule = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/automation_rules/{id}',
	true,
);

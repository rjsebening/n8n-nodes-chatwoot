import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationGetAccountAuditLogs = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/audit_logs',
	true,
);

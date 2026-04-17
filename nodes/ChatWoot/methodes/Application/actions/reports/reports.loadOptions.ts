import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationGetAccountReportingEvents = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/reporting_events',
	true,
);

export const loadApplicationListAllConversationStatistics = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v2/accounts/{account_id}/reports',
	true,
);

export const loadApplicationListAllConversationStatisticsSummary = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v2/accounts/{account_id}/reports/summary',
	true,
);

export const loadApplicationGetAccountConversationMetrics = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v2/accounts/{account_id}/reports/conversations',
	true,
);

export const loadApplicationGetAgentConversationMetrics = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v2/accounts/{account_id}/reports/conversations/',
	true,
);

export const loadApplicationGetChannelSummaryReport = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v2/accounts/{account_id}/summary_reports/channel',
	true,
);

export const loadApplicationGetInboxSummaryReport = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v2/accounts/{account_id}/summary_reports/inbox',
	true,
);

export const loadApplicationGetAgentSummaryReport = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v2/accounts/{account_id}/summary_reports/agent',
	true,
);

export const loadApplicationGetTeamSummaryReport = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v2/accounts/{account_id}/summary_reports/team',
	true,
);

export const loadApplicationGetFirstResponseTimeDistribution = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v2/accounts/{account_id}/reports/first_response_time_distribution',
	true,
);

export const loadApplicationGetInboxLabelMatrix = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v2/accounts/{account_id}/reports/inbox_label_matrix',
	true,
);

export const loadApplicationGetOutgoingMessagesCount = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v2/accounts/{account_id}/reports/outgoing_messages_count',
	true,
);

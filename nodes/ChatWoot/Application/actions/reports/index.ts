import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Reports'],
			},
		},
		options: [
			{
				name: 'Account Conversation Metrics',
				value: 'Account Conversation Metrics',
				action: 'Account conversation metrics',
				description: 'Get conversation metrics for Account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/accounts/{{$parameter["account_id"]}}/reports/conversations',
					},
				},
			},
			{
				name: 'Account Reporting Events',
				value: 'Account Reporting Events',
				action: 'Account reporting events',
				description:
					'Get paginated reporting events for the account. This endpoint returns reporting events such as first response time, resolution time, and other metrics. Only administrators can access this endpoint. Results are paginated with 25 items per page.',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/reporting_events',
					},
				},
			},
			{
				name: 'Agent Conversation Metrics',
				value: 'Agent Conversation Metrics',
				action: 'Agent conversation metrics',
				description: 'Get conversation metrics for Agent',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/accounts/{{$parameter["account_id"]}}/reports/conversations/',
					},
				},
			},
			{
				name: 'Get Account Reports',
				value: 'Get Account reports',
				action: 'Get account reports',
				description: 'Get Account reports for a specific type, metric and date range',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/accounts/{{$parameter["account_id"]}}/reports',
					},
				},
			},
			{
				name: 'Get Account Reports Summary',
				value: 'Get Account reports summary',
				action: 'Get account reports summary',
				description: 'Get Account reports summary for a specific type and date range',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/accounts/{{$parameter["account_id"]}}/reports/summary',
					},
				},
			},
			{
				name: 'Get Conversation Statistics Grouped by Agent',
				value: 'Get conversation statistics grouped by agent',
				action: 'Get conversation statistics grouped by agent',
				description:
					'Get conversation statistics grouped by agent for a given date range. Returns metrics for each agent including conversation counts, resolution counts, average first response time, average resolution time, and average reply time.',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/accounts/{{$parameter["account_id"]}}/summary_reports/agent',
					},
				},
			},
			{
				name: 'Get Conversation Statistics Grouped by Channel Type',
				value: 'Get conversation statistics grouped by channel type',
				action: 'Get conversation statistics grouped by channel type',
				description: `Get conversation counts grouped by channel type and status for a given date range.
Returns statistics for each channel type including open, resolved, pending, snoozed, and total conversation counts. **Note:** This API endpoint is available only in Chatwoot version 4.10.0 and above. The date range is limited to a maximum of 6 months.`,
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/accounts/{{$parameter["account_id"]}}/summary_reports/channel',
					},
				},
			},
			{
				name: 'Get Conversation Statistics Grouped by Inbox',
				value: 'Get conversation statistics grouped by inbox',
				action: 'Get conversation statistics grouped by inbox',
				description:
					'Get conversation statistics grouped by inbox for a given date range. Returns metrics for each inbox including conversation counts, resolution counts, average first response time, average resolution time, and average reply time.',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/accounts/{{$parameter["account_id"]}}/summary_reports/inbox',
					},
				},
			},
			{
				name: 'Get Conversation Statistics Grouped by Team',
				value: 'Get conversation statistics grouped by team',
				action: 'Get conversation statistics grouped by team',
				description:
					'Get conversation statistics grouped by team for a given date range. Returns metrics for each team including conversation counts, resolution counts, average first response time, average resolution time, and average reply time.',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/accounts/{{$parameter["account_id"]}}/summary_reports/team',
					},
				},
			},
			{
				name: 'Get First Response Time Distribution by Channel',
				value: 'Get first response time distribution by channel',
				action: 'Get first response time distribution by channel',
				description: `Get the distribution of first response times grouped by channel type.
Returns conversation counts in different time buckets (0-1h, 1-4h, 4-8h, 8-24h, 24h+) for each channel type. **Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.`,
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/accounts/{{$parameter["account_id"]}}/reports/first_response_time_distribution',
					},
				},
			},
			{
				name: 'Get Inbox-Label Matrix Report',
				value: 'Get inbox-label matrix report',
				action: 'Get inbox label matrix report',
				description: `Get a matrix showing the count of conversations for each inbox-label combination.
Returns a list of inboxes, labels, and a 2D matrix where each cell contains the count of conversations
in a specific inbox that have a specific label applied. **Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.`,
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/accounts/{{$parameter["account_id"]}}/reports/inbox_label_matrix',
					},
				},
			},
			{
				name: 'Get Outgoing Messages Count Grouped by Entity',
				value: 'Get outgoing messages count grouped by entity',
				action: 'Get outgoing messages count grouped by entity',
				description: `Get the count of outgoing messages grouped by a specified entity (agent, team, inbox, or label).
When grouped by agent, messages sent by bots (AgentBot, Captain::Assistant) are excluded. **Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.`,
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/accounts/{{$parameter["account_id"]}}/reports/outgoing_messages_count',
					},
				},
			},
		],
		default: 'Account Reporting Events',
	},
	{
		displayName: 'Account ID',
		name: 'account_id',
		required: true,
		type: 'number',
		default: 1,
		description: 'The numeric ID of the account',
		displayOptions: {
			show: {
				resource: ['Reports'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/reporting_events',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['Account Reporting Events'],
			},
		},
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		description: 'Optional fields to include in the request',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['Account Reporting Events'],
			},
		},
		options: [
			{
				displayName: 'Inbox ID',
				name: 'inbox_id',
				type: 'number',
				default: 0,
				description: 'Filter events by inbox ID',
				routing: {
					send: {
						type: 'query',
						property: 'inbox_id',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter events by event name (e.g., first_response, resolution, reply_time)',
				routing: {
					send: {
						type: 'query',
						property: 'name',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'Since',
				name: 'since',
				type: 'string',
				default: '',
				description: 'The timestamp from where events should start (Unix timestamp in seconds)',
				routing: {
					send: {
						type: 'query',
						property: 'since',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'Until',
				name: 'until',
				type: 'string',
				default: '',
				description: 'The timestamp from where events should stop (Unix timestamp in seconds)',
				routing: {
					send: {
						type: 'query',
						property: 'until',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'User ID',
				name: 'user_id',
				type: 'number',
				default: 0,
				description: 'Filter events by user/agent ID',
				routing: {
					send: {
						type: 'query',
						property: 'user_id',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
		],
	},
	{
		displayName: 'GET /api/v2/accounts/{account_id}/reports',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['Get Account reports'],
			},
		},
	},
	{
		displayName: 'GET /api/v2/accounts/{account_id}/reports/summary',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['Get Account reports summary'],
			},
		},
	},
	{
		displayName: 'GET /api/v2/accounts/{account_id}/reports/conversations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['Account Conversation Metrics'],
			},
		},
	},
	{
		displayName: 'GET /api/v2/accounts/{account_id}/reports/conversations/',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['Agent Conversation Metrics'],
			},
		},
	},
	{
		displayName: 'GET /api/v2/accounts/{account_id}/summary_reports/channel',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['Get conversation statistics grouped by channel type'],
			},
		},
	},
	{
		displayName: 'GET /api/v2/accounts/{account_id}/summary_reports/inbox',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['Get conversation statistics grouped by inbox'],
			},
		},
	},
	{
		displayName: 'GET /api/v2/accounts/{account_id}/summary_reports/agent',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['Get conversation statistics grouped by agent'],
			},
		},
	},
	{
		displayName: 'GET /api/v2/accounts/{account_id}/summary_reports/team',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['Get conversation statistics grouped by team'],
			},
		},
	},
	{
		displayName: 'GET /api/v2/accounts/{account_id}/reports/first_response_time_distribution',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['Get first response time distribution by channel'],
			},
		},
	},
	{
		displayName: 'GET /api/v2/accounts/{account_id}/reports/inbox_label_matrix',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['Get inbox-label matrix report'],
			},
		},
	},
	{
		displayName: 'GET /api/v2/accounts/{account_id}/reports/outgoing_messages_count',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['Get outgoing messages count grouped by entity'],
			},
		},
	},
	{
		displayName: 'Group By',
		name: 'group_by',
		required: true,
		type: 'options',
		default: 'agent',
		description: 'The entity to group outgoing message counts by',
		options: [
			{
				name: 'Agent',
				value: 'agent',
			},
			{
				name: 'Inbox',
				value: 'inbox',
			},
			{
				name: 'Label',
				value: 'label',
			},
			{
				name: 'Team',
				value: 'team',
			},
		],
		routing: {
			send: {
				type: 'query',
				property: 'group_by',
				value: '={{ $value }}',
				propertyInDotNotation: false,
			},
		},
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['Get outgoing messages count grouped by entity'],
			},
		},
	},
];
export default properties;

import type { IHttpRequestOptions, INodeProperties } from 'n8n-workflow';
const cleanConversationsListQuery = async (
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> => {
	const query = requestOptions.qs as Record<string, unknown> | undefined;
	if (!query) {
		return requestOptions;
	}
	for (const key of Object.keys(query)) {
		if (query[key] === '' || query[key] === null || query[key] === undefined) {
			delete query[key];
		}
	}
	for (const key of ['inbox_id', 'team_id']) {
		if (query[key] === 0 || query[key] === '0') {
			delete query[key];
		}
	}
	if (query.page === 0 || query.page === '0') {
		delete query.page;
	}
	if (Array.isArray(query.labels) && query.labels.length === 0) {
		delete query.labels;
	}
	return requestOptions;
};
const cleanCreateConversationBody = async (
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> => {
	const body = requestOptions.body as Record<string, unknown> | undefined;
	if (!body) {
		return requestOptions;
	}
	for (const key of Object.keys(body)) {
		if (body[key] === '' || body[key] === null || body[key] === undefined) {
			delete body[key];
		}
	}
	for (const key of ['inbox_id', 'contact_id', 'assignee_id', 'team_id']) {
		if (body[key] === 0 || body[key] === '0') {
			delete body[key];
		}
	}
	return requestOptions;
};
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Conversations'],
			},
		},
		options: [
			{
				name: 'Add Labels',
				value: 'Add Labels',
				action: 'Add labels',
				description:
					'Add labels to a conversation. Note that this API would overwrite the existing list of labels associated to the conversation.',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/labels',
					},
				},
			},
			{
				name: 'Conversation Details',
				value: 'Conversation Details',
				action: 'Conversation details',
				description:
					'Get all details regarding a conversation with all messages in the conversation',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}',
					},
				},
			},
			{
				name: 'Conversation Reporting Events',
				value: 'Conversation Reporting Events',
				action: 'Conversation reporting events',
				description:
					'Get reporting events for a specific conversation. This endpoint returns events such as first response time, resolution time, and other metrics for the conversation, sorted by creation time in ascending order.',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/reporting_events',
					},
				},
			},
			{
				name: 'Conversations Filter',
				value: 'Conversations Filter',
				action: 'Conversations filter',
				description: 'Filter conversations with custom filter options and pagination',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/filter',
					},
				},
			},
			{
				name: 'Conversations List',
				value: 'Conversations List',
				action: 'Conversations list',
				description: 'List all the conversations with pagination',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations',
						arrayFormat: 'brackets',
					},
				},
			},
			{
				name: 'Create New Conversation',
				value: 'Create New Conversation',
				action: 'Create new conversation',
				description:
					'Creating a conversation in chatwoot requires a source ID. Learn more about source_id: https://www.chatwoot.com/hc/user-guide/articles/1677839703-how-to-create-an-api-channel-inbox#send-messages-to-the-api-channel.',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations',
					},
				},
			},
			{
				name: 'Get Conversation Counts',
				value: 'Get Conversation Counts',
				action: 'Get conversation counts',
				description: 'Get open, unassigned and all Conversation counts',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/meta',
					},
				},
			},
			{
				name: 'List Labels',
				value: 'List Labels',
				action: 'List labels',
				description: 'Lists all the labels of a conversation',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/labels',
					},
				},
			},
			{
				name: 'Toggle Priority',
				value: 'Toggle Priority',
				action: 'Toggle priority',
				description: 'Toggles the priority of conversation',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/toggle_priority',
					},
				},
			},
			{
				name: 'Toggle Status',
				value: 'Toggle Status',
				action: 'Toggle status',
				description:
					'Toggle the status of a conversation. Pass `status` to explicitly set the\nconversation state. Use `snoozed` along with `snoozed_until` to snooze a\nconversation until a specific time. If `snoozed_until` is omitted, the\nconversation is snoozed until the next reply from the contact. Regardless\nof the value provided, snoozed conversations always reopen on the next\nreply from the contact.',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/toggle_status',
					},
				},
			},
			{
				name: 'Toggle Typing Status',
				value: 'Toggle Typing Status',
				action: 'Toggle typing status',
				description: 'Toggles the typing status for a conversation',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/toggle_typing_status',
					},
				},
			},
			{
				name: 'Update Conversation',
				value: 'Update Conversation',
				action: 'Update conversation',
				description: 'Update Conversation Attributes',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}',
					},
				},
			},
			{
				name: 'Update Custom Attributes',
				value: 'Update Custom Attributes',
				action: 'Update custom attributes',
				description: 'Updates the custom attributes of a conversation',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/custom_attributes',
					},
				},
			},
		],
		default: 'Get Conversation Counts',
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
				resource: ['Conversations'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/conversations/meta',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Get Conversation Counts'],
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
				resource: ['Conversations'],
				operation: ['Get Conversation Counts'],
			},
		},
		options: [
			{
				displayName: 'Inbox ID',
				name: 'inbox_id',
				type: 'number',
				default: 0,
				description: 'Inbox ID query parameter',
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
				displayName: 'Labels',
				name: 'labels',
				type: 'json',
				default: '',
				description: 'Labels query parameter',
				routing: {
					send: {
						type: 'query',
						property: 'labels',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'Q',
				name: 'q',
				type: 'string',
				default: '',
				description: 'Filters conversations with messages containing the search term',
				routing: {
					send: {
						type: 'query',
						property: 'q',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: 'all',
				description: 'Filter by conversation status',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Open',
						value: 'open',
					},
					{
						name: 'Pending',
						value: 'pending',
					},
					{
						name: 'Resolved',
						value: 'resolved',
					},
					{
						name: 'Snoozed',
						value: 'snoozed',
					},
				],
				routing: {
					send: {
						type: 'query',
						property: 'status',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'Team ID',
				name: 'team_id',
				type: 'number',
				default: 0,
				description: 'Team ID query parameter',
				routing: {
					send: {
						type: 'query',
						property: 'team_id',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
		],
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/conversations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Conversations List'],
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
				resource: ['Conversations'],
				operation: ['Conversations List'],
			},
		},
		options: [
			{
				displayName: 'Assignee Type',
				name: 'assignee_type',
				type: 'options',
				default: 'all',
				description: 'Filter conversations by assignee type',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Assigned',
						value: 'assigned',
					},
					{
						name: 'Me',
						value: 'me',
					},
					{
						name: 'Unassigned',
						value: 'unassigned',
					},
				],
				routing: {
					send: {
						type: 'query',
						property: 'assignee_type',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'Inbox ID',
				name: 'inbox_id',
				type: 'number',
				default: 0,
				description: 'Inbox ID query parameter',
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
				displayName: 'Labels',
				name: 'labels',
				type: 'json',
				default: '',
				description: 'Labels query parameter',
				routing: {
					send: {
						type: 'query',
						property: 'labels',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				description: 'Paginate through conversations',
				routing: {
					send: {
						preSend: [cleanConversationsListQuery],
						type: 'query',
						property: 'page',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'Q',
				name: 'q',
				type: 'string',
				default: '',
				description: 'Filters conversations with messages containing the search term',
				routing: {
					send: {
						type: 'query',
						property: 'q',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: 'open',
				description: 'Filter by conversation status',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Open',
						value: 'open',
					},
					{
						name: 'Pending',
						value: 'pending',
					},
					{
						name: 'Resolved',
						value: 'resolved',
					},
					{
						name: 'Snoozed',
						value: 'snoozed',
					},
				],
				routing: {
					send: {
						type: 'query',
						property: 'status',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'Team ID',
				name: 'team_id',
				type: 'number',
				default: 0,
				description: 'Team ID query parameter',
				routing: {
					send: {
						type: 'query',
						property: 'team_id',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
		],
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/conversations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Create New Conversation'],
			},
		},
	},
	{
		displayName: 'Source ID',
		name: 'source_id',
		required: true,
		type: 'string',
		default: '',
		description: 'Conversation source ID',
		routing: {
			send: {
				property: 'source_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Create New Conversation'],
			},
		},
	},
	{
		displayName: 'Inbox ID',
		name: 'inbox_id',
		type: 'number',
		default: 0,
		description:
			'ID of the inbox in which to create the conversation. Allowed inbox types: Website, Phone, API, and Email.',
		routing: {
			send: {
				property: 'inbox_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Create New Conversation'],
			},
		},
	},
	{
		displayName: 'Contact ID',
		name: 'contact_id',
		type: 'number',
		default: 0,
		description: 'ID of the contact for which to create the conversation',
		routing: {
			send: {
				preSend: [cleanCreateConversationBody],
				property: 'contact_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Create New Conversation'],
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
				resource: ['Conversations'],
				operation: ['Create New Conversation'],
			},
		},
		options: [
			{
				displayName: 'Additional Attributes',
				name: 'additional_attributes',
				type: 'json',
				default: '',
				description: 'Lets you specify attributes like browser information',
				routing: {
					send: {
						property: 'additional_attributes',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Assignee ID',
				name: 'assignee_id',
				type: 'number',
				default: 0,
				description: 'Agent ID for assigning a conversation to an agent',
				routing: {
					send: {
						property: 'assignee_id',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Custom Attributes',
				name: 'custom_attributes',
				type: 'resourceMapper',
				default: {},
				description:
					'The object to save custom attributes for conversation, accepts custom attributes key and value',
				typeOptions: {
					resourceMapper: {
						resourceMapperMethod: 'getCustomAttributeFields',
						mode: 'add',
						fieldWords: {
							singular: 'Custom Attribute',
							plural: 'Custom Attributes',
						},
						addAllFields: true,
					},
				},
				routing: {
					send: {
						property: 'custom_attributes',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Message',
				name: 'message',
				type: 'json',
				default: '',
				description: 'The initial message to be sent to the conversation',
				routing: {
					send: {
						property: 'message',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Snoozed Until',
				name: 'snoozed_until',
				type: 'string',
				default: '',
				description: 'Snoozed until date time',
				routing: {
					send: {
						property: 'snoozed_until',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: 'open',
				description: "Specify the conversation whether it's pending, open, closed",
				options: [
					{
						name: 'Open',
						value: 'open',
					},
					{
						name: 'Pending',
						value: 'pending',
					},
					{
						name: 'Resolved',
						value: 'resolved',
					},
				],
				routing: {
					send: {
						property: 'status',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Team ID',
				name: 'team_id',
				type: 'number',
				default: 0,
				description: 'Team ID for assigning a conversation to a team',
				routing: {
					send: {
						property: 'team_id',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/conversations/filter',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Conversations Filter'],
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
				resource: ['Conversations'],
				operation: ['Conversations Filter'],
			},
		},
		options: [
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 0,
				description: 'Page query parameter',
				routing: {
					send: {
						type: 'query',
						property: 'page',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'Payload',
				name: 'payload',
				type: 'json',
				default: '',
				description: 'Payload body field',
				routing: {
					send: {
						property: 'payload',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/conversations/{conversation_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Conversation Details'],
			},
		},
	},
	{
		displayName: 'Conversation Name or ID',
		name: 'conversation_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Conversation ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationConversationList',
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Conversation Details'],
			},
		},
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/conversations/{conversation_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Update Conversation'],
			},
		},
	},
	{
		displayName: 'Conversation Name or ID',
		name: 'conversation_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Conversation ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationConversationList',
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Update Conversation'],
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
				resource: ['Conversations'],
				operation: ['Update Conversation'],
			},
		},
		options: [
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				default: 'urgent',
				description: 'The priority of the conversation',
				options: [
					{
						name: 'High',
						value: 'high',
					},
					{
						name: 'Low',
						value: 'low',
					},
					{
						name: 'Medium',
						value: 'medium',
					},
					{
						name: 'None',
						value: 'none',
					},
					{
						name: 'Urgent',
						value: 'urgent',
					},
				],
				routing: {
					send: {
						property: 'priority',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Sla Policy ID',
				name: 'sla_policy_id',
				type: 'number',
				default: 0,
				description: 'The ID of the SLA policy (Available only in Enterprise edition)',
				routing: {
					send: {
						property: 'sla_policy_id',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_status',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Toggle Status'],
			},
		},
	},
	{
		displayName: 'Conversation Name or ID',
		name: 'conversation_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Conversation ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationConversationList',
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Toggle Status'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		required: true,
		type: 'options',
		default: 'open',
		description: 'The status of the conversation',
		options: [
			{
				name: 'Open',
				value: 'open',
			},
			{
				name: 'Pending',
				value: 'pending',
			},
			{
				name: 'Resolved',
				value: 'resolved',
			},
			{
				name: 'Snoozed',
				value: 'snoozed',
			},
		],
		routing: {
			send: {
				property: 'status',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Toggle Status'],
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
				resource: ['Conversations'],
				operation: ['Toggle Status'],
			},
		},
		options: [
			{
				displayName: 'Snoozed Until',
				name: 'snoozed_until',
				type: 'number',
				default: 0,
				description:
					'When status is `snoozed`, schedule the reopen time as a Unix timestamp in seconds. If not provided, the conversation is snoozed until the next customer reply. The conversation always reopens when the customer replies.',
				routing: {
					send: {
						property: 'snoozed_until',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName:
			'POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_priority',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Toggle Priority'],
			},
		},
	},
	{
		displayName: 'Conversation Name or ID',
		name: 'conversation_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Conversation ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationConversationList',
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Toggle Priority'],
			},
		},
	},
	{
		displayName: 'Priority',
		name: 'priority',
		required: true,
		type: 'options',
		default: 'urgent',
		description: 'The priority of the conversation',
		options: [
			{
				name: 'High',
				value: 'high',
			},
			{
				name: 'Low',
				value: 'low',
			},
			{
				name: 'Medium',
				value: 'medium',
			},
			{
				name: 'None',
				value: 'none',
			},
			{
				name: 'Urgent',
				value: 'urgent',
			},
		],
		routing: {
			send: {
				property: 'priority',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Toggle Priority'],
			},
		},
	},
	{
		displayName:
			'POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_typing_status',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Toggle Typing Status'],
			},
		},
	},
	{
		displayName: 'Conversation Name or ID',
		name: 'conversation_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Conversation ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationConversationList',
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Toggle Typing Status'],
			},
		},
	},
	{
		displayName: 'Typing Status',
		name: 'typing_status',
		required: true,
		type: 'options',
		default: 'on',
		description: 'Typing status to set',
		options: [
			{
				name: 'Off',
				value: 'off',
			},
			{
				name: 'On',
				value: 'on',
			},
		],
		routing: {
			send: {
				property: 'typing_status',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Toggle Typing Status'],
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
				resource: ['Conversations'],
				operation: ['Toggle Typing Status'],
			},
		},
		options: [
			{
				displayName: 'Is Private',
				name: 'is_private',
				type: 'boolean',
				default: false,
				description: 'Whether the typing event is for private notes',
				routing: {
					send: {
						property: 'is_private',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName:
			'POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/custom_attributes',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Update Custom Attributes'],
			},
		},
	},
	{
		displayName: 'Conversation Name or ID',
		name: 'conversation_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Conversation ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationConversationList',
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Update Custom Attributes'],
			},
		},
	},
	{
		displayName: 'Custom Attributes',
		name: 'custom_attributes',
		required: true,
		type: 'resourceMapper',
		default: {},
		description: 'The custom attributes to be set for the conversation',
		typeOptions: {
			resourceMapper: {
				resourceMapperMethod: 'getCustomAttributeFields',
				mode: 'add',
				fieldWords: {
					singular: 'Custom Attribute',
					plural: 'Custom Attributes',
				},
				addAllFields: true,
			},
		},
		routing: {
			send: {
				property: 'custom_attributes',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Update Custom Attributes'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/labels',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['List Labels'],
			},
		},
	},
	{
		displayName: 'Conversation Name or ID',
		name: 'conversation_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Conversation ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationConversationList',
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['List Labels'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/labels',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Add Labels'],
			},
		},
	},
	{
		displayName: 'Conversation Name or ID',
		name: 'conversation_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Conversation ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationConversationList',
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Add Labels'],
			},
		},
	},
	{
		displayName: 'Labels',
		name: 'labels',
		required: true,
		type: 'json',
		default: '',
		description: 'Array of labels (comma-separated strings)',
		routing: {
			send: {
				property: 'labels',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Add Labels'],
			},
		},
	},
	{
		displayName:
			'GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/reporting_events',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Conversation Reporting Events'],
			},
		},
	},
	{
		displayName: 'Conversation Name or ID',
		name: 'conversation_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Conversation ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationConversationList',
		},
		displayOptions: {
			show: {
				resource: ['Conversations'],
				operation: ['Conversation Reporting Events'],
			},
		},
	},
];
export default properties;

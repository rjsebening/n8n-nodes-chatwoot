import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Inboxes'],
			},
		},
		options: [
			{
				name: 'Add a New Agent',
				value: 'Add a New Agent',
				action: 'Add a new agent',
				description: 'Add a new Agent to Inbox',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inbox_members',
					},
				},
			},
			{
				name: 'Add or Remove Agent Bot',
				value: 'Add or remove agent bot',
				action: 'Add or remove agent bot',
				description:
					'To add an agent bot pass agent_bot ID, to remove agent bot from an inbox pass null',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inboxes/{{$parameter["id"]}}/set_agent_bot',
					},
				},
			},
			{
				name: 'Create an Inbox',
				value: 'Create an inbox',
				action: 'Create an inbox',
				description: 'You can create more than one website inbox in each account',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inboxes',
					},
				},
			},
			{
				name: 'Get an Inbox',
				value: 'Get an inbox',
				action: 'Get an inbox',
				description: 'Get an inbox available in the current account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inboxes/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'List Agents in Inbox',
				value: 'List Agents in Inbox',
				action: 'List agents in inbox',
				description: 'Get Details of Agents in an Inbox',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inbox_members/{{$parameter["inbox_id"]}}',
					},
				},
			},
			{
				name: 'List All Inboxes',
				value: 'List all inboxes',
				action: 'List all inboxes',
				description: 'List all inboxes available in the current account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inboxes',
					},
				},
			},
			{
				name: 'Remove an Agent From Inbox',
				value: 'Remove an Agent from Inbox',
				action: 'Remove an agent from inbox',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inbox_members',
					},
				},
			},
			{
				name: 'Show Inbox Agent Bot',
				value: 'Show Inbox Agent Bot',
				action: 'Show inbox agent bot',
				description: 'See if an agent bot is associated to the Inbox',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inboxes/{{$parameter["id"]}}/agent_bot',
					},
				},
			},
			{
				name: 'Update Agents in Inbox',
				value: 'Update Agents in Inbox',
				action: 'Update agents in inbox',
				description: 'All agents except the one passed in params will be removed',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inbox_members',
					},
				},
			},
			{
				name: 'Update Inbox',
				value: 'Update Inbox',
				action: 'Update inbox',
				description: 'Update an existing inbox',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inboxes/{{$parameter["id"]}}',
					},
				},
			},
		],
		default: 'List all inboxes',
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
				resource: ['Inboxes'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/inboxes',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['List all inboxes'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/inboxes',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Create an inbox'],
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
				resource: ['Inboxes'],
				operation: ['Create an inbox'],
			},
		},
		options: [
			{
				displayName: 'Allow Messages After Resolved',
				name: 'allow_messages_after_resolved',
				type: 'boolean',
				default: false,
				description: 'Whether to allow messages after conversation is resolved',
				routing: {
					send: {
						property: 'allow_messages_after_resolved',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Avatar',
				name: 'avatar',
				type: 'string',
				default: '',
				description: 'Image file for avatar',
				routing: {
					send: {
						property: 'avatar',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Business Name',
				name: 'business_name',
				type: 'string',
				default: '',
				description: 'Business name for the inbox',
				routing: {
					send: {
						property: 'business_name',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Channel',
				name: 'channel',
				type: 'json',
				default: '',
				description: 'Channel body field',
				routing: {
					send: {
						property: 'channel',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'CSAT Survey Enabled',
				name: 'csat_survey_enabled',
				type: 'boolean',
				default: false,
				description: 'Whether to enable CSAT survey',
				routing: {
					send: {
						property: 'csat_survey_enabled',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Enable Auto Assignment',
				name: 'enable_auto_assignment',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						property: 'enable_auto_assignment',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Enable Email Collect',
				name: 'enable_email_collect',
				type: 'boolean',
				default: false,
				description: 'Whether to enable email collection',
				routing: {
					send: {
						property: 'enable_email_collect',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Greeting Enabled',
				name: 'greeting_enabled',
				type: 'boolean',
				default: false,
				description: 'Whether to enable greeting message',
				routing: {
					send: {
						property: 'greeting_enabled',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Greeting Message',
				name: 'greeting_message',
				type: 'string',
				default: '',
				description: 'Greeting message to be displayed on the widget',
				routing: {
					send: {
						property: 'greeting_message',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Lock To Single Conversation',
				name: 'lock_to_single_conversation',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						property: 'lock_to_single_conversation',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the inbox',
				routing: {
					send: {
						property: 'name',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Out Of Office Message',
				name: 'out_of_office_message',
				type: 'string',
				default: '',
				description: 'Out of office message to be displayed on the widget',
				routing: {
					send: {
						property: 'out_of_office_message',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Portal ID',
				name: 'portal_id',
				type: 'number',
				default: 0,
				description: 'ID of the help center portal to attach to the inbox',
				routing: {
					send: {
						property: 'portal_id',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Sender Name Type',
				name: 'sender_name_type',
				type: 'options',
				default: 'friendly',
				description: 'Sender name type for the inbox',
				options: [
					{
						name: 'Friendly',
						value: 'friendly',
					},
					{
						name: 'Professional',
						value: 'professional',
					},
				],
				routing: {
					send: {
						property: 'sender_name_type',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Timezone',
				name: 'timezone',
				type: 'string',
				default: '',
				description: 'Timezone of the inbox',
				routing: {
					send: {
						property: 'timezone',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Working Hours Enabled',
				name: 'working_hours_enabled',
				type: 'boolean',
				default: false,
				description: 'Whether to enable working hours',
				routing: {
					send: {
						property: 'working_hours_enabled',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/inboxes/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Get an inbox'],
			},
		},
	},
	{
		displayName: 'Name or ID',
		name: 'id',
		required: true,
		type: 'options',
		default: '',
		description:
			'ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllInboxes',
		},
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Get an inbox'],
			},
		},
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/inboxes/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Update Inbox'],
			},
		},
	},
	{
		displayName: 'Name or ID',
		name: 'id',
		required: true,
		type: 'options',
		default: '',
		description:
			'ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllInboxes',
		},
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Update Inbox'],
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
				resource: ['Inboxes'],
				operation: ['Update Inbox'],
			},
		},
		options: [
			{
				displayName: 'Allow Messages After Resolved',
				name: 'allow_messages_after_resolved',
				type: 'boolean',
				default: false,
				description: 'Whether to allow messages after conversation is resolved',
				routing: {
					send: {
						property: 'allow_messages_after_resolved',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Avatar',
				name: 'avatar',
				type: 'string',
				default: '',
				description: 'Image file for avatar',
				routing: {
					send: {
						property: 'avatar',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Business Name',
				name: 'business_name',
				type: 'string',
				default: '',
				description: 'Business name for the inbox',
				routing: {
					send: {
						property: 'business_name',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Channel',
				name: 'channel',
				type: 'json',
				default: '',
				description: 'Channel body field',
				routing: {
					send: {
						property: 'channel',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'CSAT Survey Enabled',
				name: 'csat_survey_enabled',
				type: 'boolean',
				default: false,
				description: 'Whether to enable CSAT survey',
				routing: {
					send: {
						property: 'csat_survey_enabled',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Enable Auto Assignment',
				name: 'enable_auto_assignment',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						property: 'enable_auto_assignment',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Enable Email Collect',
				name: 'enable_email_collect',
				type: 'boolean',
				default: false,
				description: 'Whether to enable email collection',
				routing: {
					send: {
						property: 'enable_email_collect',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Greeting Enabled',
				name: 'greeting_enabled',
				type: 'boolean',
				default: false,
				description: 'Whether to enable greeting message',
				routing: {
					send: {
						property: 'greeting_enabled',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Greeting Message',
				name: 'greeting_message',
				type: 'string',
				default: '',
				description: 'Greeting message to be displayed on the widget',
				routing: {
					send: {
						property: 'greeting_message',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Lock To Single Conversation',
				name: 'lock_to_single_conversation',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						property: 'lock_to_single_conversation',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the inbox',
				routing: {
					send: {
						property: 'name',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Out Of Office Message',
				name: 'out_of_office_message',
				type: 'string',
				default: '',
				description: 'Out of office message to be displayed on the widget',
				routing: {
					send: {
						property: 'out_of_office_message',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Portal ID',
				name: 'portal_id',
				type: 'number',
				default: 0,
				description: 'ID of the help center portal to attach to the inbox',
				routing: {
					send: {
						property: 'portal_id',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Sender Name Type',
				name: 'sender_name_type',
				type: 'options',
				default: 'friendly',
				description: 'Sender name type for the inbox',
				options: [
					{
						name: 'Friendly',
						value: 'friendly',
					},
					{
						name: 'Professional',
						value: 'professional',
					},
				],
				routing: {
					send: {
						property: 'sender_name_type',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Timezone',
				name: 'timezone',
				type: 'string',
				default: '',
				description: 'Timezone of the inbox',
				routing: {
					send: {
						property: 'timezone',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Working Hours Enabled',
				name: 'working_hours_enabled',
				type: 'boolean',
				default: false,
				description: 'Whether to enable working hours',
				routing: {
					send: {
						property: 'working_hours_enabled',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/inboxes/{ID}/agent_bot',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Show Inbox Agent Bot'],
			},
		},
	},
	{
		displayName: 'Name or ID',
		name: 'id',
		required: true,
		type: 'options',
		default: '',
		description:
			'ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllInboxes',
		},
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Show Inbox Agent Bot'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/inboxes/{ID}/set_agent_bot',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Add or remove agent bot'],
			},
		},
	},
	{
		displayName: 'Name or ID',
		name: 'id',
		required: true,
		type: 'options',
		default: '',
		description:
			'ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllInboxes',
		},
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Add or remove agent bot'],
			},
		},
	},
	{
		displayName: 'Agent Bot',
		name: 'agent_bot',
		required: true,
		type: 'number',
		default: 0,
		description: 'Agent bot ID',
		routing: {
			send: {
				property: 'agent_bot',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Add or remove agent bot'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/inbox_members/{inbox_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['List Agents in Inbox'],
			},
		},
	},
	{
		displayName: 'Inbox Name or ID',
		name: 'inbox_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Inbox ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllInboxes',
		},
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['List Agents in Inbox'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/inbox_members',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Add a New Agent'],
			},
		},
	},
	{
		displayName: 'Inbox ID',
		name: 'inbox_id',
		required: true,
		type: 'number',
		default: 0,
		description: 'The ID of the inbox',
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
				resource: ['Inboxes'],
				operation: ['Add a New Agent'],
			},
		},
	},
	{
		displayName: 'User IDs',
		name: 'user_ids',
		required: true,
		type: 'json',
		default: '',
		description: 'IDs of users to be added to the inbox',
		routing: {
			send: {
				property: 'user_ids',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Add a New Agent'],
			},
		},
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/inbox_members',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Update Agents in Inbox'],
			},
		},
	},
	{
		displayName: 'Inbox ID',
		name: 'inbox_id',
		required: true,
		type: 'string',
		default: '',
		description: 'The ID of the inbox',
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
				resource: ['Inboxes'],
				operation: ['Update Agents in Inbox'],
			},
		},
	},
	{
		displayName: 'User IDs',
		name: 'user_ids',
		required: true,
		type: 'json',
		default: '',
		description: 'IDs of users to be added to the inbox',
		routing: {
			send: {
				property: 'user_ids',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Update Agents in Inbox'],
			},
		},
	},
	{
		displayName: 'DELETE /api/v1/accounts/{account_id}/inbox_members',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Remove an Agent from Inbox'],
			},
		},
	},
	{
		displayName: 'Inbox ID',
		name: 'inbox_id',
		required: true,
		type: 'string',
		default: '',
		description: 'The ID of the inbox',
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
				resource: ['Inboxes'],
				operation: ['Remove an Agent from Inbox'],
			},
		},
	},
	{
		displayName: 'User IDs',
		name: 'user_ids',
		required: true,
		type: 'json',
		default: '',
		description: 'IDs of users to be deleted from the inbox',
		routing: {
			send: {
				property: 'user_ids',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Inboxes'],
				operation: ['Remove an Agent from Inbox'],
			},
		},
	},
];
export default properties;

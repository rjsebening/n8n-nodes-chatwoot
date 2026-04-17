import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Automation Rule'],
			},
		},
		options: [
			{
				name: 'Add a New Automation Rule',
				value: 'Add a new automation rule',
				action: 'Add a new automation rule',
				description: 'Add a new automation rule to account',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/automation_rules',
					},
				},
			},
			{
				name: 'Get a Automation Rule Details',
				value: 'Get a automation rule details',
				action: 'Get a automation rule details',
				description: 'Get the details of a automation rule in the account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/automation_rules/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'List All Automation Rules in an Account',
				value: 'List all automation rules in an account',
				action: 'List all automation rules in an account',
				description: 'Get details of automation rules in an Account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/automation_rules',
					},
				},
			},
			{
				name: 'Remove a Automation Rule From Account',
				value: 'Remove a automation rule from account',
				action: 'Remove a automation rule from account',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/automation_rules/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'Update Automation Rule in Account',
				value: 'Update automation rule in Account',
				action: 'Update automation rule in account',
				description: 'Update a automation rule in account',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/automation_rules/{{$parameter["id"]}}',
					},
				},
			},
		],
		default: 'List all automation rules in an account',
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
				resource: ['Automation Rule'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/automation_rules',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Automation Rule'],
				operation: ['List all automation rules in an account'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/automation_rules',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Automation Rule'],
				operation: ['Add a new automation rule'],
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
				resource: ['Automation Rule'],
				operation: ['Add a new automation rule'],
			},
		},
		options: [
			{
				displayName: 'Actions',
				name: 'actions',
				type: 'json',
				default: '',
				description:
					'Array of actions which you want to perform when condition matches, e.g add label support if message contains content help',
				routing: {
					send: {
						property: 'actions',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Active',
				name: 'active',
				type: 'boolean',
				default: false,
				description: 'Whether to enable the automation rule',
				routing: {
					send: {
						property: 'active',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Conditions',
				name: 'conditions',
				type: 'json',
				default: '',
				description:
					'Array of conditions on which conversation filter would work, e.g message content contains text help',
				routing: {
					send: {
						property: 'conditions',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'The description about the automation and actions',
				routing: {
					send: {
						property: 'description',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Event Name',
				name: 'event_name',
				type: 'options',
				default: 'conversation_created',
				description: 'The event when you want to execute the automation actions',
				options: [
					{
						name: 'Conversation Created',
						value: 'conversation_created',
					},
					{
						name: 'Conversation Updated',
						value: 'conversation_updated',
					},
					{
						name: 'Conversation Resolved',
						value: 'conversation_resolved',
					},
					{
						name: 'Message Created',
						value: 'message_created',
					},
				],
				routing: {
					send: {
						property: 'event_name',
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
				description: 'Rule name',
				routing: {
					send: {
						property: 'name',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/automation_rules/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Automation Rule'],
				operation: ['Get a automation rule details'],
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
			loadOptionsMethod: 'loadApplicationGetAccountAutomationRule',
		},
		displayOptions: {
			show: {
				resource: ['Automation Rule'],
				operation: ['Get a automation rule details'],
			},
		},
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/automation_rules/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Automation Rule'],
				operation: ['Update automation rule in Account'],
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
			loadOptionsMethod: 'loadApplicationGetAccountAutomationRule',
		},
		displayOptions: {
			show: {
				resource: ['Automation Rule'],
				operation: ['Update automation rule in Account'],
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
				resource: ['Automation Rule'],
				operation: ['Update automation rule in Account'],
			},
		},
		options: [
			{
				displayName: 'Actions',
				name: 'actions',
				type: 'json',
				default: '',
				description:
					'Array of actions which you want to perform when condition matches, e.g add label support if message contains content help',
				routing: {
					send: {
						property: 'actions',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Active',
				name: 'active',
				type: 'boolean',
				default: false,
				description: 'Whether to enable the automation rule',
				routing: {
					send: {
						property: 'active',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Conditions',
				name: 'conditions',
				type: 'json',
				default: '',
				description:
					'Array of conditions on which conversation filter would work, e.g message content contains text help',
				routing: {
					send: {
						property: 'conditions',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'The description about the automation and actions',
				routing: {
					send: {
						property: 'description',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Event Name',
				name: 'event_name',
				type: 'options',
				default: 'conversation_created',
				description: 'The event when you want to execute the automation actions',
				options: [
					{
						name: 'Conversation Created',
						value: 'conversation_created',
					},
					{
						name: 'Conversation Updated',
						value: 'conversation_updated',
					},
					{
						name: 'Conversation Resolved',
						value: 'conversation_resolved',
					},
					{
						name: 'Message Created',
						value: 'message_created',
					},
				],
				routing: {
					send: {
						property: 'event_name',
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
				description: 'Rule name',
				routing: {
					send: {
						property: 'name',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'DELETE /api/v1/accounts/{account_id}/automation_rules/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Automation Rule'],
				operation: ['Remove a automation rule from account'],
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
			loadOptionsMethod: 'loadApplicationGetAccountAutomationRule',
		},
		displayOptions: {
			show: {
				resource: ['Automation Rule'],
				operation: ['Remove a automation rule from account'],
			},
		},
	},
];
export default properties;

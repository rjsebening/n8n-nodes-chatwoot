import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Integrations'],
			},
		},
		options: [
			{
				name: 'List All the Integrations',
				value: 'List all the Integrations',
				action: 'List all the integrations',
				description: 'Get the details of all Integrations available for the account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/integrations/apps',
					},
				},
			},
			{
				name: 'Create an Integration Hook',
				value: 'Create an integration hook',
				action: 'Create an integration hook',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/integrations/hooks',
					},
				},
			},
			{
				name: 'Update an Integration Hook',
				value: 'Update an Integration Hook',
				action: 'Update an integration hook',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/integrations/hooks/{{$parameter["hook_id"]}}',
					},
				},
			},
			{
				name: 'Delete an Integration Hook',
				value: 'Delete an Integration Hook',
				action: 'Delete an integration hook',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/integrations/hooks/{{$parameter["hook_id"]}}',
					},
				},
			},
		],
		default: 'List all the Integrations',
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
				resource: ['Integrations'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/integrations/apps',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Integrations'],
				operation: ['List all the Integrations'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/integrations/hooks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Integrations'],
				operation: ['Create an integration hook'],
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
				resource: ['Integrations'],
				operation: ['Create an integration hook'],
			},
		},
		options: [
			{
				displayName: 'App ID',
				name: 'app_id',
				type: 'number',
				default: 0,
				description: 'The ID of app for which integration hook is being created',
				routing: {
					send: {
						property: 'app_id',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Inbox ID',
				name: 'inbox_id',
				type: 'number',
				default: 0,
				description: 'The inbox ID, if the hook is an inbox hook',
				routing: {
					send: {
						property: 'inbox_id',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'number',
				default: 0,
				description: 'The status of the integration (0 for inactive, 1 for active)',
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
				displayName: 'Settings',
				name: 'settings',
				type: 'json',
				default: '',
				description: 'The settings required by the integration',
				routing: {
					send: {
						property: 'settings',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/integrations/hooks/{hook_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Integrations'],
				operation: ['Update an Integration Hook'],
			},
		},
	},
	{
		displayName: 'Hook Name or ID',
		name: 'hook_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Hook ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationGetDetailsOfAllIntegrations',
		},
		displayOptions: {
			show: {
				resource: ['Integrations'],
				operation: ['Update an Integration Hook'],
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
				resource: ['Integrations'],
				operation: ['Update an Integration Hook'],
			},
		},
		options: [
			{
				displayName: 'Status',
				name: 'status',
				type: 'number',
				default: 0,
				description: 'The status of the integration (0 for inactive, 1 for active)',
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
				displayName: 'Settings',
				name: 'settings',
				type: 'json',
				default: '',
				description: 'The settings required by the integration',
				routing: {
					send: {
						property: 'settings',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'DELETE /api/v1/accounts/{account_id}/integrations/hooks/{hook_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Integrations'],
				operation: ['Delete an Integration Hook'],
			},
		},
	},
	{
		displayName: 'Hook Name or ID',
		name: 'hook_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Hook ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationGetDetailsOfAllIntegrations',
		},
		displayOptions: {
			show: {
				resource: ['Integrations'],
				operation: ['Delete an Integration Hook'],
			},
		},
	},
];
export default properties;

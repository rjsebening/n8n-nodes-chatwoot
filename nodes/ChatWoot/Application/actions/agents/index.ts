import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Agents'],
			},
		},
		options: [
			{
				name: 'List Agents in Account',
				value: 'List Agents in Account',
				action: 'List agents in account',
				description: 'Get Details of Agents in an Account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agents',
					},
				},
			},
			{
				name: 'Add a New Agent',
				value: 'Add a New Agent',
				action: 'Add a new agent',
				description: 'Add a new Agent to Account',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agents',
					},
				},
			},
			{
				name: 'Update Agent in Account',
				value: 'Update Agent in Account',
				action: 'Update agent in account',
				description: 'Update an Agent in Account',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agents/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'Remove an Agent From Account',
				value: 'Remove an Agent from Account',
				action: 'Remove an agent from account',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agents/{{$parameter["id"]}}',
					},
				},
			},
		],
		default: 'List Agents in Account',
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
				resource: ['Agents'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/agents',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Agents'],
				operation: ['List Agents in Account'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/agents',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Agents'],
				operation: ['Add a New Agent'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		required: true,
		type: 'string',
		default: '',
		description: 'Full Name of the agent',
		routing: {
			send: {
				property: 'name',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Agents'],
				operation: ['Add a New Agent'],
			},
		},
	},
	{
		displayName: 'Email',
		name: 'email',
		required: true,
		type: 'string',
		placeholder: 'name@email.com',
		default: '',
		description: 'Email of the Agent',
		routing: {
			send: {
				property: 'email',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Agents'],
				operation: ['Add a New Agent'],
			},
		},
	},
	{
		displayName: 'Role',
		name: 'role',
		required: true,
		type: 'options',
		default: 'agent',
		description: 'Whether its administrator or agent',
		options: [
			{
				name: 'Agent',
				value: 'agent',
			},
			{
				name: 'Administrator',
				value: 'administrator',
			},
		],
		routing: {
			send: {
				property: 'role',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Agents'],
				operation: ['Add a New Agent'],
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
				resource: ['Agents'],
				operation: ['Add a New Agent'],
			},
		},
		options: [
			{
				displayName: 'Availability Status',
				name: 'availability_status',
				type: 'options',
				default: 'available',
				description: 'The availability setting of the agent',
				options: [
					{
						name: 'Available',
						value: 'available',
					},
					{
						name: 'Busy',
						value: 'busy',
					},
					{
						name: 'Offline',
						value: 'offline',
					},
				],
				routing: {
					send: {
						property: 'availability_status',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Auto Offline',
				name: 'auto_offline',
				type: 'boolean',
				default: false,
				description:
					'Whether the availability status of agent is configured to go offline automatically when away',
				routing: {
					send: {
						property: 'auto_offline',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/agents/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Agents'],
				operation: ['Update Agent in Account'],
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
			loadOptionsMethod: 'loadApplicationGetAccountAgents',
		},
		displayOptions: {
			show: {
				resource: ['Agents'],
				operation: ['Update Agent in Account'],
			},
		},
	},
	{
		displayName: 'Role',
		name: 'role',
		required: true,
		type: 'options',
		default: 'agent',
		description: 'Whether its administrator or agent',
		options: [
			{
				name: 'Agent',
				value: 'agent',
			},
			{
				name: 'Administrator',
				value: 'administrator',
			},
		],
		routing: {
			send: {
				property: 'role',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Agents'],
				operation: ['Update Agent in Account'],
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
				resource: ['Agents'],
				operation: ['Update Agent in Account'],
			},
		},
		options: [
			{
				displayName: 'Availability Status',
				name: 'availability_status',
				type: 'options',
				default: 'available',
				description: 'The availability status of the agent',
				options: [
					{
						name: 'Available',
						value: 'available',
					},
					{
						name: 'Busy',
						value: 'busy',
					},
					{
						name: 'Offline',
						value: 'offline',
					},
				],
				routing: {
					send: {
						property: 'availability_status',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Auto Offline',
				name: 'auto_offline',
				type: 'boolean',
				default: false,
				description:
					'Whether the availability status of agent is configured to go offline automatically when away',
				routing: {
					send: {
						property: 'auto_offline',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'DELETE /api/v1/accounts/{account_id}/agents/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Agents'],
				operation: ['Remove an Agent from Account'],
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
			loadOptionsMethod: 'loadApplicationGetAccountAgents',
		},
		displayOptions: {
			show: {
				resource: ['Agents'],
				operation: ['Remove an Agent from Account'],
			},
		},
	},
];
export default properties;

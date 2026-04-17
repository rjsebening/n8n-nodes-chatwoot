import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Account AgentBots'],
			},
		},
		options: [
			{
				name: 'Create an Agent Bot',
				value: 'Create an Agent Bot',
				action: 'Create an agent bot',
				description: 'Create an agent bot in the account',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agent_bots',
					},
				},
			},
			{
				name: 'Delete an AgentBot',
				value: 'Delete an AgentBot',
				action: 'Delete an agent bot',
				description: 'Delete an AgentBot from the account',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agent_bots/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'Get an Agent Bot Details',
				value: 'Get an agent bot details',
				action: 'Get an agent bot details',
				description: 'Get the details of an agent bot in the account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agent_bots/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'List All AgentBots',
				value: 'List all AgentBots',
				action: 'List all agent bots',
				description: 'List all agent bots available for the current account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agent_bots',
					},
				},
			},
			{
				name: 'Update an Agent Bot',
				value: 'Update an agent bot',
				action: 'Update an agent bot',
				description: "Update an agent bot's attributes",
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agent_bots/{{$parameter["id"]}}',
					},
				},
			},
		],
		default: 'List all AgentBots',
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
				resource: ['Account AgentBots'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/agent_bots',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Account AgentBots'],
				operation: ['List all AgentBots'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/agent_bots',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Account AgentBots'],
				operation: ['Create an Agent Bot'],
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
				resource: ['Account AgentBots'],
				operation: ['Create an Agent Bot'],
			},
		},
		options: [
			{
				displayName: 'Avatar',
				name: 'avatar',
				type: 'string',
				default: '',
				description: 'Send the form data with the avatar image binary or use the avatar_url',
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
				displayName: 'Avatar Url',
				name: 'avatar_url',
				type: 'string',
				default: '',
				description: 'The URL to a jpeg, png file for the agent bot avatar',
				routing: {
					send: {
						property: 'avatar_url',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Bot Config',
				name: 'bot_config',
				type: 'json',
				default: '',
				description: 'The configuration for the bot',
				routing: {
					send: {
						property: 'bot_config',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Bot Type',
				name: 'bot_type',
				type: 'number',
				default: 0,
				description: 'The type of the bot (0 for webhook)',
				routing: {
					send: {
						property: 'bot_type',
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
				description: 'The description of the agent bot',
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
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the agent bot',
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
				displayName: 'Outgoing Url',
				name: 'outgoing_url',
				type: 'string',
				default: '',
				description: 'The webhook URL for the bot',
				routing: {
					send: {
						property: 'outgoing_url',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/agent_bots/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Account AgentBots'],
				operation: ['Get an agent bot details'],
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
			loadOptionsMethod: 'loadApplicationListAllAccountAgentBots',
		},
		displayOptions: {
			show: {
				resource: ['Account AgentBots'],
				operation: ['Get an agent bot details'],
			},
		},
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/agent_bots/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Account AgentBots'],
				operation: ['Update an agent bot'],
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
			loadOptionsMethod: 'loadApplicationListAllAccountAgentBots',
		},
		displayOptions: {
			show: {
				resource: ['Account AgentBots'],
				operation: ['Update an agent bot'],
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
				resource: ['Account AgentBots'],
				operation: ['Update an agent bot'],
			},
		},
		options: [
			{
				displayName: 'Avatar',
				name: 'avatar',
				type: 'string',
				default: '',
				description: 'Send the form data with the avatar image binary or use the avatar_url',
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
				displayName: 'Avatar Url',
				name: 'avatar_url',
				type: 'string',
				default: '',
				description: 'The URL to a jpeg, png file for the agent bot avatar',
				routing: {
					send: {
						property: 'avatar_url',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Bot Config',
				name: 'bot_config',
				type: 'json',
				default: '',
				description: 'The configuration for the bot',
				routing: {
					send: {
						property: 'bot_config',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Bot Type',
				name: 'bot_type',
				type: 'number',
				default: 0,
				description: 'The type of the bot (0 for webhook)',
				routing: {
					send: {
						property: 'bot_type',
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
				description: 'The description of the agent bot',
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
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the agent bot',
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
				displayName: 'Outgoing Url',
				name: 'outgoing_url',
				type: 'string',
				default: '',
				description: 'The webhook URL for the bot',
				routing: {
					send: {
						property: 'outgoing_url',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'DELETE /api/v1/accounts/{account_id}/agent_bots/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Account AgentBots'],
				operation: ['Delete an AgentBot'],
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
			loadOptionsMethod: 'loadApplicationListAllAccountAgentBots',
		},
		displayOptions: {
			show: {
				resource: ['Account AgentBots'],
				operation: ['Delete an AgentBot'],
			},
		},
	},
];
export default properties;

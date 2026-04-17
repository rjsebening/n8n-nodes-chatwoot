import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['AgentBots'],
			},
		},
		options: [
			{
				name: 'Create an Agent Bot',
				value: 'Create an Agent Bot',
				action: 'Create an agent bot',
				routing: {
					request: {
						method: 'POST',
						url: '=/platform/api/v1/agent_bots',
					},
				},
			},
			{
				name: 'Delete an AgentBot',
				value: 'Delete an AgentBot',
				action: 'Delete an agent bot',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/platform/api/v1/agent_bots/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'Get an Agent Bot Details',
				value: 'Get an agent bot details',
				action: 'Get an agent bot details',
				description: 'Get the details of an agent bot',
				routing: {
					request: {
						method: 'GET',
						url: '=/platform/api/v1/agent_bots/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'List All AgentBots',
				value: 'List all AgentBots',
				action: 'List all agent bots',
				description: 'List all agent bots available',
				routing: {
					request: {
						method: 'GET',
						url: '=/platform/api/v1/agent_bots',
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
						url: '=/platform/api/v1/agent_bots/{{$parameter["id"]}}',
					},
				},
			},
		],
		default: 'List all AgentBots',
	},
	{
		displayName: 'GET /platform/api/v1/agent_bots',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['AgentBots'],
				operation: ['List all AgentBots'],
			},
		},
	},
	{
		displayName: 'POST /platform/api/v1/agent_bots',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['AgentBots'],
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
				resource: ['AgentBots'],
				operation: ['Create an Agent Bot'],
			},
		},
		options: [
			{
				displayName: 'Account ID',
				name: 'account_id',
				type: 'number',
				default: 1,
				description: 'The account ID to associate the agent bot with',
				routing: {
					send: {
						property: 'account_id',
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
		displayName: 'GET /platform/api/v1/agent_bots/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['AgentBots'],
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
			loadOptionsMethod: 'loadPlatformListAllAgentBots',
		},
		displayOptions: {
			show: {
				resource: ['AgentBots'],
				operation: ['Get an agent bot details'],
			},
		},
	},
	{
		displayName: 'PATCH /platform/api/v1/agent_bots/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['AgentBots'],
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
			loadOptionsMethod: 'loadPlatformListAllAgentBots',
		},
		displayOptions: {
			show: {
				resource: ['AgentBots'],
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
				resource: ['AgentBots'],
				operation: ['Update an agent bot'],
			},
		},
		options: [
			{
				displayName: 'Account ID',
				name: 'account_id',
				type: 'number',
				default: 1,
				description: 'The account ID to associate the agent bot with',
				routing: {
					send: {
						property: 'account_id',
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
		displayName: 'DELETE /platform/api/v1/agent_bots/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['AgentBots'],
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
			loadOptionsMethod: 'loadPlatformListAllAgentBots',
		},
		displayOptions: {
			show: {
				resource: ['AgentBots'],
				operation: ['Delete an AgentBot'],
			},
		},
	},
];
export default properties;

import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Teams'],
			},
		},
		options: [
			{
				name: 'Add a New Agent',
				value: 'Add a New Agent',
				action: 'Add a new agent',
				description: 'Add a new Agent to Team',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams/{{$parameter["team_id"]}}/team_members',
					},
				},
			},
			{
				name: 'Create a Team',
				value: 'Create a team',
				action: 'Create a team',
				description: 'Create a team in the account',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams',
					},
				},
			},
			{
				name: 'Delete a Team',
				value: 'Delete a team',
				action: 'Delete a team',
				description: 'Delete a team from the account',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams/{{$parameter["team_id"]}}',
					},
				},
			},
			{
				name: 'Get a Team Details',
				value: 'Get a team details',
				action: 'Get a team details',
				description: 'Get the details of a team in the account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams/{{$parameter["team_id"]}}',
					},
				},
			},
			{
				name: 'List Agents in Team',
				value: 'List Agents in Team',
				action: 'List agents in team',
				description: 'Get Details of Agents in an Team',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams/{{$parameter["team_id"]}}/team_members',
					},
				},
			},
			{
				name: 'List All Teams',
				value: 'List all teams',
				action: 'List all teams',
				description: 'List all teams available in the current account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams',
					},
				},
			},
			{
				name: 'Remove an Agent From Team',
				value: 'Remove an Agent from Team',
				action: 'Remove an agent from team',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams/{{$parameter["team_id"]}}/team_members',
					},
				},
			},
			{
				name: 'Update a Team',
				value: 'Update a team',
				action: 'Update a team',
				description: "Update a team's attributes",
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams/{{$parameter["team_id"]}}',
					},
				},
			},
			{
				name: 'Update Agents in Team',
				value: 'Update Agents in Team',
				action: 'Update agents in team',
				description: 'All agents except the one passed in params will be removed',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams/{{$parameter["team_id"]}}/team_members',
					},
				},
			},
		],
		default: 'List all teams',
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
				resource: ['Teams'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/teams',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['List all teams'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/teams',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['Create a team'],
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
				resource: ['Teams'],
				operation: ['Create a team'],
			},
		},
		options: [
			{
				displayName: 'Allow Auto Assign',
				name: 'allow_auto_assign',
				type: 'boolean',
				default: false,
				description:
					'Whether to automatically assign the conversation to an agent in the team while assigning the conversation to a team',
				routing: {
					send: {
						property: 'allow_auto_assign',
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
				description: 'The description of the team',
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
				description: 'The name of the team',
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
		displayName: 'GET /api/v1/accounts/{account_id}/teams/{team_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['Get a team details'],
			},
		},
	},
	{
		displayName: 'Team Name or ID',
		name: 'team_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Team ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllTeams',
		},
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['Get a team details'],
			},
		},
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/teams/{team_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['Update a team'],
			},
		},
	},
	{
		displayName: 'Team Name or ID',
		name: 'team_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Team ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllTeams',
		},
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['Update a team'],
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
				resource: ['Teams'],
				operation: ['Update a team'],
			},
		},
		options: [
			{
				displayName: 'Allow Auto Assign',
				name: 'allow_auto_assign',
				type: 'boolean',
				default: false,
				description:
					'Whether to automatically assign the conversation to an agent in the team while assigning the conversation to a team',
				routing: {
					send: {
						property: 'allow_auto_assign',
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
				description: 'The description of the team',
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
				description: 'The name of the team',
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
		displayName: 'DELETE /api/v1/accounts/{account_id}/teams/{team_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['Delete a team'],
			},
		},
	},
	{
		displayName: 'Team Name or ID',
		name: 'team_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Team ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllTeams',
		},
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['Delete a team'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/teams/{team_id}/team_members',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['List Agents in Team'],
			},
		},
	},
	{
		displayName: 'Team Name or ID',
		name: 'team_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Team ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllTeams',
		},
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['List Agents in Team'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/teams/{team_id}/team_members',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['Add a New Agent'],
			},
		},
	},
	{
		displayName: 'Team Name or ID',
		name: 'team_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Team ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllTeams',
		},
		displayOptions: {
			show: {
				resource: ['Teams'],
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
		description: 'IDs of users to be added to the team',
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
				resource: ['Teams'],
				operation: ['Add a New Agent'],
			},
		},
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/teams/{team_id}/team_members',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['Update Agents in Team'],
			},
		},
	},
	{
		displayName: 'Team Name or ID',
		name: 'team_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Team ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllTeams',
		},
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['Update Agents in Team'],
			},
		},
	},
	{
		displayName: 'User IDs',
		name: 'user_ids',
		required: true,
		type: 'json',
		default: '',
		description: 'IDs of users to be added to the team',
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
				resource: ['Teams'],
				operation: ['Update Agents in Team'],
			},
		},
	},
	{
		displayName: 'DELETE /api/v1/accounts/{account_id}/teams/{team_id}/team_members',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['Remove an Agent from Team'],
			},
		},
	},
	{
		displayName: 'Team Name or ID',
		name: 'team_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Team ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllTeams',
		},
		displayOptions: {
			show: {
				resource: ['Teams'],
				operation: ['Remove an Agent from Team'],
			},
		},
	},
	{
		displayName: 'User IDs',
		name: 'user_ids',
		required: true,
		type: 'json',
		default: '',
		description: 'IDs of users to be deleted from the team',
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
				resource: ['Teams'],
				operation: ['Remove an Agent from Team'],
			},
		},
	},
];
export default properties;

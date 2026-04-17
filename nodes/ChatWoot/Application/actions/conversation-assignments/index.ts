import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Conversation Assignments'],
			},
		},
		options: [
			{
				name: 'Assign Conversation',
				value: 'Assign Conversation',
				action: 'Assign conversation',
				description: 'Assign a conversation to an agent or a team',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/assignments',
					},
				},
			},
		],
		default: 'Assign Conversation',
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
				resource: ['Conversation Assignments'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/assignments',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversation Assignments'],
				operation: ['Assign Conversation'],
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
				resource: ['Conversation Assignments'],
				operation: ['Assign Conversation'],
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
				resource: ['Conversation Assignments'],
				operation: ['Assign Conversation'],
			},
		},
		options: [
			{
				displayName: 'Assignee ID',
				name: 'assignee_id',
				type: 'number',
				default: 0,
				description: 'ID of the assignee user',
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
				displayName: 'Team ID',
				name: 'team_id',
				type: 'number',
				default: 0,
				description: 'ID of the team. If the assignee_id is present, this param would be ignored.',
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
];
export default properties;

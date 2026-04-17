import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Conversation'],
			},
		},
		options: [
			{
				name: 'Get Messages From a Conversation',
				value: 'Get messages from a conversation',
				action: 'Get messages from a conversation',
				description: 'Returns all messages from a specific conversation',
				routing: {
					request: {
						method: 'GET',
						url: '=/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/messages',
					},
				},
			},
		],
		default: 'Get messages from a conversation',
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
				resource: ['Conversation'],
			},
		},
	},
	{
		displayName: 'GET /accounts/{account_id}/conversations/{conversation_id}/messages',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversation'],
				operation: ['Get messages from a conversation'],
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
				resource: ['Conversation'],
				operation: ['Get messages from a conversation'],
			},
		},
	},
];
export default properties;

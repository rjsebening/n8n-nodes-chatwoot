import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Account Users'],
			},
		},
		options: [
			{
				name: 'List All Account Users',
				value: 'List all Account Users',
				action: 'List all account users',
				routing: {
					request: {
						method: 'GET',
						url: '=/platform/api/v1/accounts/{{$parameter["account_id"]}}/account_users',
					},
				},
			},
			{
				name: 'Create an Account User',
				value: 'Create an Account User',
				action: 'Create an account user',
				routing: {
					request: {
						method: 'POST',
						url: '=/platform/api/v1/accounts/{{$parameter["account_id"]}}/account_users',
					},
				},
			},
			{
				name: 'Delete an Account User',
				value: 'Delete an Account User',
				action: 'Delete an account user',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/platform/api/v1/accounts/{{$parameter["account_id"]}}/account_users',
					},
				},
			},
		],
		default: 'List all Account Users',
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
				resource: ['Account Users'],
			},
		},
	},
	{
		displayName: 'GET /platform/api/v1/accounts/{account_id}/account_users',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Account Users'],
				operation: ['List all Account Users'],
			},
		},
	},
	{
		displayName: 'POST /platform/api/v1/accounts/{account_id}/account_users',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Account Users'],
				operation: ['Create an Account User'],
			},
		},
	},
	{
		displayName: 'User ID',
		name: 'user_id',
		required: true,
		type: 'number',
		default: 0,
		description: 'The ID of the user',
		routing: {
			send: {
				property: 'user_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Account Users'],
				operation: ['Create an Account User'],
			},
		},
	},
	{
		displayName: 'Role',
		name: 'role',
		required: true,
		type: 'string',
		default: '',
		description: 'Whether user is an administrator or agent',
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
				resource: ['Account Users'],
				operation: ['Create an Account User'],
			},
		},
	},
	{
		displayName: 'DELETE /platform/api/v1/accounts/{account_id}/account_users',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Account Users'],
				operation: ['Delete an Account User'],
			},
		},
	},
];
export default properties;

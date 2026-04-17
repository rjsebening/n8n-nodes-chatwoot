import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Canned Responses'],
			},
		},
		options: [
			{
				name: 'List All Canned Responses in an Account',
				value: 'List all Canned Responses in an Account',
				action: 'List all canned responses in an account',
				description: 'Get Details of Canned Responses in an Account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/canned_responses',
					},
				},
			},
			{
				name: 'Add a New Canned Response',
				value: 'Add a New Canned Response',
				action: 'Add a new canned response',
				description: 'Add a new Canned Response to Account',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/canned_responses',
					},
				},
			},
			{
				name: 'Update Canned Response in Account',
				value: 'Update Canned Response in Account',
				action: 'Update canned response in account',
				description: 'Update a Canned Response in Account',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/canned_responses/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'Remove a Canned Response From Account',
				value: 'Remove a Canned Response from Account',
				action: 'Remove a canned response from account',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/canned_responses/{{$parameter["id"]}}',
					},
				},
			},
		],
		default: 'List all Canned Responses in an Account',
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
				resource: ['Canned Responses'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/canned_responses',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Canned Responses'],
				operation: ['List all Canned Responses in an Account'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/canned_responses',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Canned Responses'],
				operation: ['Add a New Canned Response'],
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
				resource: ['Canned Responses'],
				operation: ['Add a New Canned Response'],
			},
		},
		options: [
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				default: '',
				description: 'Message content for canned response',
				routing: {
					send: {
						property: 'content',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Short Code',
				name: 'short_code',
				type: 'string',
				default: '',
				description: 'Short Code for quick access of the canned response',
				routing: {
					send: {
						property: 'short_code',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/canned_responses/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Canned Responses'],
				operation: ['Update Canned Response in Account'],
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
			loadOptionsMethod: 'loadApplicationGetAccountCannedResponse',
		},
		displayOptions: {
			show: {
				resource: ['Canned Responses'],
				operation: ['Update Canned Response in Account'],
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
				resource: ['Canned Responses'],
				operation: ['Update Canned Response in Account'],
			},
		},
		options: [
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				default: '',
				description: 'Message content for canned response',
				routing: {
					send: {
						property: 'content',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Short Code',
				name: 'short_code',
				type: 'string',
				default: '',
				description: 'Short Code for quick access of the canned response',
				routing: {
					send: {
						property: 'short_code',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'DELETE /api/v1/accounts/{account_id}/canned_responses/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Canned Responses'],
				operation: ['Remove a Canned Response from Account'],
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
			loadOptionsMethod: 'loadApplicationGetAccountCannedResponse',
		},
		displayOptions: {
			show: {
				resource: ['Canned Responses'],
				operation: ['Remove a Canned Response from Account'],
			},
		},
	},
];
export default properties;

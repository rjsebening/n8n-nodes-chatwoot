import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Contact Labels'],
			},
		},
		options: [
			{
				name: 'List Labels',
				value: 'List Labels',
				action: 'List labels',
				description: 'Lists all the labels of a contact',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}/labels',
					},
				},
			},
			{
				name: 'Add Labels',
				value: 'Add Labels',
				action: 'Add labels',
				description:
					'Add labels to a contact. Note that this API would overwrite the existing list of labels associated to the conversation.',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}/labels',
					},
				},
			},
		],
		default: 'List Labels',
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
				resource: ['Contact Labels'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/contacts/{ID}/labels',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contact Labels'],
				operation: ['List Labels'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		required: true,
		type: 'number',
		default: 0,
		description: 'ID path parameter',
		displayOptions: {
			show: {
				resource: ['Contact Labels'],
				operation: ['List Labels'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/contacts/{ID}/labels',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contact Labels'],
				operation: ['Add Labels'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		required: true,
		type: 'number',
		default: 0,
		description: 'ID path parameter',
		displayOptions: {
			show: {
				resource: ['Contact Labels'],
				operation: ['Add Labels'],
			},
		},
	},
	{
		displayName: 'Labels',
		name: 'labels',
		required: true,
		type: 'json',
		default: '',
		description: 'Array of labels (comma-separated strings)',
		routing: {
			send: {
				property: 'labels',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Contact Labels'],
				operation: ['Add Labels'],
			},
		},
	},
];
export default properties;

import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Labels'],
			},
		},
		options: [
			{
				name: 'Create a Label',
				value: 'Create a label',
				action: 'Create a label',
				description: 'Create a label in the account',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/labels',
					},
				},
			},
			{
				name: 'Delete a Label',
				value: 'Delete a label',
				action: 'Delete a label',
				description: 'Delete a label from the account',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/labels/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'Get a Label',
				value: 'Get a label',
				action: 'Get a label',
				description: 'Get the details of a label in the account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/labels/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'List All Labels',
				value: 'List all labels',
				action: 'List all labels',
				description: 'List all labels available in the current account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/labels',
					},
				},
			},
			{
				name: 'Update a Label',
				value: 'Update a label',
				action: 'Update a label',
				description: "Update a label's attributes",
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/labels/{{$parameter["id"]}}',
					},
				},
			},
		],
		default: 'List all labels',
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
				resource: ['Labels'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/labels',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Labels'],
				operation: ['List all labels'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/labels',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Labels'],
				operation: ['Create a label'],
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
				resource: ['Labels'],
				operation: ['Create a label'],
			},
		},
		options: [
			{
				displayName: 'Color',
				name: 'color',
				type: 'color',
				default: '',
				description: 'Hex color code for the label',
				routing: {
					send: {
						property: 'color',
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
				description: 'A short description for the label',
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
				displayName: 'Show On Sidebar',
				name: 'show_on_sidebar',
				type: 'boolean',
				default: false,
				description: 'Whether the label should appear in the sidebar',
				routing: {
					send: {
						property: 'show_on_sidebar',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'The label title',
				routing: {
					send: {
						property: 'title',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/labels/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Labels'],
				operation: ['Get a label'],
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
			loadOptionsMethod: 'loadApplicationListAllLabels',
		},
		displayOptions: {
			show: {
				resource: ['Labels'],
				operation: ['Get a label'],
			},
		},
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/labels/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Labels'],
				operation: ['Update a label'],
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
			loadOptionsMethod: 'loadApplicationListAllLabels',
		},
		displayOptions: {
			show: {
				resource: ['Labels'],
				operation: ['Update a label'],
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
				resource: ['Labels'],
				operation: ['Update a label'],
			},
		},
		options: [
			{
				displayName: 'Color',
				name: 'color',
				type: 'color',
				default: '',
				description: 'Hex color code for the label',
				routing: {
					send: {
						property: 'color',
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
				description: 'A short description for the label',
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
				displayName: 'Show On Sidebar',
				name: 'show_on_sidebar',
				type: 'boolean',
				default: false,
				description: 'Whether the label should appear in the sidebar',
				routing: {
					send: {
						property: 'show_on_sidebar',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'The label title',
				routing: {
					send: {
						property: 'title',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'DELETE /api/v1/accounts/{account_id}/labels/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Labels'],
				operation: ['Delete a label'],
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
			loadOptionsMethod: 'loadApplicationListAllLabels',
		},
		displayOptions: {
			show: {
				resource: ['Labels'],
				operation: ['Delete a label'],
			},
		},
	},
];
export default properties;

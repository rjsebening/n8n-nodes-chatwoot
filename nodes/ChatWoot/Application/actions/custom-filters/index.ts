import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Custom Filters'],
			},
		},
		options: [
			{
				name: 'Create a Custom Filter',
				value: 'Create a custom filter',
				action: 'Create a custom filter',
				description: 'Create a custom filter in the account',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_filters',
					},
				},
			},
			{
				name: 'Delete a Custom Filter',
				value: 'Delete a custom filter',
				action: 'Delete a custom filter',
				description: 'Delete a custom filter from the account',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_filters/{{$parameter["custom_filter_id"]}}',
					},
				},
			},
			{
				name: 'Get a Custom Filter Details',
				value: 'Get a custom filter details',
				action: 'Get a custom filter details',
				description: 'Get the details of a custom filter in the account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_filters/{{$parameter["custom_filter_id"]}}',
					},
				},
			},
			{
				name: 'List All Custom Filters',
				value: 'List all custom filters',
				action: 'List all custom filters',
				description: 'List all custom filters in a category of a user',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_filters',
					},
				},
			},
			{
				name: 'Update a Custom Filter',
				value: 'Update a custom filter',
				action: 'Update a custom filter',
				description: "Update a custom filter's attributes",
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_filters/{{$parameter["custom_filter_id"]}}',
					},
				},
			},
		],
		default: 'List all custom filters',
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
				resource: ['Custom Filters'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/custom_filters',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Custom Filters'],
				operation: ['List all custom filters'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/custom_filters',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Custom Filters'],
				operation: ['Create a custom filter'],
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
				resource: ['Custom Filters'],
				operation: ['Create a custom filter'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the custom filter',
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
				displayName: 'Query',
				name: 'query',
				type: 'json',
				default: '',
				description: 'A query that needs to be saved as a custom filter',
				routing: {
					send: {
						property: 'query',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'conversation',
				description: 'The description about the custom filter',
				options: [
					{
						name: 'Conversation',
						value: 'conversation',
					},
					{
						name: 'Contact',
						value: 'contact',
					},
					{
						name: 'Report',
						value: 'report',
					},
				],
				routing: {
					send: {
						property: 'type',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Custom Filters'],
				operation: ['Get a custom filter details'],
			},
		},
	},
	{
		displayName: 'Custom Filter Name or ID',
		name: 'custom_filter_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Custom Filter ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllFilters',
		},
		displayOptions: {
			show: {
				resource: ['Custom Filters'],
				operation: ['Get a custom filter details'],
			},
		},
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Custom Filters'],
				operation: ['Update a custom filter'],
			},
		},
	},
	{
		displayName: 'Custom Filter Name or ID',
		name: 'custom_filter_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Custom Filter ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllFilters',
		},
		displayOptions: {
			show: {
				resource: ['Custom Filters'],
				operation: ['Update a custom filter'],
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
				resource: ['Custom Filters'],
				operation: ['Update a custom filter'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the custom filter',
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
				displayName: 'Query',
				name: 'query',
				type: 'json',
				default: '',
				description: 'A query that needs to be saved as a custom filter',
				routing: {
					send: {
						property: 'query',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'conversation',
				description: 'The description about the custom filter',
				options: [
					{
						name: 'Conversation',
						value: 'conversation',
					},
					{
						name: 'Contact',
						value: 'contact',
					},
					{
						name: 'Report',
						value: 'report',
					},
				],
				routing: {
					send: {
						property: 'type',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'DELETE /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Custom Filters'],
				operation: ['Delete a custom filter'],
			},
		},
	},
	{
		displayName: 'Custom Filter Name or ID',
		name: 'custom_filter_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Custom Filter ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllFilters',
		},
		displayOptions: {
			show: {
				resource: ['Custom Filters'],
				operation: ['Delete a custom filter'],
			},
		},
	},
];
export default properties;

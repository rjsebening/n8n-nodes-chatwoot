import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Accounts'],
			},
		},
		options: [
			{
				name: 'Create an Account',
				value: 'Create an Account',
				action: 'Create an account',
				routing: {
					request: {
						method: 'POST',
						url: '=/platform/api/v1/accounts',
					},
				},
			},
			{
				name: 'Delete an Account',
				value: 'Delete an Account',
				action: 'Delete an account',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/platform/api/v1/accounts/{{$parameter["account_id"]}}',
					},
				},
			},
			{
				name: 'Get an Account Details',
				value: 'Get an account details',
				action: 'Get an account details',
				description: 'Get the details of an account',
				routing: {
					request: {
						method: 'GET',
						url: '=/platform/api/v1/accounts/{{$parameter["account_id"]}}',
					},
				},
			},
			{
				name: 'Update an Account',
				value: 'Update an account',
				action: 'Update an account',
				description: "Update an account's attributes",
				routing: {
					request: {
						method: 'PATCH',
						url: '=/platform/api/v1/accounts/{{$parameter["account_id"]}}',
					},
				},
			},
		],
		default: 'Create an Account',
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
				resource: ['Accounts'],
			},
		},
	},
	{
		displayName: 'POST /platform/api/v1/accounts',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Accounts'],
				operation: ['Create an Account'],
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
				resource: ['Accounts'],
				operation: ['Create an Account'],
			},
		},
		options: [
			{
				displayName: 'Custom Attributes',
				name: 'custom_attributes',
				type: 'resourceMapper',
				default: {},
				description: 'The custom attributes of the account',
				typeOptions: {
					resourceMapper: {
						resourceMapperMethod: 'getCustomAttributeFields',
						mode: 'add',
						fieldWords: {
							singular: 'Custom Attribute',
							plural: 'Custom Attributes',
						},
						addAllFields: true,
					},
				},
				routing: {
					send: {
						property: 'custom_attributes',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				description: 'The domain of the account',
				routing: {
					send: {
						property: 'domain',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Limits',
				name: 'limits',
				type: 'json',
				default: '',
				description: 'The limits of the account',
				routing: {
					send: {
						property: 'limits',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Locale',
				name: 'locale',
				type: 'string',
				default: '',
				description: 'The locale of the account',
				routing: {
					send: {
						property: 'locale',
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
				description: 'Name of the account',
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
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: 'active',
				description: 'The status of the account',
				options: [
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'Suspended',
						value: 'suspended',
					},
				],
				routing: {
					send: {
						property: 'status',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Support Email',
				name: 'support_email',
				type: 'string',
				default: '',
				description: 'The support email of the account',
				routing: {
					send: {
						property: 'support_email',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'GET /platform/api/v1/accounts/{account_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Accounts'],
				operation: ['Get an account details'],
			},
		},
	},
	{
		displayName: 'PATCH /platform/api/v1/accounts/{account_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Accounts'],
				operation: ['Update an account'],
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
				resource: ['Accounts'],
				operation: ['Update an account'],
			},
		},
		options: [
			{
				displayName: 'Custom Attributes',
				name: 'custom_attributes',
				type: 'resourceMapper',
				default: {},
				description: 'The custom attributes of the account',
				typeOptions: {
					resourceMapper: {
						resourceMapperMethod: 'getCustomAttributeFields',
						mode: 'add',
						fieldWords: {
							singular: 'Custom Attribute',
							plural: 'Custom Attributes',
						},
						addAllFields: true,
					},
				},
				routing: {
					send: {
						property: 'custom_attributes',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				description: 'The domain of the account',
				routing: {
					send: {
						property: 'domain',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Limits',
				name: 'limits',
				type: 'json',
				default: '',
				description: 'The limits of the account',
				routing: {
					send: {
						property: 'limits',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Locale',
				name: 'locale',
				type: 'string',
				default: '',
				description: 'The locale of the account',
				routing: {
					send: {
						property: 'locale',
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
				description: 'Name of the account',
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
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: 'active',
				description: 'The status of the account',
				options: [
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'Suspended',
						value: 'suspended',
					},
				],
				routing: {
					send: {
						property: 'status',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Support Email',
				name: 'support_email',
				type: 'string',
				default: '',
				description: 'The support email of the account',
				routing: {
					send: {
						property: 'support_email',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'DELETE /platform/api/v1/accounts/{account_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Accounts'],
				operation: ['Delete an Account'],
			},
		},
	},
];
export default properties;

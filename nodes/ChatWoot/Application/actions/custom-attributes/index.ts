import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Custom Attributes'],
			},
		},
		options: [
			{
				name: 'Add a New Custom Attribute',
				value: 'Add a new custom attribute',
				action: 'Add a new custom attribute',
				description: 'Add a new custom attribute to account',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_attribute_definitions',
					},
				},
			},
			{
				name: 'Get a Custom Attribute Details',
				value: 'Get a custom attribute details',
				action: 'Get a custom attribute details',
				description: 'Get the details of a custom attribute in the account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_attribute_definitions/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'List All Custom Attributes in an Account',
				value: 'List all custom attributes in an account',
				action: 'List all custom attributes in an account',
				description: 'Get details of custom attributes in an Account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_attribute_definitions',
					},
				},
			},
			{
				name: 'Remove a Custom Attribute From Account',
				value: 'Remove a custom attribute from account',
				action: 'Remove a custom attribute from account',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_attribute_definitions/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'Update Custom Attribute in Account',
				value: 'Update custom attribute in Account',
				action: 'Update custom attribute in account',
				description: 'Update a custom attribute in account',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_attribute_definitions/{{$parameter["id"]}}',
					},
				},
			},
		],
		default: 'List all custom attributes in an account',
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
				resource: ['Custom Attributes'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/custom_attribute_definitions',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Custom Attributes'],
				operation: ['List all custom attributes in an account'],
			},
		},
	},
	{
		displayName: 'Attribute Model',
		name: 'attribute_model',
		required: true,
		type: 'options',
		default: '0',
		description: 'Conversation_attribute(0)/contact_attribute(1)',
		options: [
			{
				name: '0',
				value: '0',
			},
			{
				name: '1',
				value: '1',
			},
		],
		routing: {
			send: {
				type: 'query',
				property: 'attribute_model',
				value: '={{ $value }}',
				propertyInDotNotation: false,
			},
		},
		displayOptions: {
			show: {
				resource: ['Custom Attributes'],
				operation: ['List all custom attributes in an account'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/custom_attribute_definitions',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Custom Attributes'],
				operation: ['Add a new custom attribute'],
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
				resource: ['Custom Attributes'],
				operation: ['Add a new custom attribute'],
			},
		},
		options: [
			{
				displayName: 'Attribute Description',
				name: 'attribute_description',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'attribute_description',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Attribute Display Name',
				name: 'attribute_display_name',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'attribute_display_name',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Attribute Display Type',
				name: 'attribute_display_type',
				type: 'number',
				default: 0,
				description:
					'Attribute display type (text- 0, number- 1, currency- 2, percent- 3, link- 4, date- 5, list- 6, checkbox- 7)',
				routing: {
					send: {
						property: 'attribute_display_type',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Attribute Key',
				name: 'attribute_key',
				type: 'string',
				default: '',
				description: 'Attribute unique key value',
				routing: {
					send: {
						property: 'attribute_key',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Attribute Model',
				name: 'attribute_model',
				type: 'number',
				default: 0,
				description: 'Attribute type(conversation_attribute- 0, contact_attribute- 1)',
				routing: {
					send: {
						property: 'attribute_model',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Attribute Values',
				name: 'attribute_values',
				type: 'json',
				default: '',
				routing: {
					send: {
						property: 'attribute_values',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Regex Cue',
				name: 'regex_cue',
				type: 'string',
				default: '',
				description:
					'Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.',
				routing: {
					send: {
						property: 'regex_cue',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Regex Pattern',
				name: 'regex_pattern',
				type: 'string',
				default: '',
				description:
					'Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).',
				routing: {
					send: {
						property: 'regex_pattern',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/custom_attribute_definitions/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Custom Attributes'],
				operation: ['Get a custom attribute details'],
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
			loadOptionsMethod: 'loadApplicationGetAccountCustomAttribute',
		},
		displayOptions: {
			show: {
				resource: ['Custom Attributes'],
				operation: ['Get a custom attribute details'],
			},
		},
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/custom_attribute_definitions/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Custom Attributes'],
				operation: ['Update custom attribute in Account'],
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
			loadOptionsMethod: 'loadApplicationGetAccountCustomAttribute',
		},
		displayOptions: {
			show: {
				resource: ['Custom Attributes'],
				operation: ['Update custom attribute in Account'],
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
				resource: ['Custom Attributes'],
				operation: ['Update custom attribute in Account'],
			},
		},
		options: [
			{
				displayName: 'Attribute Description',
				name: 'attribute_description',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'attribute_description',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Attribute Display Name',
				name: 'attribute_display_name',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'attribute_display_name',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Attribute Display Type',
				name: 'attribute_display_type',
				type: 'number',
				default: 0,
				description:
					'Attribute display type (text- 0, number- 1, currency- 2, percent- 3, link- 4, date- 5, list- 6, checkbox- 7)',
				routing: {
					send: {
						property: 'attribute_display_type',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Attribute Key',
				name: 'attribute_key',
				type: 'string',
				default: '',
				description: 'Attribute unique key value',
				routing: {
					send: {
						property: 'attribute_key',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Attribute Model',
				name: 'attribute_model',
				type: 'number',
				default: 0,
				description: 'Attribute type(conversation_attribute- 0, contact_attribute- 1)',
				routing: {
					send: {
						property: 'attribute_model',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Attribute Values',
				name: 'attribute_values',
				type: 'json',
				default: '',
				routing: {
					send: {
						property: 'attribute_values',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Regex Cue',
				name: 'regex_cue',
				type: 'string',
				default: '',
				description:
					'Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.',
				routing: {
					send: {
						property: 'regex_cue',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Regex Pattern',
				name: 'regex_pattern',
				type: 'string',
				default: '',
				description:
					'Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).',
				routing: {
					send: {
						property: 'regex_pattern',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'DELETE /api/v1/accounts/{account_id}/custom_attribute_definitions/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Custom Attributes'],
				operation: ['Remove a custom attribute from account'],
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
			loadOptionsMethod: 'loadApplicationGetAccountCustomAttribute',
		},
		displayOptions: {
			show: {
				resource: ['Custom Attributes'],
				operation: ['Remove a custom attribute from account'],
			},
		},
	},
];
export default properties;

import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Account'],
			},
		},
		options: [
			{
				name: 'Get Account Details',
				value: 'Get account details',
				action: 'Get account details',
				description: 'Get the details of the current account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}',
					},
				},
			},
			{
				name: 'Update Account',
				value: 'Update account',
				action: 'Update account',
				description: 'Update account details, settings, and custom attributes',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}',
					},
				},
			},
		],
		default: 'Get account details',
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
				resource: ['Account'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Account'],
				operation: ['Get account details'],
			},
		},
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Account'],
				operation: ['Update account'],
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
				resource: ['Account'],
				operation: ['Update account'],
			},
		},
		options: [
			{
				displayName: 'Auto Resolve After',
				name: 'auto_resolve_after',
				type: 'string',
				default: '',
				description: 'Auto resolve conversations after specified minutes',
				routing: {
					send: {
						property: 'auto_resolve_after',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Auto Resolve Ignore Waiting',
				name: 'auto_resolve_ignore_waiting',
				type: 'string',
				default: '',
				description: 'Whether to ignore waiting conversations for auto resolve',
				routing: {
					send: {
						property: 'auto_resolve_ignore_waiting',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Auto Resolve Message',
				name: 'auto_resolve_message',
				type: 'string',
				default: '',
				description: 'Message to send when auto resolving',
				routing: {
					send: {
						property: 'auto_resolve_message',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Company Size',
				name: 'company_size',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'company_size',
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
				displayName: 'Industry',
				name: 'industry',
				type: 'string',
				default: '',
				description: 'Industry type',
				routing: {
					send: {
						property: 'industry',
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
			{
				displayName: 'Timezone',
				name: 'timezone',
				type: 'string',
				default: '',
				description: 'Account timezone',
				routing: {
					send: {
						property: 'timezone',
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

import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Users'],
			},
		},
		options: [
			{
				name: 'Create a User',
				value: 'Create a User',
				action: 'Create a user',
				routing: {
					request: {
						method: 'POST',
						url: '=/platform/api/v1/users',
					},
				},
			},
			{
				name: 'Delete a User',
				value: 'Delete a User',
				action: 'Delete a user',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/platform/api/v1/users/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'Get an User Details',
				value: 'Get an user details',
				action: 'Get an user details',
				description: 'Get the details of an user',
				routing: {
					request: {
						method: 'GET',
						url: '=/platform/api/v1/users/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'Get User SSO Link',
				value: 'Get User SSO Link',
				action: 'Get user sso link',
				description: 'Get the sso link of a user',
				routing: {
					request: {
						method: 'GET',
						url: '=/platform/api/v1/users/{{$parameter["id"]}}/login',
					},
				},
			},
			{
				name: 'Update a User',
				value: 'Update a user',
				action: 'Update a user',
				description: "Update a user's attributes",
				routing: {
					request: {
						method: 'PATCH',
						url: '=/platform/api/v1/users/{{$parameter["id"]}}',
					},
				},
			},
		],
		default: 'Create a User',
	},
	{
		displayName: 'POST /platform/api/v1/users',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Users'],
				operation: ['Create a User'],
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
				resource: ['Users'],
				operation: ['Create a User'],
			},
		},
		options: [
			{
				displayName: 'Custom Attributes',
				name: 'custom_attributes',
				type: 'json',
				default: '',
				description: 'Custom attributes you want to associate with the user',
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
				displayName: 'Display Name',
				name: 'display_name',
				type: 'string',
				default: '',
				description: 'Display name of the user',
				routing: {
					send: {
						property: 'display_name',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'Email of the user',
				routing: {
					send: {
						property: 'email',
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
				description: 'Name of the user',
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
				displayName: 'Password',
				name: 'password',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description:
					'Password must contain uppercase, lowercase letters, number and a special character',
				routing: {
					send: {
						property: 'password',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'GET /platform/api/v1/users/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Users'],
				operation: ['Get an user details'],
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
				resource: ['Users'],
				operation: ['Get an user details'],
			},
		},
	},
	{
		displayName: 'PATCH /platform/api/v1/users/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Users'],
				operation: ['Update a user'],
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
				resource: ['Users'],
				operation: ['Update a user'],
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
				resource: ['Users'],
				operation: ['Update a user'],
			},
		},
		options: [
			{
				displayName: 'Custom Attributes',
				name: 'custom_attributes',
				type: 'json',
				default: '',
				description: 'Custom attributes you want to associate with the user',
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
				displayName: 'Display Name',
				name: 'display_name',
				type: 'string',
				default: '',
				description: 'Display name of the user',
				routing: {
					send: {
						property: 'display_name',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'Email of the user',
				routing: {
					send: {
						property: 'email',
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
				description: 'Name of the user',
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
				displayName: 'Password',
				name: 'password',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description:
					'Password must contain uppercase, lowercase letters, number and a special character',
				routing: {
					send: {
						property: 'password',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'DELETE /platform/api/v1/users/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Users'],
				operation: ['Delete a User'],
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
				resource: ['Users'],
				operation: ['Delete a User'],
			},
		},
	},
	{
		displayName: 'GET /platform/api/v1/users/{ID}/login',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Users'],
				operation: ['Get User SSO Link'],
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
				resource: ['Users'],
				operation: ['Get User SSO Link'],
			},
		},
	},
];
export default properties;

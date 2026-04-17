import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Profile'],
			},
		},
		options: [
			{
				name: 'Fetch User Profile',
				value: 'Fetch user profile',
				action: 'Fetch user profile',
				description: 'Get the user profile details',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/profile',
					},
				},
			},
			{
				name: 'Update User Profile',
				value: 'Update user profile',
				action: 'Update user profile',
				description: 'Update the user profile details',
				routing: {
					request: {
						method: 'PUT',
						url: '=/api/v1/profile',
					},
				},
			},
		],
		default: 'Fetch user profile',
	},
	{
		displayName: 'GET /api/v1/profile',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Profile'],
				operation: ['Fetch user profile'],
			},
		},
	},
	{
		displayName: 'PUT /api/v1/profile',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Profile'],
				operation: ['Update user profile'],
			},
		},
	},
	{
		displayName: 'Profile',
		name: 'profile',
		required: true,
		type: 'json',
		default: '',
		description: 'Profile body field',
		routing: {
			send: {
				property: 'profile',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Profile'],
				operation: ['Update user profile'],
			},
		},
	},
];
export default properties;

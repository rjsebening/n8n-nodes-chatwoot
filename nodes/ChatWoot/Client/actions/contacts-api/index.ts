import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Contacts API'],
			},
		},
		options: [
			{
				name: 'Create a Contact',
				value: 'Create a contact',
				action: 'Create a contact',
				routing: {
					request: {
						method: 'POST',
						url: '=/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts',
					},
				},
			},
			{
				name: 'Get a Contact',
				value: 'Get a contact',
				action: 'Get a contact',
				description: 'Get the details of a contact',
				routing: {
					request: {
						method: 'GET',
						url: '=/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{{$parameter["contact_identifier"]}}',
					},
				},
			},
			{
				name: 'Update a Contact',
				value: 'Update a contact',
				action: 'Update a contact',
				description: "Update a contact's attributes",
				routing: {
					request: {
						method: 'PATCH',
						url: '=/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{{$parameter["contact_identifier"]}}',
					},
				},
			},
		],
		default: 'Create a contact',
	},
	{
		displayName: 'POST /public/api/v1/inboxes/{inbox_identifier}/contacts',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contacts API'],
				operation: ['Create a contact'],
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
				resource: ['Contacts API'],
				operation: ['Create a contact'],
			},
		},
		options: [
			{
				displayName: 'Avatar',
				name: 'avatar',
				type: 'string',
				default: '',
				description: 'Send the form data with the avatar image binary or use the avatar_url',
				routing: {
					send: {
						property: 'avatar',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Custom Attributes',
				name: 'custom_attributes',
				type: 'resourceMapper',
				default: {},
				description: 'Custom attributes of the customer',
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
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'Email of the contact',
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
				displayName: 'Identifier',
				name: 'identifier',
				type: 'string',
				default: '',
				description: 'External identifier of the contact',
				routing: {
					send: {
						property: 'identifier',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Identifier Hash',
				name: 'identifier_hash',
				type: 'string',
				default: '',
				description: 'Identifier hash prepared for HMAC authentication',
				routing: {
					send: {
						property: 'identifier_hash',
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
				description: 'Name of the contact',
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
				displayName: 'Phone Number',
				name: 'phone_number',
				type: 'string',
				default: '',
				description: 'Phone number of the contact',
				routing: {
					send: {
						property: 'phone_number',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contacts API'],
				operation: ['Get a contact'],
			},
		},
	},
	{
		displayName: 'Contact Identifier Name or ID',
		name: 'contact_identifier',
		required: true,
		type: 'options',
		default: '',
		description:
			'Contact Identifier path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadClientGetDetailsOfAInbox',
		},
		displayOptions: {
			show: {
				resource: ['Contacts API'],
				operation: ['Get a contact'],
			},
		},
	},
	{
		displayName: 'PATCH /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contacts API'],
				operation: ['Update a contact'],
			},
		},
	},
	{
		displayName: 'Contact Identifier Name or ID',
		name: 'contact_identifier',
		required: true,
		type: 'options',
		default: '',
		description:
			'Contact Identifier path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadClientGetDetailsOfAInbox',
		},
		displayOptions: {
			show: {
				resource: ['Contacts API'],
				operation: ['Update a contact'],
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
				resource: ['Contacts API'],
				operation: ['Update a contact'],
			},
		},
		options: [
			{
				displayName: 'Avatar',
				name: 'avatar',
				type: 'string',
				default: '',
				description: 'Send the form data with the avatar image binary or use the avatar_url',
				routing: {
					send: {
						property: 'avatar',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Custom Attributes',
				name: 'custom_attributes',
				type: 'resourceMapper',
				default: {},
				description: 'Custom attributes of the customer',
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
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'Email of the contact',
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
				displayName: 'Identifier',
				name: 'identifier',
				type: 'string',
				default: '',
				description: 'External identifier of the contact',
				routing: {
					send: {
						property: 'identifier',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Identifier Hash',
				name: 'identifier_hash',
				type: 'string',
				default: '',
				description: 'Identifier hash prepared for HMAC authentication',
				routing: {
					send: {
						property: 'identifier_hash',
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
				description: 'Name of the contact',
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
				displayName: 'Phone Number',
				name: 'phone_number',
				type: 'string',
				default: '',
				description: 'Phone number of the contact',
				routing: {
					send: {
						property: 'phone_number',
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

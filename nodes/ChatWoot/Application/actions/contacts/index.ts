import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Contacts'],
			},
		},
		options: [
			{
				name: 'Contact Conversations',
				value: 'Contact Conversations',
				action: 'Contact conversations',
				description: 'Get conversations associated with that contact',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}/conversations',
					},
				},
			},
			{
				name: 'Contact Filter',
				value: 'Contact Filter',
				action: 'Contact filter',
				description: 'Filter contacts with custom filter options and pagination',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/filter',
					},
				},
			},
			{
				name: 'Create Contact',
				value: 'Create Contact',
				action: 'Create contact',
				description: 'Create a new Contact',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts',
					},
				},
			},
			{
				name: 'Create Contact Inbox',
				value: 'Create contact inbox',
				action: 'Create contact inbox',
				description: 'Create a contact inbox record for an inbox',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}/contact_inboxes',
					},
				},
			},
			{
				name: 'Delete Contact',
				value: 'Delete Contact',
				action: 'Delete contact',
				description: 'Delete a contact belonging to the account using ID',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'Get Contactable Inboxes',
				value: 'Get Contactable Inboxes',
				action: 'Get contactable inboxes',
				description: 'Get List of contactable Inboxes',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}/contactable_inboxes',
					},
				},
			},
			{
				name: 'List Contacts',
				value: 'List Contacts',
				action: 'List contacts',
				description:
					'Listing all the resolved contacts with pagination (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number.',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts',
					},
				},
			},
			{
				name: 'Merge Contacts',
				value: 'Merge Contacts',
				action: 'Merge contacts',
				description:
					'Merge two contacts into a single contact. The base contact remains and receives all data from the mergee contact. After the merge, the mergee contact is permanently deleted. This action is irreversible. All conversations, labels, and custom attributes from the mergee contact will be moved to the base contact.',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/actions/contact_merge',
					},
				},
			},
			{
				name: 'Search Contacts',
				value: 'Search Contacts',
				action: 'Search contacts',
				description:
					'Search the resolved contacts using a search key, currently supports email search (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number.',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/search',
					},
				},
			},
			{
				name: 'Show Contact',
				value: 'Show Contact',
				action: 'Show contact',
				description: 'Get a contact belonging to the account using ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}',
					},
				},
			},
			{
				name: 'Update Contact',
				value: 'Update Contact',
				action: 'Update contact',
				description: 'Update a contact belonging to the account using ID',
				routing: {
					request: {
						method: 'PUT',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}',
					},
				},
			},
		],
		default: 'List Contacts',
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
				resource: ['Contacts'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/contacts',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['List Contacts'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/contacts',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Create Contact'],
			},
		},
	},
	{
		displayName: 'Inbox ID',
		name: 'inbox_id',
		required: true,
		type: 'number',
		default: 0,
		description: 'ID of the inbox to which the contact belongs',
		routing: {
			send: {
				property: 'inbox_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Create Contact'],
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
				resource: ['Contacts'],
				operation: ['Create Contact'],
			},
		},
		options: [
			{
				displayName: 'Additional Attributes',
				name: 'additional_attributes',
				type: 'json',
				default: '',
				description:
					'An object where you can store additional attributes for contact. example {"type":"customer", "age":30}.',
				routing: {
					send: {
						property: 'additional_attributes',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
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
				displayName: 'Avatar Url',
				name: 'avatar_url',
				type: 'string',
				default: '',
				description: 'The URL to a jpeg, png file for the contact avatar',
				routing: {
					send: {
						property: 'avatar_url',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Blocked',
				name: 'blocked',
				type: 'boolean',
				default: false,
				description: 'Whether the contact is blocked or not',
				routing: {
					send: {
						property: 'blocked',
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
				description:
					'An object where you can store custom attributes for contact. example {"type":"customer", "age":30}, this should have a valid custom attribute definition.',
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
				description: 'A unique identifier for the contact in external system',
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
		displayName: 'GET /api/v1/accounts/{account_id}/contacts/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Show Contact'],
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
			loadOptionsMethod: 'loadApplicationContactList',
		},
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Show Contact'],
			},
		},
	},
	{
		displayName: 'PUT /api/v1/accounts/{account_id}/contacts/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Update Contact'],
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
			loadOptionsMethod: 'loadApplicationContactList',
		},
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Update Contact'],
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
				resource: ['Contacts'],
				operation: ['Update Contact'],
			},
		},
		options: [
			{
				displayName: 'Additional Attributes',
				name: 'additional_attributes',
				type: 'json',
				default: '',
				description:
					'An object where you can store additional attributes for contact. example {"type":"customer", "age":30}.',
				routing: {
					send: {
						property: 'additional_attributes',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
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
				displayName: 'Avatar Url',
				name: 'avatar_url',
				type: 'string',
				default: '',
				description: 'The URL to a jpeg, png file for the contact avatar',
				routing: {
					send: {
						property: 'avatar_url',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Blocked',
				name: 'blocked',
				type: 'boolean',
				default: false,
				description: 'Whether the contact is blocked or not',
				routing: {
					send: {
						property: 'blocked',
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
				description:
					'An object where you can store custom attributes for contact. example {"type":"customer", "age":30}, this should have a valid custom attribute definition.',
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
				description: 'A unique identifier for the contact in external system',
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
		displayName: 'DELETE /api/v1/accounts/{account_id}/contacts/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Delete Contact'],
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
			loadOptionsMethod: 'loadApplicationContactList',
		},
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Delete Contact'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/contacts/{ID}/conversations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Contact Conversations'],
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
			loadOptionsMethod: 'loadApplicationContactList',
		},
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Contact Conversations'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/contacts/search',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Search Contacts'],
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
				resource: ['Contacts'],
				operation: ['Search Contacts'],
			},
		},
		options: [
			{
				displayName: 'Q',
				name: 'q',
				type: 'string',
				default: '',
				description: 'Search using contact `name`, `identifier`, `email` or `phone number`',
				routing: {
					send: {
						type: 'query',
						property: 'q',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
		],
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/contacts/filter',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Contact Filter'],
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
				resource: ['Contacts'],
				operation: ['Contact Filter'],
			},
		},
		options: [
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 0,
				description: 'Page query parameter',
				routing: {
					send: {
						type: 'query',
						property: 'page',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'Payload',
				name: 'payload',
				type: 'json',
				default: '',
				description: 'Payload body field',
				routing: {
					send: {
						property: 'payload',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/contacts/{ID}/contact_inboxes',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Create contact inbox'],
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
			loadOptionsMethod: 'loadApplicationContactList',
		},
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Create contact inbox'],
			},
		},
	},
	{
		displayName: 'Inbox ID',
		name: 'inbox_id',
		required: true,
		type: 'number',
		default: 0,
		description: 'The ID of the inbox',
		routing: {
			send: {
				property: 'inbox_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Create contact inbox'],
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
				resource: ['Contacts'],
				operation: ['Create contact inbox'],
			},
		},
		options: [
			{
				displayName: 'Source ID',
				name: 'source_id',
				type: 'string',
				default: '',
				description: 'Contact Inbox Source ID',
				routing: {
					send: {
						property: 'source_id',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/contacts/{ID}/contactable_inboxes',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Get Contactable Inboxes'],
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
			loadOptionsMethod: 'loadApplicationContactList',
		},
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Get Contactable Inboxes'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/actions/contact_merge',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Merge Contacts'],
			},
		},
	},
	{
		displayName: 'Base Contact ID',
		name: 'base_contact_id',
		required: true,
		type: 'number',
		default: 0,
		description: 'ID of the contact that will remain after the merge and receive all data',
		routing: {
			send: {
				property: 'base_contact_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Merge Contacts'],
			},
		},
	},
	{
		displayName: 'Mergee Contact ID',
		name: 'mergee_contact_id',
		required: true,
		type: 'number',
		default: 0,
		description: 'ID of the contact that will be merged into the base contact and deleted',
		routing: {
			send: {
				property: 'mergee_contact_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Contacts'],
				operation: ['Merge Contacts'],
			},
		},
	},
];
export default properties;

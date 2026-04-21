import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Conversations API'],
			},
		},
		options: [
			{
				name: 'Create a Conversation',
				value: 'Create a conversation',
				action: 'Create a conversation',
				routing: {
					request: {
						method: 'POST',
						url: '=/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{{$parameter["contact_identifier"]}}/conversations',
					},
				},
			},
			{
				name: 'Get a Single Conversation',
				value: 'Get a single conversation',
				action: 'Get a single conversation',
				description: 'Retrieves the details of a specific conversation',
				routing: {
					request: {
						method: 'GET',
						url: '=/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{{$parameter["contact_identifier"]}}/conversations/{{$parameter["conversation_id"]}}',
					},
				},
			},
			{
				name: 'List All Conversations',
				value: 'List all conversations',
				action: 'List all conversations',
				description: 'List all conversations for the contact',
				routing: {
					request: {
						method: 'GET',
						url: '=/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{{$parameter["contact_identifier"]}}/conversations',
					},
				},
			},
			{
				name: 'Resolve a Conversation',
				value: 'Resolve a conversation',
				action: 'Resolve a conversation',
				description: 'Marks a conversation as resolved',
				routing: {
					request: {
						method: 'POST',
						url: '=/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{{$parameter["contact_identifier"]}}/conversations/{{$parameter["conversation_id"]}}/toggle_status',
					},
				},
			},
			{
				name: 'Toggle Typing Status',
				value: 'Toggle typing status',
				action: 'Toggle typing status',
				description: 'Toggles the typing status in a conversation',
				routing: {
					request: {
						method: 'POST',
						url: '=/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{{$parameter["contact_identifier"]}}/conversations/{{$parameter["conversation_id"]}}/toggle_typing',
					},
				},
			},
			{
				name: 'Update Last Seen',
				value: 'Update last seen',
				action: 'Update last seen',
				description: 'Updates the last seen time of the contact in a conversation',
				routing: {
					request: {
						method: 'POST',
						url: '=/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{{$parameter["contact_identifier"]}}/conversations/{{$parameter["conversation_id"]}}/update_last_seen',
					},
				},
			},
		],
		default: 'Create a conversation',
	},
	{
		displayName:
			'POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations API'],
				operation: ['Create a conversation'],
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
				resource: ['Conversations API'],
				operation: ['Create a conversation'],
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
				resource: ['Conversations API'],
				operation: ['Create a conversation'],
			},
		},
		options: [
			{
				displayName: 'Custom Attributes',
				name: 'custom_attributes',
				type: 'resourceMapper',
				default: {},
				description: 'Custom attributes of the conversation',
				typeOptions: {
					resourceMapper: {
						resourceMapperMethod: 'getCustomAttributeFieldsConversation',
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
		],
	},
	{
		displayName:
			'GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations API'],
				operation: ['List all conversations'],
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
				resource: ['Conversations API'],
				operation: ['List all conversations'],
			},
		},
	},
	{
		displayName:
			'GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations API'],
				operation: ['Get a single conversation'],
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
				resource: ['Conversations API'],
				operation: ['Get a single conversation'],
			},
		},
	},
	{
		displayName: 'Conversation Name or ID',
		name: 'conversation_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Conversation ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadClientListAllContactConversations',
		},
		displayOptions: {
			show: {
				resource: ['Conversations API'],
				operation: ['Get a single conversation'],
			},
		},
	},
	{
		displayName:
			'POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/toggle_status',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations API'],
				operation: ['Resolve a conversation'],
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
				resource: ['Conversations API'],
				operation: ['Resolve a conversation'],
			},
		},
	},
	{
		displayName: 'Conversation Name or ID',
		name: 'conversation_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Conversation ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadClientListAllContactConversations',
		},
		displayOptions: {
			show: {
				resource: ['Conversations API'],
				operation: ['Resolve a conversation'],
			},
		},
	},
	{
		displayName:
			'POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/toggle_typing',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations API'],
				operation: ['Toggle typing status'],
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
				resource: ['Conversations API'],
				operation: ['Toggle typing status'],
			},
		},
	},
	{
		displayName: 'Conversation Name or ID',
		name: 'conversation_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Conversation ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadClientListAllContactConversations',
		},
		displayOptions: {
			show: {
				resource: ['Conversations API'],
				operation: ['Toggle typing status'],
			},
		},
	},
	{
		displayName: 'Typing Status',
		name: 'typing_status',
		required: true,
		type: 'string',
		default: '',
		description: "Typing status, either 'on' or 'off'",
		routing: {
			send: {
				type: 'query',
				property: 'typing_status',
				value: '={{ $value }}',
				propertyInDotNotation: false,
			},
		},
		displayOptions: {
			show: {
				resource: ['Conversations API'],
				operation: ['Toggle typing status'],
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
				resource: ['Conversations API'],
				operation: ['Toggle typing status'],
			},
		},
		options: [
			{
				displayName: 'Typing Status',
				name: 'typing_status',
				type: 'options',
				default: 'on',
				description: 'The typing status to set',
				options: [
					{
						name: 'On',
						value: 'on',
					},
					{
						name: 'Off',
						value: 'off',
					},
				],
				routing: {
					send: {
						property: 'typing_status',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName:
			'POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/update_last_seen',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Conversations API'],
				operation: ['Update last seen'],
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
				resource: ['Conversations API'],
				operation: ['Update last seen'],
			},
		},
	},
	{
		displayName: 'Conversation Name or ID',
		name: 'conversation_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Conversation ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadClientListAllContactConversations',
		},
		displayOptions: {
			show: {
				resource: ['Conversations API'],
				operation: ['Update last seen'],
			},
		},
	},
];
export default properties;

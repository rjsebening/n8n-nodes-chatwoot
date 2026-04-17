import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Messages API'],
			},
		},
		options: [
			{
				name: 'Create a Message',
				value: 'Create a message',
				action: 'Create a message',
				routing: {
					request: {
						method: 'POST',
						url: '=/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{{$parameter["contact_identifier"]}}/conversations/{{$parameter["conversation_id"]}}/messages',
					},
				},
			},
			{
				name: 'List All Messages',
				value: 'List all messages',
				action: 'List all messages',
				description: 'List all messages in the conversation',
				routing: {
					request: {
						method: 'GET',
						url: '=/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{{$parameter["contact_identifier"]}}/conversations/{{$parameter["conversation_id"]}}/messages',
					},
				},
			},
			{
				name: 'Update a Message',
				value: 'Update a message',
				action: 'Update a message',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}/contacts/{{$parameter["contact_identifier"]}}/conversations/{{$parameter["conversation_id"]}}/messages/{{$parameter["message_id"]}}',
					},
				},
			},
		],
		default: 'Create a message',
	},
	{
		displayName:
			'POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Messages API'],
				operation: ['Create a message'],
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
				resource: ['Messages API'],
				operation: ['Create a message'],
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
			loadOptionsMethod: 'loadClientGetDetailsOfAInbox',
		},
		displayOptions: {
			show: {
				resource: ['Messages API'],
				operation: ['Create a message'],
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
				resource: ['Messages API'],
				operation: ['Create a message'],
			},
		},
		options: [
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				default: '',
				description: 'Content for the message',
				routing: {
					send: {
						property: 'content',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Echo ID',
				name: 'echo_id',
				type: 'string',
				default: '',
				description: 'Temporary identifier which will be passed back via websockets',
				routing: {
					send: {
						property: 'echo_id',
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
			'GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Messages API'],
				operation: ['List all messages'],
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
				resource: ['Messages API'],
				operation: ['List all messages'],
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
			loadOptionsMethod: 'loadClientGetDetailsOfAInbox',
		},
		displayOptions: {
			show: {
				resource: ['Messages API'],
				operation: ['List all messages'],
			},
		},
	},
	{
		displayName:
			'PATCH /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages/{message_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Messages API'],
				operation: ['Update a message'],
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
				resource: ['Messages API'],
				operation: ['Update a message'],
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
			loadOptionsMethod: 'loadClientGetDetailsOfAInbox',
		},
		displayOptions: {
			show: {
				resource: ['Messages API'],
				operation: ['Update a message'],
			},
		},
	},
	{
		displayName: 'Message Name or ID',
		name: 'message_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Message ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadClientListAllConversationMessages',
		},
		displayOptions: {
			show: {
				resource: ['Messages API'],
				operation: ['Update a message'],
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
				resource: ['Messages API'],
				operation: ['Update a message'],
			},
		},
		options: [
			{
				displayName: 'Submitted Values',
				name: 'submitted_values',
				type: 'json',
				default: '',
				description: 'Replies to the Bot Message Types',
				routing: {
					send: {
						property: 'submitted_values',
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

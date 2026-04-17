import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Messages'],
			},
		},
		options: [
			{
				name: 'Create New Message',
				value: 'Create New Message',
				action: 'Create new message',
				description:
					'Create a new message in the conversation. ## WhatsApp Template Messages For WhatsApp channels, you can send structured template messages using the `template_params` field. Templates must be pre-approved in WhatsApp Business Manager. ### Example Templates **Text with Image Header:**',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/messages',
					},
				},
			},
			{
				name: 'Delete a Message',
				value: 'Delete a message',
				action: 'Delete a message',
				description: "Delete a message and it's attachments from the conversation",
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/messages/{{$parameter["message_id"]}}',
					},
				},
			},
			{
				name: 'Get Messages',
				value: 'Get messages',
				action: 'Get messages',
				description: 'List all messages of a conversation',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/messages',
					},
				},
			},
		],
		default: 'Get messages',
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
				resource: ['Messages'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Messages'],
				operation: ['Get messages'],
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
			loadOptionsMethod: 'loadApplicationConversationList',
		},
		displayOptions: {
			show: {
				resource: ['Messages'],
				operation: ['Get messages'],
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
				resource: ['Messages'],
				operation: ['Get messages'],
			},
		},
		options: [
			{
				displayName: 'After',
				name: 'after',
				type: 'number',
				default: 0,
				description:
					'Fetch messages after the message with this ID. Returns up to 100 messages in ascending order.',
				routing: {
					send: {
						type: 'query',
						property: 'after',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
			{
				displayName: 'Before',
				name: 'before',
				type: 'number',
				default: 0,
				description:
					'Fetch messages before the message with this ID. Returns up to 20 messages in ascending order.',
				routing: {
					send: {
						type: 'query',
						property: 'before',
						value: '={{ $value }}',
						propertyInDotNotation: false,
					},
				},
			},
		],
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Messages'],
				operation: ['Create New Message'],
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
			loadOptionsMethod: 'loadApplicationConversationList',
		},
		displayOptions: {
			show: {
				resource: ['Messages'],
				operation: ['Create New Message'],
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		required: true,
		type: 'string',
		default: '',
		description: 'The content of the message',
		routing: {
			send: {
				property: 'content',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Messages'],
				operation: ['Create New Message'],
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
				resource: ['Messages'],
				operation: ['Create New Message'],
			},
		},
		options: [
			{
				displayName: 'Campaign ID',
				name: 'campaign_id',
				type: 'number',
				default: 0,
				description: 'The campaign ID to which the message belongs',
				routing: {
					send: {
						property: 'campaign_id',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Content Attributes',
				name: 'content_attributes',
				type: 'json',
				default: '',
				description: 'Attributes based on the content type',
				routing: {
					send: {
						property: 'content_attributes',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Content Type',
				name: 'content_type',
				type: 'options',
				default: 'text',
				description: 'Content type of the message',
				options: [
					{
						name: 'Article',
						value: 'article',
					},
					{
						name: 'Cards',
						value: 'cards',
					},
					{
						name: 'Form',
						value: 'form',
					},
					{
						name: 'Input Email',
						value: 'input_email',
					},
					{
						name: 'Input Select',
						value: 'input_select',
					},
					{
						name: 'Text',
						value: 'text',
					},
				],
				routing: {
					send: {
						property: 'content_type',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Message Type',
				name: 'message_type',
				type: 'options',
				default: 'outgoing',
				description: 'The type of the message',
				options: [
					{
						name: 'Outgoing',
						value: 'outgoing',
					},
					{
						name: 'Incoming',
						value: 'incoming',
					},
				],
				routing: {
					send: {
						property: 'message_type',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Private',
				name: 'private',
				type: 'boolean',
				default: false,
				description: 'Whether the message is a private note',
				routing: {
					send: {
						property: 'private',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Template Params',
				name: 'template_params',
				type: 'json',
				default: ` **Text with Image Header::** {
					"content": "Hi your order 121212 is confirmed. Please wait for further updates",
					"template_params": {
					"name": "order_confirmation",
					"category": "MARKETING",
					"language": "en",
					"processed_params": {
						"body": {
						"1": "121212"
						},
						"header": {
						"media_url": "https://picsum.photos/200/300",
						"media_type": "image"
						}
					}
					}
				}
					**Text with Copy Code Button:**
				{
					"content": "Special offer! Get 30% off your next purchase. Use the code below",
					"template_params": {
					"name": "discount_coupon",
					"category": "MARKETING",
					"language": "en",
					"processed_params": {
						"body": {
						"discount_percentage": "30"
						},
						"buttons": [
						{
							"type": "copy_code",
							"parameter": "SAVE20"
						}
						]
					}
					}
				}`,
				description: 'WhatsApp template parameters for sending structured messages',
				routing: {
					send: {
						property: 'template_params',
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
			'DELETE /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages/{message_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Messages'],
				operation: ['Delete a message'],
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
			loadOptionsMethod: 'loadApplicationConversationList',
		},
		displayOptions: {
			show: {
				resource: ['Messages'],
				operation: ['Delete a message'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'message_id',
		required: true,
		type: 'number',
		default: 0,
		description: 'Message ID path parameter',
		displayOptions: {
			show: {
				resource: ['Messages'],
				operation: ['Delete a message'],
			},
		},
	},
];
export default properties;

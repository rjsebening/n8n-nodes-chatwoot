import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Webhooks'],
			},
		},
		options: [
			{
				name: 'List All Webhooks',
				value: 'List all webhooks',
				action: 'List all webhooks',
				description: 'List all webhooks in the account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/webhooks',
					},
				},
			},
			{
				name: 'Add a Webhook',
				value: 'Add a webhook',
				action: 'Add a webhook',
				description: 'Add a webhook subscription to the account',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/webhooks',
					},
				},
			},
			{
				name: 'Update a Webhook Object',
				value: 'Update a webhook object',
				action: 'Update a webhook object',
				description: 'Update a webhook object in the account',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/webhooks/{{$parameter["webhook_id"]}}',
					},
				},
			},
			{
				name: 'Delete a Webhook',
				value: 'Delete a webhook',
				action: 'Delete a webhook',
				description: 'Delete a webhook from the account',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/webhooks/{{$parameter["webhook_id"]}}',
					},
				},
			},
		],
		default: 'List all webhooks',
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
				resource: ['Webhooks'],
			},
		},
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/webhooks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Webhooks'],
				operation: ['List all webhooks'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/webhooks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Webhooks'],
				operation: ['Add a webhook'],
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
				resource: ['Webhooks'],
				operation: ['Add a webhook'],
			},
		},
		options: [
			{
				displayName: 'Url',
				name: 'url',
				type: 'string',
				default: '',
				description: 'The URL where the events should be sent',
				routing: {
					send: {
						property: 'url',
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
				description: 'The name of the webhook',
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
				displayName: 'Subscriptions',
				name: 'subscriptions',
				type: 'json',
				default: '',
				description: 'The events you want to subscribe to',
				routing: {
					send: {
						property: 'subscriptions',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/webhooks/{webhook_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Webhooks'],
				operation: ['Update a webhook object'],
			},
		},
	},
	{
		displayName: 'Webhook Name or ID',
		name: 'webhook_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Webhook ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllWebhooks',
		},
		displayOptions: {
			show: {
				resource: ['Webhooks'],
				operation: ['Update a webhook object'],
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
				resource: ['Webhooks'],
				operation: ['Update a webhook object'],
			},
		},
		options: [
			{
				displayName: 'Url',
				name: 'url',
				type: 'string',
				default: '',
				description: 'The URL where the events should be sent',
				routing: {
					send: {
						property: 'url',
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
				description: 'The name of the webhook',
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
				displayName: 'Subscriptions',
				name: 'subscriptions',
				type: 'json',
				default: '',
				description: 'The events you want to subscribe to',
				routing: {
					send: {
						property: 'subscriptions',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'DELETE /api/v1/accounts/{account_id}/webhooks/{webhook_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Webhooks'],
				operation: ['Delete a webhook'],
			},
		},
	},
	{
		displayName: 'Webhook Name or ID',
		name: 'webhook_id',
		required: true,
		type: 'options',
		default: '',
		description:
			'Webhook ID path parameter. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'loadApplicationListAllWebhooks',
		},
		displayOptions: {
			show: {
				resource: ['Webhooks'],
				operation: ['Delete a webhook'],
			},
		},
	},
];
export default properties;

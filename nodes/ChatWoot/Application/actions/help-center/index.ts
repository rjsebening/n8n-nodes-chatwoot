import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Help Center'],
			},
		},
		options: [
			{
				name: 'Add a New Article',
				value: 'Add a new article',
				action: 'Add a new article',
				description: 'Add a new article to portal',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/portals/{{$parameter["id"]}}/articles',
					},
				},
			},
			{
				name: 'Add a New Category',
				value: 'Add a new category',
				action: 'Add a new category',
				description: 'Add a new category to portal',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/portals/{{$parameter["id"]}}/categories',
					},
				},
			},
			{
				name: 'Add a New Portal',
				value: 'Add a new portal',
				action: 'Add a new portal',
				description: 'Add a new portal to account',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/portals',
					},
				},
			},
			{
				name: 'List All Portals in an Account',
				value: 'List all portals in an account',
				action: 'List all portals in an account',
				description: 'Get details of portals in an Account',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/portals',
					},
				},
			},
			{
				name: 'Update a Portal',
				value: 'Update a portal',
				action: 'Update a portal',
				description: 'Update a portal to account',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/accounts/{{$parameter["account_id"]}}/portals/{{$parameter["id"]}}',
					},
				},
			},
		],
		default: 'Add a new portal',
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
				resource: ['Help Center'],
			},
		},
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/portals',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Help Center'],
				operation: ['Add a new portal'],
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
				resource: ['Help Center'],
				operation: ['Add a new portal'],
			},
		},
		options: [
			{
				displayName: 'Archived',
				name: 'archived',
				type: 'boolean',
				default: false,
				description: 'Whether the portal is archived',
				routing: {
					send: {
						property: 'archived',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Color',
				name: 'color',
				type: 'color',
				default: '',
				description: 'Header color for help-center in hex format',
				routing: {
					send: {
						property: 'color',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Config',
				name: 'config',
				type: 'json',
				default: '',
				description: 'Configuration about supporting locales',
				routing: {
					send: {
						property: 'config',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Custom Domain',
				name: 'custom_domain',
				type: 'string',
				default: '',
				description: 'Custom domain to display help center',
				routing: {
					send: {
						property: 'custom_domain',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Header Text',
				name: 'header_text',
				type: 'string',
				default: '',
				description: 'Help center header',
				routing: {
					send: {
						property: 'header_text',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Homepage Link',
				name: 'homepage_link',
				type: 'string',
				default: '',
				description: 'Link to main dashboard',
				routing: {
					send: {
						property: 'homepage_link',
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
				description: 'Name for the portal',
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
				displayName: 'Page Title',
				name: 'page_title',
				type: 'string',
				default: '',
				description: 'Page title for the portal',
				routing: {
					send: {
						property: 'page_title',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Slug',
				name: 'slug',
				type: 'string',
				default: '',
				description: 'Slug for the portal to display in link',
				routing: {
					send: {
						property: 'slug',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'GET /api/v1/accounts/{account_id}/portals',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Help Center'],
				operation: ['List all portals in an account'],
			},
		},
	},
	{
		displayName: 'PATCH /api/v1/accounts/{account_id}/portals/{ID}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Help Center'],
				operation: ['Update a portal'],
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
			loadOptionsMethod: 'loadApplicationGetPortal',
		},
		displayOptions: {
			show: {
				resource: ['Help Center'],
				operation: ['Update a portal'],
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
				resource: ['Help Center'],
				operation: ['Update a portal'],
			},
		},
		options: [
			{
				displayName: 'Archived',
				name: 'archived',
				type: 'boolean',
				default: false,
				description: 'Whether the portal is archived',
				routing: {
					send: {
						property: 'archived',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Color',
				name: 'color',
				type: 'color',
				default: '',
				description: 'Header color for help-center in hex format',
				routing: {
					send: {
						property: 'color',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Config',
				name: 'config',
				type: 'json',
				default: '',
				description: 'Configuration about supporting locales',
				routing: {
					send: {
						property: 'config',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Custom Domain',
				name: 'custom_domain',
				type: 'string',
				default: '',
				description: 'Custom domain to display help center',
				routing: {
					send: {
						property: 'custom_domain',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Header Text',
				name: 'header_text',
				type: 'string',
				default: '',
				description: 'Help center header',
				routing: {
					send: {
						property: 'header_text',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Homepage Link',
				name: 'homepage_link',
				type: 'string',
				default: '',
				description: 'Link to main dashboard',
				routing: {
					send: {
						property: 'homepage_link',
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
				description: 'Name for the portal',
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
				displayName: 'Page Title',
				name: 'page_title',
				type: 'string',
				default: '',
				description: 'Page title for the portal',
				routing: {
					send: {
						property: 'page_title',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Slug',
				name: 'slug',
				type: 'string',
				default: '',
				description: 'Slug for the portal to display in link',
				routing: {
					send: {
						property: 'slug',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/portals/{ID}/categories',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Help Center'],
				operation: ['Add a new category'],
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
			loadOptionsMethod: 'loadApplicationGetPortal',
		},
		displayOptions: {
			show: {
				resource: ['Help Center'],
				operation: ['Add a new category'],
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
				resource: ['Help Center'],
				operation: ['Add a new category'],
			},
		},
		options: [
			{
				displayName: 'Associated Category ID',
				name: 'associated_category_id',
				type: 'number',
				default: 0,
				description:
					'To associate similar categories to each other, e.g same category of product documentation in different languages',
				routing: {
					send: {
						property: 'associated_category_id',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'A description for the category',
				routing: {
					send: {
						property: 'description',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Icon',
				name: 'icon',
				type: 'string',
				default: '',
				description: 'The icon of the category as a string (emoji)',
				routing: {
					send: {
						property: 'icon',
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
				description: 'The locale of the category',
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
				description: 'The name of the category',
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
				displayName: 'Parent Category ID',
				name: 'parent_category_id',
				type: 'number',
				default: 0,
				description:
					'To define parent category, e.g product documentation has multiple level features in sales category or in engineering category',
				routing: {
					send: {
						property: 'parent_category_id',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Category position in the portal list to sort',
				routing: {
					send: {
						property: 'position',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Slug',
				name: 'slug',
				type: 'string',
				default: '',
				description: 'The category slug used in the URL',
				routing: {
					send: {
						property: 'slug',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'POST /api/v1/accounts/{account_id}/portals/{ID}/articles',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Help Center'],
				operation: ['Add a new article'],
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
			loadOptionsMethod: 'loadApplicationGetPortal',
		},
		displayOptions: {
			show: {
				resource: ['Help Center'],
				operation: ['Add a new article'],
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
				resource: ['Help Center'],
				operation: ['Add a new article'],
			},
		},
		options: [
			{
				displayName: 'Associated Article ID',
				name: 'associated_article_id',
				type: 'number',
				default: 0,
				description:
					'To associate similar articles to each other, e.g to provide the link for the reference',
				routing: {
					send: {
						property: 'associated_article_id',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Author ID',
				name: 'author_id',
				type: 'number',
				default: 0,
				description: 'The author agent ID of the article',
				routing: {
					send: {
						property: 'author_id',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Category ID',
				name: 'category_id',
				type: 'number',
				default: 0,
				description: 'The category ID of the article',
				routing: {
					send: {
						property: 'category_id',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				default: '',
				description: 'The text content',
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
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'The description of the article',
				routing: {
					send: {
						property: 'description',
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
				description: 'The locale of the article',
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
				displayName: 'Meta',
				name: 'meta',
				type: 'json',
				default: '',
				description: 'Use for search',
				routing: {
					send: {
						property: 'meta',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Article position in category',
				routing: {
					send: {
						property: 'position',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Slug',
				name: 'slug',
				type: 'string',
				default: '',
				description: 'The slug of the article',
				routing: {
					send: {
						property: 'slug',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'number',
				default: 0,
				description: 'The status of the article. 0 for draft, 1 for published, 2 for archived.',
				routing: {
					send: {
						property: 'status',
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'The title of the article',
				routing: {
					send: {
						property: 'title',
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

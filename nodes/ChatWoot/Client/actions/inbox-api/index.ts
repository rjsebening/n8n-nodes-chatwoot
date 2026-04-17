import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Inbox API'],
			},
		},
		options: [
			{
				name: 'Inbox Details',
				value: 'Inbox details',
				action: 'Inbox details',
				description: 'Get the details of an inbox',
				routing: {
					request: {
						method: 'GET',
						url: '=/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}',
					},
				},
			},
		],
		default: 'Inbox details',
	},
	{
		displayName: 'GET /public/api/v1/inboxes/{inbox_identifier}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Inbox API'],
				operation: ['Inbox details'],
			},
		},
	},
];
export default properties;

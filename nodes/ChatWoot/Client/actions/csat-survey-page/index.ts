import type { INodeProperties } from 'n8n-workflow';
const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['CSAT Survey Page'],
			},
		},
		options: [
			{
				name: 'Get CSAT Survey Page',
				value: 'Get CSAT survey page',
				action: 'Get csat survey page',
				description:
					'You can redirect the client to this URL, instead of implementing the CSAT survey component yourself',
				routing: {
					request: {
						method: 'GET',
						url: '=/survey/responses/{{$parameter["conversation_uuid"]}}',
					},
				},
			},
		],
		default: 'Get CSAT survey page',
	},
	{
		displayName: 'GET /survey/responses/{conversation_uuid}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['CSAT Survey Page'],
				operation: ['Get CSAT survey page'],
			},
		},
	},
	{
		displayName: 'Conversation Uuid',
		name: 'conversation_uuid',
		required: true,
		type: 'string',
		default: '',
		description: 'Conversation Uuid path parameter',
		displayOptions: {
			show: {
				resource: ['CSAT Survey Page'],
				operation: ['Get CSAT survey page'],
			},
		},
	},
];
export default properties;

import { ICredentialTestRequest, ICredentialType, Icon, INodeProperties } from 'n8n-workflow';

export class ChatWootClientApi implements ICredentialType {
	name = 'chatwootClientApi';

	displayName = 'ChatWoot Client API';

	icon: Icon = {
		light: 'file:../nodes/ChatWoot/chatwoot.svg',
		dark: 'file:../nodes/ChatWoot/chatwoot.dark.svg',
	};

	documentationUrl = 'https://developers.chatwoot.com/api-reference/introduction';

	properties: INodeProperties[] = [
		{
			displayName: 'ChatWoot URL',
			name: 'url',
			placeholder: 'https://app.chatwoot.com',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Inbox Identifier',
			name: 'inboxIdentifier',
			type: 'string',
			default: '',
			required: true,
			description: 'Identifier from the API inbox channel configuration',
		},
		{
			displayName: 'HMAC Secret',
			name: 'hmacSecret',
			type: 'string',
			default: '',
			required: false,
			description: 'Optional secret for identity validation HMAC generation',
			typeOptions: { password: true },
		},
	];

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.url}}',
			url: '=/public/api/v1/inboxes/{{$credentials.inboxIdentifier}}',
		},
	};
}

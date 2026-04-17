import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	INodeProperties,
} from 'n8n-workflow';

export class ChatWootApplicationApi implements ICredentialType {
	name = 'chatwootApplicationApi';

	displayName = 'ChatWoot Application API';

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
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			placeholder: '00000000-0000-0000-0000-000000000000',
			default: '',
			required: true,
			typeOptions: { password: true },
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				api_access_token: '={{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.url}}',
			url: '/api',
		},
	};
}

import { INodeType, INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';
import properties from './Client/resources';
import * as methods from './shared/methods';

export class ChatWootClient implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ChatWoot Client',
		name: 'chatWootClient',
		icon: { light: 'file:chatwoot.svg', dark: 'file:chatwoot.dark.svg' },
		group: ['transform'],
		usableAsTool: true,
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with ChatWoot Client APIs',
		defaults: {
			name: 'ChatWoot Client',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'chatwootClientApi',
				required: true,
			},
		],
		requestDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			baseURL: '={{$credentials.url}}',
		},
		properties,
	};

	methods = {
		loadOptions: methods.loadOptions,
	};
}

import { INodeType, INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';
import properties from './Platform/resources';
import * as methods from './shared/methods';

export class ChatWootPlatform implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ChatWoot Platform',
		name: 'chatWootPlatform',
		icon: { light: 'file:chatwoot.svg', dark: 'file:chatwoot.dark.svg' },
		group: ['transform'],
		usableAsTool: true,
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with ChatWoot Platform APIs',
		defaults: {
			name: 'ChatWoot Platform',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'chatwootPlatformApi',
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

import { INodeType, INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';
import properties from './Application/resources';
import * as methods from './shared/methods';

export class ChatWootApplication implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ChatWoot Application',
		name: 'chatWootApplication',
		icon: { light: 'file:chatwoot.svg', dark: 'file:chatwoot.dark.svg' },
		group: ['transform'],
		usableAsTool: true,
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with ChatWoot Application APIs',
		defaults: {
			name: 'ChatWoot Application'
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'chatwootApplicationApi',
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
		resourceMapping: {
			getCustomAttributeFieldsConversation: methods.getCustomAttributeFieldsConversation,
			getCustomAttributeFieldsContact: methods.getCustomAttributeFieldsContact,
		},
	};
}

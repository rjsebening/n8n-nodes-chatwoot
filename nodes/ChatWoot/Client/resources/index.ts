import type { INodeProperties } from 'n8n-workflow';
import inboxAPIProperties from '../actions/inbox-api';
import contactsAPIProperties from '../actions/contacts-api';
import conversationsAPIProperties from '../actions/conversations-api';
import messagesAPIProperties from '../actions/messages-api';
import cSATSurveyPageProperties from '../actions/csat-survey-page';

const resourceProperty: INodeProperties = {
	displayName: 'Resource',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Contacts API',
			value: 'Contacts API',
			description: 'Create, read, and update client API contacts',
		},
		{
			name: 'Conversations API',
			value: 'Conversations API',
			description: 'Create, list, resolve, and update client API conversations',
		},
		{
			name: 'CSAT Survey Page',
			value: 'CSAT Survey Page',
			description: 'Get the public CSAT survey page URL data',
		},
		{
			name: 'Inbox',
			value: 'Inbox API',
			description: 'Read public inbox details',
		},
		{
			name: 'Messages API',
			value: 'Messages API',
			description: 'Create, list, and update client API messages',
		},
	],
	default: 'Inbox API',
};

const properties: INodeProperties[] = [
	resourceProperty,
	...inboxAPIProperties,
	...contactsAPIProperties,
	...conversationsAPIProperties,
	...messagesAPIProperties,
	...cSATSurveyPageProperties,
];

export default properties;

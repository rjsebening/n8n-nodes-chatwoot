import * as inboxApiLoadOptions from './actions/inbox-api/inbox-api.loadOptions';
import * as contactsApiLoadOptions from './actions/contacts-api/contacts-api.loadOptions';
import * as conversationsApiLoadOptions from './actions/conversations-api/conversations-api.loadOptions';
import * as messagesApiLoadOptions from './actions/messages-api/messages-api.loadOptions';
import * as csatSurveyPageLoadOptions from './actions/csat-survey-page/csat-survey-page.loadOptions';

export const clientLoadOptions = {
	...inboxApiLoadOptions,
	...contactsApiLoadOptions,
	...conversationsApiLoadOptions,
	...messagesApiLoadOptions,
	...csatSurveyPageLoadOptions,
};

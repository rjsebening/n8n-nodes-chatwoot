import * as accountLoadOptions from './actions/account/account.loadOptions';
import * as auditLogsLoadOptions from './actions/audit-logs/audit-logs.loadOptions';
import * as accountAgentBotsLoadOptions from './actions/account-agentbots/account-agentbots.loadOptions';
import * as agentsLoadOptions from './actions/agents/agents.loadOptions';
import * as cannedResponsesLoadOptions from './actions/canned-responses/canned-responses.loadOptions';
import * as customAttributesLoadOptions from './actions/custom-attributes/custom-attributes.loadOptions';
import * as contactsLoadOptions from './actions/contacts/contacts.loadOptions';
import * as contactLabelsLoadOptions from './actions/contact-labels/contact-labels.loadOptions';
import * as automationRuleLoadOptions from './actions/automation-rule/automation-rule.loadOptions';
import * as helpCenterLoadOptions from './actions/help-center/help-center.loadOptions';
import * as conversationsLoadOptions from './actions/conversations/conversations.loadOptions';
import * as conversationAssignmentsLoadOptions from './actions/conversation-assignments/conversation-assignments.loadOptions';
import * as conversationLoadOptions from './actions/conversation/conversation.loadOptions';
import * as inboxesLoadOptions from './actions/inboxes/inboxes.loadOptions';
import * as labelsLoadOptions from './actions/labels/labels.loadOptions';
import * as messagesLoadOptions from './actions/messages/messages.loadOptions';
import * as integrationsLoadOptions from './actions/integrations/integrations.loadOptions';
import * as profileLoadOptions from './actions/profile/profile.loadOptions';
import * as teamsLoadOptions from './actions/teams/teams.loadOptions';
import * as customFiltersLoadOptions from './actions/custom-filters/custom-filters.loadOptions';
import * as webhooksLoadOptions from './actions/webhooks/webhooks.loadOptions';
import * as reportsLoadOptions from './actions/reports/reports.loadOptions';

export const applicationLoadOptions = {
	...accountLoadOptions,
	...auditLogsLoadOptions,
	...accountAgentBotsLoadOptions,
	...agentsLoadOptions,
	...cannedResponsesLoadOptions,
	...customAttributesLoadOptions,
	...contactsLoadOptions,
	...contactLabelsLoadOptions,
	...automationRuleLoadOptions,
	...helpCenterLoadOptions,
	...conversationsLoadOptions,
	...conversationAssignmentsLoadOptions,
	...conversationLoadOptions,
	...inboxesLoadOptions,
	...labelsLoadOptions,
	...messagesLoadOptions,
	...integrationsLoadOptions,
	...profileLoadOptions,
	...teamsLoadOptions,
	...customFiltersLoadOptions,
	...webhooksLoadOptions,
	...reportsLoadOptions,
};

import type { INodeProperties } from 'n8n-workflow';
import accountProperties from '../actions/account';
import auditLogsProperties from '../actions/audit-logs';
import accountAgentBotsProperties from '../actions/account-agentbots';
import agentsProperties from '../actions/agents';
import cannedResponsesProperties from '../actions/canned-responses';
import customAttributesProperties from '../actions/custom-attributes';
import contactsProperties from '../actions/contacts';
import contactLabelsProperties from '../actions/contact-labels';
import automationRuleProperties from '../actions/automation-rule';
import helpCenterProperties from '../actions/help-center';
import conversationsProperties from '../actions/conversations';
import conversationAssignmentsProperties from '../actions/conversation-assignments';
import inboxesProperties from '../actions/inboxes';
import labelsProperties from '../actions/labels';
import messagesProperties from '../actions/messages';
import integrationsProperties from '../actions/integrations';
import profileProperties from '../actions/profile';
import teamsProperties from '../actions/teams';
import customFiltersProperties from '../actions/custom-filters';
import webhooksProperties from '../actions/webhooks';
import reportsProperties from '../actions/reports';
import conversationProperties from '../actions/conversation';

const resourceProperty: INodeProperties = {
	displayName: 'Resource',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Account',
			value: 'Account',
			description: 'Manage account details and settings',
		},
		{
			name: 'Account AgentBot',
			value: 'Account AgentBots',
			description: 'Manage agent bots connected to an account',
		},
		{
			name: 'Agent',
			value: 'Agents',
			description: 'Manage agents in a ChatWoot account',
		},
		{
			name: 'Audit Log',
			value: 'Audit Logs',
			description: 'Read audit events for a ChatWoot account',
		},
		{
			name: 'Automation Rule',
			value: 'Automation Rule',
			description: 'Manage automation rules for account workflows',
		},
		{
			name: 'Canned Response',
			value: 'Canned Responses',
			description: 'Manage reusable canned replies for agents',
		},
		{
			name: 'Contact',
			value: 'Contacts',
			description: 'Create, search, update, merge, and delete account contacts',
		},
		{
			name: 'Contact Label',
			value: 'Contact Labels',
			description: 'Read and assign labels on contacts',
		},
		{
			name: 'Conversation',
			value: 'Conversations',
			description: 'Create, list, update, label, and report on conversations',
		},
		{
			name: 'Conversation Assignment',
			value: 'Conversation Assignments',
			description: 'Assign conversations to teams or agents',
		},
		{
			name: 'Custom Attribute',
			value: 'Custom Attributes',
			description: 'Manage custom attribute definitions for contacts and conversations',
		},
		{
			name: 'Custom Filter',
			value: 'Custom Filters',
			description: 'Manage saved custom filters',
		},
		{
			name: 'Help Center',
			value: 'Help Center',
			description: 'Manage portals, categories, and articles in Help Center',
		},
		{
			name: 'Inbox',
			value: 'Inboxes',
			description: 'Manage account inboxes, members, and agent bots',
		},
		{
			name: 'Integration',
			value: 'Integrations',
			description: 'Manage integration apps and hooks',
		},
		{
			name: 'Label',
			value: 'Labels',
			description: 'Manage account-level labels',
		},
		{
			name: 'Message',
			value: 'Messages',
			description: 'List, create, and delete conversation messages',
		},
		{
			name: 'Profile',
			value: 'Profile',
			description: 'Fetch and update the authenticated user profile',
		},
		{
			name: 'Report',
			value: 'Reports',
			description: 'Fetch account, conversation, and summary reports',
		},
		{
			name: 'Team',
			value: 'Teams',
			description: 'Manage teams and team members',
		},
		{
			name: 'Webhook',
			value: 'Webhooks',
			description: 'Manage ChatWoot webhook subscriptions',
		},
	],
	default: 'Account',
};

const properties: INodeProperties[] = [
	resourceProperty,
	...accountProperties,
	...auditLogsProperties,
	...accountAgentBotsProperties,
	...agentsProperties,
	...cannedResponsesProperties,
	...customAttributesProperties,
	...contactsProperties,
	...contactLabelsProperties,
	...automationRuleProperties,
	...helpCenterProperties,
	...conversationsProperties,
	...conversationAssignmentsProperties,
	...inboxesProperties,
	...labelsProperties,
	...messagesProperties,
	...integrationsProperties,
	...profileProperties,
	...teamsProperties,
	...customFiltersProperties,
	...webhooksProperties,
	...reportsProperties,
	...conversationProperties,
];

export default properties;

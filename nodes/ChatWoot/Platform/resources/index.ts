import type { INodeProperties } from 'n8n-workflow';
import accountsProperties from '../actions/accounts';
import accountUsersProperties from '../actions/account-users';
import agentBotsProperties from '../actions/agentbots';
import usersProperties from '../actions/users';

const resourceProperty: INodeProperties = {
	displayName: 'Resource',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Account',
			value: 'Accounts',
			description: 'Manage ChatWoot platform accounts',
		},
		{
			name: 'Account User',
			value: 'Account Users',
			description: 'Manage users assigned to platform accounts',
		},
		{
			name: 'AgentBot',
			value: 'AgentBots',
			description: 'Manage platform-level agent bots',
		},
		{
			name: 'User',
			value: 'Users',
			description: 'Manage platform users and SSO links',
		},
	],
	default: 'Accounts',
};

const properties: INodeProperties[] = [
	resourceProperty,
	...accountsProperties,
	...accountUsersProperties,
	...agentBotsProperties,
	...usersProperties,
];

export default properties;

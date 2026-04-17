import * as accountsLoadOptions from './actions/accounts/accounts.loadOptions';
import * as accountUsersLoadOptions from './actions/account-users/account-users.loadOptions';
import * as agentBotsLoadOptions from './actions/agentbots/agentbots.loadOptions';
import * as usersLoadOptions from './actions/users/users.loadOptions';

export const platformLoadOptions = {
	...accountsLoadOptions,
	...accountUsersLoadOptions,
	...agentBotsLoadOptions,
	...usersLoadOptions,
};

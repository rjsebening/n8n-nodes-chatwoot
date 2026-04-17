import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadApplicationListAllTeams = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/teams',
	true,
);

export const loadApplicationGetDetailsOfASingleTeam = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/teams/{team_id}',
	true,
);

export const loadApplicationGetTeamMembers = createLoadOptions(
	'chatwootApplicationApi',
	'/api/v1/accounts/{account_id}/teams/{team_id}/team_members',
	true,
);

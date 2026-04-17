import { createLoadOptions } from '../../../shared/shared.loadOptions';

export const loadClientGetCsatSurveyPage = createLoadOptions(
	'chatwootClientApi',
	'/survey/responses/{conversation_uuid}',
	false,
);

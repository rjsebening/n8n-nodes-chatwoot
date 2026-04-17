import type {
	IDataObject,
	IHookFunctions,
	IHttpRequestOptions,
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
	JsonObject,
} from 'n8n-workflow';

type WebhookCleanupContext = IHookFunctions | IWebhookFunctions;
import { NodeApiError, NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';

type ChatWootWebhook = {
	id: number;
	url: string;
	name?: string;
	subscriptions?: string[];
	account_id?: number;
};

const webhookEvents = [
	'contact_created',
	'contact_updated',
	'conversation_created',
	'conversation_status_changed',
	'conversation_updated',
	'message_created',
	'message_updated',
	'webwidget_triggered',
];

export class ChatWootTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ChatWoot Trigger',
		name: 'chatWootTrigger',
		icon: { light: 'file:chatwoot.svg', dark: 'file:chatwoot.dark.svg' },
		group: ['trigger'],
		version: 1,
		description:
			'Starts the workflow when ChatWoot sends a webhook event to the generated webhook URL',
		defaults: {
			name: 'ChatWoot Trigger',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				responseData: 'firstEntryJson',
				isFullPath: true,
				path: '',
			},
		],
		credentials: [
			{
				name: 'chatwootApplicationApi',
				required: true,
			},
		],
		properties: [
			{
				displayName:
					'When the workflow is activated, n8n creates a ChatWoot webhook for this account and removes it again when the workflow is deactivated.',
				name: 'setupNotice',
				type: 'notice',
				default: '',
			},
			{
				displayName: 'Account ID',
				name: 'account_id',
				required: true,
				type: 'number',
				default: 1,
				description: 'The numeric ID of the ChatWoot account where the webhook is registered',
			},
			{
				displayName: 'Webhook Name',
				name: 'webhookName',
				type: 'string',
				default: 'n8n ChatWoot Trigger',
				description: 'Name to use for the webhook in ChatWoot',
			},
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
				required: true,
				default: ['conversation_created', 'conversation_status_changed'],
				description: 'ChatWoot webhook subscriptions that should trigger this workflow',
				options: [
					{
						name: 'Contact Created',
						value: 'contact_created',
						description: 'Runs when a contact is created',
					},
					{
						name: 'Contact Updated',
						value: 'contact_updated',
						description: 'Runs when a contact is updated',
					},
					{
						name: 'Conversation Created',
						value: 'conversation_created',
						description: 'Runs when a conversation is created',
					},
					{
						name: 'Conversation Status Changed',
						value: 'conversation_status_changed',
						description: 'Runs when a conversation status changes',
					},
					{
						name: 'Conversation Updated',
						value: 'conversation_updated',
						description: 'Runs when a conversation is updated',
					},
					{
						name: 'Message Created',
						value: 'message_created',
						description: 'Runs when a message is created',
					},
					{
						name: 'Message Updated',
						value: 'message_updated',
						description: 'Runs when a message is updated',
					},
					{
						name: 'Web Widget Triggered',
						value: 'webwidget_triggered',
						description: 'Runs when the web widget is triggered',
					},
				],
			},
		],
		usableAsTool: true,
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const body = this.getBodyData();
		const selectedEvents = normalizeEvents(this.getNodeParameter('events', []) as string[]);
		const event = String((body as IDataObject).event ?? (body as IDataObject).event_name ?? '');

		if (this.getMode() === 'manual') {
			try {
				await cleanupWebhooksByUrl.call(this);
			} catch (error) {
				this.logger.warn('ChatWoot trigger: failed to clean up test webhook after payload', {
					file: 'ChatWootTrigger.node.ts',
					function: 'webhook',
					error,
				});
			}
		}

		if (selectedEvents.length > 0 && event && !selectedEvents.includes(event)) {
			return {
				webhookResponse: { ok: true, ignored: true },
			};
		}

		return {
			webhookResponse: { ok: true },
			workflowData: [[{ json: body }]],
		};
	}

	webhookMethods = {
		default: {
			checkExists,
			create,
			delete: deleteWebhook,
		},
	};
}

function normalizeEvents(events: string[]): string[] {
	const validEvents = events.filter((event) => webhookEvents.includes(event));

	return [...new Set(validEvents.length ? validEvents : webhookEvents)].sort();
}

function subscriptionsMatch(left: string[] = [], right: string[] = []): boolean {
	const normalizedLeft = normalizeEvents(left);
	const normalizedRight = normalizeEvents(right);

	return (
		normalizedLeft.length === normalizedRight.length &&
		normalizedLeft.every((event, index) => event === normalizedRight[index])
	);
}

type HttpRequestError = {
	message?: string;
	status?: number;
	statusCode?: number;
	code?: string;
	response?: {
		status?: number;
		statusCode?: number;
		data?: unknown;
		body?: unknown;
	};
	error?: unknown;
};

type FullHttpResponse = {
	status?: number;
	statusCode?: number;
	body?: unknown;
	data?: unknown;
};

function stringifyForDescription(value: unknown): string {
	if (value === undefined || value === null || value === '') {
		return '';
	}

	if (typeof value === 'string') {
		return value;
	}

	try {
		return JSON.stringify(value);
	} catch {
		return String(value);
	}
}

function getRequestStatusCode(error: HttpRequestError): string | undefined {
	const statusCode =
		error.response?.statusCode ?? error.response?.status ?? error.statusCode ?? error.status;

	return statusCode === undefined ? undefined : String(statusCode);
}

function getResponseBody(error: HttpRequestError): unknown {
	return error.response?.data ?? error.response?.body ?? error.error;
}

function getFullResponseBody(response: FullHttpResponse): unknown {
	return response.body ?? response.data;
}

function getFullResponseStatusCode(response: FullHttpResponse): number | undefined {
	return response.statusCode ?? response.status;
}

function isNotFoundError(error: unknown): boolean {
	const requestError = error as {
		httpCode?: string | null;
		status?: number;
		statusCode?: number;
		response?: {
			status?: number;
			statusCode?: number;
		};
	};

	return (
		requestError.httpCode === '404' ||
		requestError.statusCode === 404 ||
		requestError.status === 404 ||
		requestError.response?.statusCode === 404 ||
		requestError.response?.status === 404
	);
}

function toJsonObject(
	error: HttpRequestError,
	statusCode?: string,
	responseBody?: unknown,
): JsonObject {
	return {
		...error,
		message: error.message ?? `ChatWoot API request failed with status code ${statusCode}`,
		response: {
			...(error.response ?? {}),
			status: statusCode ? Number(statusCode) : error.response?.status,
			statusCode: statusCode ? Number(statusCode) : error.response?.statusCode,
			data: responseBody ?? error.response?.data,
		},
	} as JsonObject;
}

async function chatwootApiRequest(
	this: WebhookCleanupContext,
	method: IHttpRequestOptions['method'],
	endpoint: string,
	body?: IDataObject,
): Promise<IDataObject | ChatWootWebhook[]> {
	const credentials = await this.getCredentials<{
		url: string;
		accessToken: string;
	}>('chatwootApplicationApi');
	const baseURL = String(credentials.url ?? '').replace(/\/$/, '');

	if (!/^https?:\/\//i.test(baseURL)) {
		throw new NodeOperationError(this.getNode(), 'Invalid ChatWoot URL in credentials');
	}

	try {
		const response = (await this.helpers.httpRequestWithAuthentication.call(
			this,
			'chatwootApplicationApi',
			{
				method,
				baseURL,
				url: endpoint,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body,
				json: true,
				ignoreHttpStatusErrors: true,
				returnFullResponse: true,
			},
		)) as FullHttpResponse;

		const responseStatusCode = getFullResponseStatusCode(response);
		const responseBody = getFullResponseBody(response);

		if (responseStatusCode && responseStatusCode >= 400) {
			const statusCode = String(responseStatusCode);
			const responseDescription = stringifyForDescription(responseBody);
			const requestDescription = body ? ` Request body: ${stringifyForDescription(body)}` : '';
			const description = [
				`ChatWoot request: ${method} ${endpoint}.`,
				responseDescription ? `Response body: ${responseDescription}` : undefined,
				requestDescription,
			]
				.filter(Boolean)
				.join(' ');

			this.logger.error(`ChatWoot trigger API request failed: ${method} ${endpoint}`, {
				file: 'ChatWootTrigger.node.ts',
				function: 'chatwootApiRequest',
				statusCode,
				endpoint,
				method,
				responseBody,
				requestBody: body,
			});

			throw new NodeApiError(this.getNode(), toJsonObject({}, statusCode, responseBody), {
				message: `ChatWoot API request failed: ${method} ${endpoint}`,
				description,
				httpCode: statusCode,
			});
		}

		return responseBody as IDataObject | ChatWootWebhook[];
	} catch (error) {
		if (error instanceof NodeApiError) {
			throw error;
		}

		const requestError = error as HttpRequestError;
		const responseBody = getResponseBody(requestError);
		const responseDescription = stringifyForDescription(responseBody);
		const requestDescription = body ? ` Request body: ${stringifyForDescription(body)}` : '';
		const description = [
			`ChatWoot request: ${method} ${endpoint}.`,
			responseDescription ? `Response body: ${responseDescription}` : requestError.message,
			requestDescription,
		]
			.filter(Boolean)
			.join(' ');
		const statusCode = getRequestStatusCode(requestError);

		this.logger.error(`ChatWoot trigger API request failed: ${method} ${endpoint}`, {
			file: 'ChatWootTrigger.node.ts',
			function: 'chatwootApiRequest',
			statusCode,
			endpoint,
			method,
			responseBody,
			requestBody: body,
		});

		throw new NodeApiError(this.getNode(), toJsonObject(requestError, statusCode, responseBody), {
			message: `ChatWoot API request failed: ${method} ${endpoint}`,
			description,
			httpCode: statusCode,
		});
	}
}

function getWebhookEndpoint(this: WebhookCleanupContext): string {
	const accountId = this.getNodeParameter('account_id') as number;
	return `/api/v1/accounts/${accountId}/webhooks`;
}

async function getRemoteWebhooks(this: WebhookCleanupContext): Promise<ChatWootWebhook[]> {
	const response = await chatwootApiRequest.call(this, 'GET', getWebhookEndpoint.call(this));

	return Array.isArray(response) ? (response as ChatWootWebhook[]) : [];
}

async function checkExists(this: IHookFunctions): Promise<boolean> {
	const webhookUrl = this.getNodeWebhookUrl('default');

	if (!webhookUrl) {
		return false;
	}

	const webhookData = this.getWorkflowStaticData('node');
	const selectedEvents = normalizeEvents(this.getNodeParameter('events', []) as string[]);
	const remoteWebhooks = await getRemoteWebhooks.call(this);
	const webhookId = webhookData.webhookId ? Number(webhookData.webhookId) : undefined;

	const existingWebhook =
		(webhookId && remoteWebhooks.find((webhook) => webhook.id === webhookId)) ||
		remoteWebhooks.find(
			(webhook) =>
				webhook.url === webhookUrl && subscriptionsMatch(webhook.subscriptions, selectedEvents),
		);

	if (!existingWebhook) {
		return false;
	}

	webhookData.webhookId = existingWebhook.id;

	return (
		existingWebhook.url === webhookUrl &&
		subscriptionsMatch(existingWebhook.subscriptions, selectedEvents)
	);
}

async function create(this: IHookFunctions): Promise<boolean> {
	const webhookUrl = this.getNodeWebhookUrl('default');

	if (!webhookUrl) {
		return false;
	}

	const webhookData = this.getWorkflowStaticData('node');
	const webhookName = this.getNodeParameter('webhookName', 'n8n ChatWoot Trigger') as string;
	const selectedEvents = normalizeEvents(this.getNodeParameter('events', []) as string[]);
	const webhookPayload: IDataObject = {
		url: webhookUrl,
		name: webhookName,
		subscriptions: selectedEvents,
	};
	const endpoint = getWebhookEndpoint.call(this);
	const remoteWebhooks = await getRemoteWebhooks.call(this);

	for (const webhook of remoteWebhooks.filter(
		(remoteWebhook) => remoteWebhook.url === webhookUrl,
	)) {
		await chatwootApiRequest.call(this, 'DELETE', `${endpoint}/${webhook.id}`);
	}

	const response = (await chatwootApiRequest.call(
		this,
		'POST',
		endpoint,
		webhookPayload,
	)) as IDataObject;

	if (!response?.id) {
		return false;
	}

	webhookData.webhookId = response.id;

	return true;
}

function normalizeUrl(url: string | null | undefined): string {
	return String(url ?? '')
		.trim()
		.replace(/\/+$/, '');
}

async function cleanupWebhooksByUrl(this: WebhookCleanupContext): Promise<void> {
	const webhookUrl = this.getNodeWebhookUrl('default');
	if (!webhookUrl) return;

	const endpoint = getWebhookEndpoint.call(this);
	const targetUrl = normalizeUrl(webhookUrl);
	const remoteWebhooks = await getRemoteWebhooks.call(this);

	for (const webhook of remoteWebhooks.filter(
		(remoteWebhook) => normalizeUrl(remoteWebhook.url) === targetUrl,
	)) {
		try {
			await chatwootApiRequest.call(this, 'DELETE', `${endpoint}/${webhook.id}`);
		} catch (error) {
			if (!isNotFoundError(error)) {
				throw error;
			}
		}
	}
}

async function deleteWebhook(this: IHookFunctions): Promise<boolean> {
	const webhookData = this.getWorkflowStaticData('node');
	const endpoint = getWebhookEndpoint.call(this);
	const webhookId = webhookData.webhookId ? Number(webhookData.webhookId) : undefined;

	if (webhookId) {
		try {
			await chatwootApiRequest.call(this, 'DELETE', `${endpoint}/${webhookId}`);
		} catch (error) {
			if (!isNotFoundError(error)) {
				throw error;
			}
		}

		delete webhookData.webhookId;
	}

	await cleanupWebhooksByUrl.call(this);

	delete webhookData.webhookId;

	return true;
}

export { checkExists, create, deleteWebhook };

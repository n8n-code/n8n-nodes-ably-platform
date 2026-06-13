import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { statusDescription } from './resources/status';
import { historyDescription } from './resources/history';
import { publishingDescription } from './resources/publishing';
import { authenticationDescription } from './resources/authentication';
import { pushDescription } from './resources/push';
import { statsDescription } from './resources/stats';

export class AblyPlatform implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Ably Platform',
                name: 'N8nDevAblyPlatform',
                icon: { light: 'file:./ably-platform.svg', dark: 'file:./ably-platform.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Ably REST API specification.',
                defaults: { name: 'Ably Platform' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAblyPlatformApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Status",
					"value": "Status",
					"description": ""
				},
				{
					"name": "History",
					"value": "History",
					"description": ""
				},
				{
					"name": "Publishing",
					"value": "Publishing",
					"description": ""
				},
				{
					"name": "Authentication",
					"value": "Authentication",
					"description": ""
				},
				{
					"name": "Push",
					"value": "Push",
					"description": ""
				},
				{
					"name": "Stats",
					"value": "Stats",
					"description": ""
				}
			],
			"default": ""
		},
		...statusDescription,
		...historyDescription,
		...publishingDescription,
		...authenticationDescription,
		...pushDescription,
		...statsDescription
                ],
        };
}

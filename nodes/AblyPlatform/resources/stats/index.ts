import type { INodeProperties } from 'n8n-workflow';

export const statsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					]
				}
			},
			"options": [
				{
					"name": "Get Stats",
					"value": "Get Stats",
					"action": "Retrieve usage statistics for an application",
					"description": "The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stats"
						}
					}
				},
				{
					"name": "Get Time",
					"value": "Get Time",
					"action": "Get the service time",
					"description": "This returns the service time in milliseconds since the epoch.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/time"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Stats"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Stats"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": "100",
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Stats"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "end",
			"default": "now",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Stats"
					]
				}
			}
		},
		{
			"displayName": "Direction",
			"name": "direction",
			"default": "backwards",
			"type": "options",
			"options": [
				{
					"name": "Forwards",
					"value": "forwards"
				},
				{
					"name": "Backwards",
					"value": "backwards"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "direction",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Stats"
					]
				}
			}
		},
		{
			"displayName": "Unit",
			"name": "unit",
			"description": "Specifies the unit of aggregation in the returned results.",
			"default": "minute",
			"type": "options",
			"options": [
				{
					"name": "Minute",
					"value": "minute"
				},
				{
					"name": "Hour",
					"value": "hour"
				},
				{
					"name": "Day",
					"value": "day"
				},
				{
					"name": "Month",
					"value": "month"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "unit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Stats"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "Basic Authentication using an [API key](https://www.ably.io/documentation/core-features/authentication#basic-authentication).",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Stats"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "Token Authentication using an [Ably Token](https://www.ably.io/documentation/core-features/authentication#basic-authentication), or optionally an [Ably JWT](https://www.ably.io/documentation/core-features/authentication#ably-jwt-process).",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /time",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Time"
					]
				}
			}
		},
];

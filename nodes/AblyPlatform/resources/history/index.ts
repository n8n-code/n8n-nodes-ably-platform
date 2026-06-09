import type { INodeProperties } from 'n8n-workflow';

export const historyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					]
				}
			},
			"options": [
				{
					"name": "Get Messages By Channel",
					"value": "Get Messages By Channel",
					"action": "Get message history for a channel",
					"description": "Get message history for a channel",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channel_id\"]}}/messages"
						}
					}
				},
				{
					"name": "Get Presence History Of Channel",
					"value": "Get Presence History Of Channel",
					"action": "Get presence history of a channel",
					"description": "Get presence on a channel",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channel_id\"]}}/presence/history"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /channels/{channel_id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Get Messages By Channel"
					]
				}
			}
		},
		{
			"displayName": "Channel Id",
			"name": "channel_id",
			"required": true,
			"description": "The [Channel's ID](https://www.ably.io/documentation/rest/channels).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Get Messages By Channel"
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
						"History"
					],
					"operation": [
						"Get Messages By Channel"
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
						"History"
					],
					"operation": [
						"Get Messages By Channel"
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
						"History"
					],
					"operation": [
						"Get Messages By Channel"
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
						"History"
					],
					"operation": [
						"Get Messages By Channel"
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
						"History"
					],
					"operation": [
						"Get Messages By Channel"
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
						"History"
					],
					"operation": [
						"Get Messages By Channel"
					]
				}
			}
		},
		{
			"displayName": "GET /channels/{channel_id}/presence/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Get Presence History Of Channel"
					]
				}
			}
		},
		{
			"displayName": "Channel Id",
			"name": "channel_id",
			"required": true,
			"description": "The [Channel's ID](https://www.ably.io/documentation/rest/channels).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Get Presence History Of Channel"
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
						"History"
					],
					"operation": [
						"Get Presence History Of Channel"
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
						"History"
					],
					"operation": [
						"Get Presence History Of Channel"
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
						"History"
					],
					"operation": [
						"Get Presence History Of Channel"
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
						"History"
					],
					"operation": [
						"Get Presence History Of Channel"
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
						"History"
					],
					"operation": [
						"Get Presence History Of Channel"
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
						"History"
					],
					"operation": [
						"Get Presence History Of Channel"
					]
				}
			}
		},
];

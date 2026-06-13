import type { INodeProperties } from 'n8n-workflow';

export const statusDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					]
				}
			},
			"options": [
				{
					"name": "Get Metadata Of All Channels",
					"value": "Get Metadata Of All Channels",
					"action": "Enumerate all active channels of the application",
					"description": "Enumerate all active channels of the application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels"
						}
					}
				},
				{
					"name": "Get Metadata Of Channel",
					"value": "Get Metadata Of Channel",
					"action": "Get metadata of a channel",
					"description": "Get metadata of a channel",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channel_id\"]}}"
						}
					}
				},
				{
					"name": "Get Presence Of Channel",
					"value": "Get Presence Of Channel",
					"action": "Get presence of a channel",
					"description": "Get presence on a channel",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channel_id\"]}}/presence"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Get Metadata Of All Channels"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 100,
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
						"Status"
					],
					"operation": [
						"Get Metadata Of All Channels"
					]
				}
			}
		},
		{
			"displayName": "Prefix",
			"name": "prefix",
			"description": "Optionally limits the query to only those channels whose name starts with the given prefix",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "prefix",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Get Metadata Of All Channels"
					]
				}
			}
		},
		{
			"displayName": "By",
			"name": "by",
			"description": "optionally specifies whether to return just channel names (by=id) or ChannelDetails (by=value)",
			"default": "value",
			"type": "options",
			"options": [
				{
					"name": "Value",
					"value": "value"
				},
				{
					"name": "ID",
					"value": "id"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "by",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Get Metadata Of All Channels"
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
						"Status"
					],
					"operation": [
						"Get Metadata Of All Channels"
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
						"Status"
					],
					"operation": [
						"Get Metadata Of All Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /channels/{channel_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Get Metadata Of Channel"
					]
				}
			}
		},
		{
			"displayName": "Channel ID",
			"name": "channel_id",
			"required": true,
			"description": "The [Channel's ID](https://www.ably.io/documentation/rest/channels).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Get Metadata Of Channel"
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
						"Status"
					],
					"operation": [
						"Get Metadata Of Channel"
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
						"Status"
					],
					"operation": [
						"Get Metadata Of Channel"
					]
				}
			}
		},
		{
			"displayName": "GET /channels/{channel_id}/presence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Get Presence Of Channel"
					]
				}
			}
		},
		{
			"displayName": "Channel ID",
			"name": "channel_id",
			"required": true,
			"description": "The [Channel's ID](https://www.ably.io/documentation/rest/channels).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Get Presence Of Channel"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "clientId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Get Presence Of Channel"
					]
				}
			}
		},
		{
			"displayName": "Connection ID",
			"name": "connectionId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "connectionId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Get Presence Of Channel"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 100,
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
						"Status"
					],
					"operation": [
						"Get Presence Of Channel"
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
						"Status"
					],
					"operation": [
						"Get Presence Of Channel"
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
						"Status"
					],
					"operation": [
						"Get Presence Of Channel"
					]
				}
			}
		},
];

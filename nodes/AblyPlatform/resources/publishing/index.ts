import type { INodeProperties } from 'n8n-workflow';

export const publishingDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Publishing"
					]
				}
			},
			"options": [
				{
					"name": "Publish Messages To Channel",
					"value": "Publish Messages To Channel",
					"action": "Publish a message to a channel",
					"description": "Publish a message to the specified channel",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/channels/{{$parameter[\"channel_id\"]}}/messages"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /channels/{channel_id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publishing"
					],
					"operation": [
						"Publish Messages To Channel"
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
						"Publishing"
					],
					"operation": [
						"Publish Messages To Channel"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"type": "string",
			"default": "",
			"description": "The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message.",
			"routing": {
				"send": {
					"property": "clientId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publishing"
					],
					"operation": [
						"Publish Messages To Channel"
					]
				}
			}
		},
		{
			"displayName": "Connection ID",
			"name": "connectionId",
			"type": "string",
			"default": "",
			"description": "The connection ID of the publisher of this message.",
			"routing": {
				"send": {
					"property": "connectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publishing"
					],
					"operation": [
						"Publish Messages To Channel"
					]
				}
			}
		},
		{
			"displayName": "Data",
			"name": "data",
			"type": "string",
			"default": "",
			"description": "The string encoded payload, with the encoding specified below.",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publishing"
					],
					"operation": [
						"Publish Messages To Channel"
					]
				}
			}
		},
		{
			"displayName": "Encoding",
			"name": "encoding",
			"type": "string",
			"default": "",
			"description": "This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.",
			"routing": {
				"send": {
					"property": "encoding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publishing"
					],
					"operation": [
						"Publish Messages To Channel"
					]
				}
			}
		},
		{
			"displayName": "Extras",
			"name": "extras",
			"type": "json",
			"default": "{\n  \"push\": {\n    \"apns\": {\n      \"notification\": {}\n    },\n    \"fcm\": {\n      \"notification\": {}\n    },\n    \"notification\": {},\n    \"web\": {\n      \"notification\": {}\n    }\n  }\n}",
			"description": "Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.",
			"routing": {
				"send": {
					"property": "extras",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publishing"
					],
					"operation": [
						"Publish Messages To Channel"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "A Unique ID that can be specified by the publisher for [idempotent publishing](https://www.ably.io/documentation/rest/messages#idempotent).",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publishing"
					],
					"operation": [
						"Publish Messages To Channel"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The event name, if provided.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publishing"
					],
					"operation": [
						"Publish Messages To Channel"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"type": "number",
			"default": 0,
			"description": "Timestamp when the message was received by the Ably, as milliseconds since the epoch.",
			"routing": {
				"send": {
					"property": "timestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publishing"
					],
					"operation": [
						"Publish Messages To Channel"
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
						"Publishing"
					],
					"operation": [
						"Publish Messages To Channel"
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
						"Publishing"
					],
					"operation": [
						"Publish Messages To Channel"
					]
				}
			}
		},
];

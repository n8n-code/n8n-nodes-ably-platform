import type { INodeProperties } from 'n8n-workflow';

export const authenticationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					]
				}
			},
			"options": [
				{
					"name": "Request Access Token",
					"value": "Request Access Token",
					"action": "Request an access token",
					"description": "This is the means by which clients obtain access tokens to use the service. You can see how to construct an Ably TokenRequest in the [Ably TokenRequest spec](https://www.ably.io/documentation/rest-api/token-request-spec) documentation, although we recommend you use an Ably SDK rather to create a TokenRequest, as the construction of a TokenRequest is complex. The resulting token response object contains the token properties as defined in Ably TokenRequest spec. Authentication is not required if using a Signed TokenRequest.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/keys/{{$parameter[\"keyName\"]}}/requestToken"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /keys/{keyName}/requestToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Request Access Token"
					]
				}
			}
		},
		{
			"displayName": "Key Name",
			"name": "keyName",
			"required": true,
			"description": "The [key name](https://www.ably.io/documentation/rest-api/token-request-spec#api-key-format) comprises of the app ID and key ID of an API key.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Request Access Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Capability",
			"name": "capability",
			"type": "json",
			"default": "{\n  \"channel1\": [\n    \"publish\",\n    \"subscribe\"\n  ]\n}",
			"description": "The [capabilities](https://www.ably.io/documentation/core-features/authentication#capabilities-explained) (i.e. a set of channel names/namespaces and, for each, a set of operations) which should be a subset of the set of capabilities associated with the key specified in keyName.",
			"routing": {
				"send": {
					"property": "capability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Request Access Token"
					]
				}
			}
		},
		{
			"displayName": "Client Id",
			"name": "clientId",
			"type": "string",
			"default": "",
			"description": "The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) to be assosciated with the token. Can be set to * to allow for any client ID to be used.",
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
						"Authentication"
					],
					"operation": [
						"Request Access Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key Name",
			"name": "keyName",
			"type": "string",
			"default": "xVLyHw.LMJZxw",
			"description": "Name of the key used for the TokenRequest. The keyName comprises of the app ID and key ID on an API Key.",
			"routing": {
				"send": {
					"property": "keyName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Request Access Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Nonce",
			"name": "nonce",
			"type": "string",
			"default": "",
			"description": "An unquoted, un-escaped random string of at least 16 characters. Used to ensure the Ably TokenRequest cannot be reused.",
			"routing": {
				"send": {
					"property": "nonce",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Request Access Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Timestamp",
			"name": "timestamp",
			"type": "number",
			"default": 0,
			"description": "Time of creation of the Ably TokenRequest.",
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
						"Authentication"
					],
					"operation": [
						"Request Access Token"
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
						"Authentication"
					],
					"operation": [
						"Request Access Token"
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
						"Authentication"
					],
					"operation": [
						"Request Access Token"
					]
				}
			}
		},
];

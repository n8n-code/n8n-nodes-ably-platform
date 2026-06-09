import type { INodeProperties } from 'n8n-workflow';

export const pushDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					]
				}
			},
			"options": [
				{
					"name": "Delete Push Device Details",
					"value": "Delete Push Device Details",
					"action": "Delete a registered device's update token",
					"description": "Delete a device details object.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/push/channelSubscriptions"
						}
					}
				},
				{
					"name": "Get Push Subscriptions On Channels",
					"value": "Get Push Subscriptions On Channels",
					"action": "List channel subscriptions",
					"description": "Get a list of push notification subscriptions to channels.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/push/channelSubscriptions"
						}
					}
				},
				{
					"name": "Subscribe Push Device To Channel",
					"value": "Subscribe Push Device To Channel",
					"action": "Subscribe a device to a channel",
					"description": "Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/push/channelSubscriptions"
						}
					}
				},
				{
					"name": "Get Channels With Push Subscribers",
					"value": "Get Channels With Push Subscribers",
					"action": "List all channels with at least one subscribed device",
					"description": "Returns a paginated response of channel names.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/push/channels"
						}
					}
				},
				{
					"name": "Unregister All Push Devices",
					"value": "Unregister All Push Devices",
					"action": "Unregister matching devices for push notifications",
					"description": "Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/push/deviceRegistrations"
						}
					}
				},
				{
					"name": "Get Registered Push Devices",
					"value": "Get Registered Push Devices",
					"action": "List devices registered for receiving push notifications",
					"description": "List of device details of devices registed for push notifications.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/push/deviceRegistrations"
						}
					}
				},
				{
					"name": "Register Push Device",
					"value": "Register Push Device",
					"action": "Register a device for receiving push notifications",
					"description": "Register a device’s details, including the information necessary to deliver push notifications to it. Requires \"push-admin\" capability.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/push/deviceRegistrations"
						}
					}
				},
				{
					"name": "Unregister Push Device",
					"value": "Unregister Push Device",
					"action": "Unregister a single device for push notifications",
					"description": "Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/push/deviceRegistrations/{{$parameter[\"device_id\"]}}"
						}
					}
				},
				{
					"name": "Get Push Device Details",
					"value": "Get Push Device Details",
					"action": "Get a device registration",
					"description": "Get the full details of a device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/push/deviceRegistrations/{{$parameter[\"device_id\"]}}"
						}
					}
				},
				{
					"name": "Patch Push Device Details",
					"value": "Patch Push Device Details",
					"action": "Update a device registration",
					"description": "Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/push/deviceRegistrations/{{$parameter[\"device_id\"]}}"
						}
					}
				},
				{
					"name": "Put Push Device Details",
					"value": "Put Push Device Details",
					"action": "Update a device registration",
					"description": "Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/push/deviceRegistrations/{{$parameter[\"device_id\"]}}"
						}
					}
				},
				{
					"name": "Update Push Device Details",
					"value": "Update Push Device Details",
					"action": "Reset a registered device's update token",
					"description": "Gets an updated device details object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/push/deviceRegistrations/{{$parameter[\"device_id\"]}}/resetUpdateToken"
						}
					}
				},
				{
					"name": "Publish Push Notification To Devices",
					"value": "Publish Push Notification To Devices",
					"action": "Publish a push notification to device(s)",
					"description": "A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/push/publish"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /push/channelSubscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Delete Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Channel",
			"name": "channel",
			"description": "Filter to restrict to subscriptions associated with that channel.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "channel",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Delete Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "deviceId",
			"description": "Must be set when clientId is empty, cannot be used with clientId.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "deviceId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Delete Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Client Id",
			"name": "clientId",
			"description": "Must be set when deviceId is empty, cannot be used with deviceId.",
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
						"Push"
					],
					"operation": [
						"Delete Push Device Details"
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
						"Push"
					],
					"operation": [
						"Delete Push Device Details"
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
						"Push"
					],
					"operation": [
						"Delete Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "GET /push/channelSubscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Get Push Subscriptions On Channels"
					]
				}
			}
		},
		{
			"displayName": "Channel",
			"name": "channel",
			"description": "Filter to restrict to subscriptions associated with that channel.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "channel",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Get Push Subscriptions On Channels"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "deviceId",
			"description": "Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "deviceId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Get Push Subscriptions On Channels"
					]
				}
			}
		},
		{
			"displayName": "Client Id",
			"name": "clientId",
			"description": "Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.",
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
						"Push"
					],
					"operation": [
						"Get Push Subscriptions On Channels"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of records to return.",
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
						"Push"
					],
					"operation": [
						"Get Push Subscriptions On Channels"
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
						"Push"
					],
					"operation": [
						"Get Push Subscriptions On Channels"
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
						"Push"
					],
					"operation": [
						"Get Push Subscriptions On Channels"
					]
				}
			}
		},
		{
			"displayName": "POST /push/channelSubscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Subscribe Push Device To Channel"
					]
				}
			}
		},
		{
			"displayName": "Channel",
			"name": "channel",
			"type": "string",
			"default": "",
			"description": "Channel name.",
			"routing": {
				"send": {
					"property": "channel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Subscribe Push Device To Channel"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "deviceId",
			"type": "string",
			"default": "",
			"description": "Must be set when clientId is empty, cannot be used with clientId.",
			"routing": {
				"send": {
					"property": "deviceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Subscribe Push Device To Channel"
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
						"Push"
					],
					"operation": [
						"Subscribe Push Device To Channel"
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
						"Push"
					],
					"operation": [
						"Subscribe Push Device To Channel"
					]
				}
			}
		},
		{
			"displayName": "GET /push/channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Get Channels With Push Subscribers"
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
						"Push"
					],
					"operation": [
						"Get Channels With Push Subscribers"
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
						"Push"
					],
					"operation": [
						"Get Channels With Push Subscribers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /push/deviceRegistrations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Unregister All Push Devices"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "deviceId",
			"description": "Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "deviceId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Unregister All Push Devices"
					]
				}
			}
		},
		{
			"displayName": "Client Id",
			"name": "clientId",
			"description": "Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.",
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
						"Push"
					],
					"operation": [
						"Unregister All Push Devices"
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
						"Push"
					],
					"operation": [
						"Unregister All Push Devices"
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
						"Push"
					],
					"operation": [
						"Unregister All Push Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /push/deviceRegistrations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Get Registered Push Devices"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "deviceId",
			"description": "Optional filter to restrict to devices associated with that deviceId.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "deviceId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Get Registered Push Devices"
					]
				}
			}
		},
		{
			"displayName": "Client Id",
			"name": "clientId",
			"description": "Optional filter to restrict to devices associated with that clientId.",
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
						"Push"
					],
					"operation": [
						"Get Registered Push Devices"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of records to return.",
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
						"Push"
					],
					"operation": [
						"Get Registered Push Devices"
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
						"Push"
					],
					"operation": [
						"Get Registered Push Devices"
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
						"Push"
					],
					"operation": [
						"Get Registered Push Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /push/deviceRegistrations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Register Push Device"
					]
				}
			}
		},
		{
			"displayName": "Client Id",
			"name": "clientId",
			"type": "string",
			"default": "",
			"description": "Optional trusted client identifier for the device.",
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
						"Push"
					],
					"operation": [
						"Register Push Device"
					]
				}
			}
		},
		{
			"displayName": "Device Secret",
			"name": "deviceSecret",
			"type": "string",
			"default": "",
			"description": "Secret value for the device.",
			"routing": {
				"send": {
					"property": "deviceSecret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Register Push Device"
					]
				}
			}
		},
		{
			"displayName": "Form Factor",
			"name": "formFactor",
			"type": "options",
			"default": "phone",
			"description": "Form factor of the push device.",
			"options": [
				{
					"name": "Phone",
					"value": "phone"
				},
				{
					"name": "Tablet",
					"value": "tablet"
				},
				{
					"name": "Desktop",
					"value": "desktop"
				},
				{
					"name": "Tv",
					"value": "tv"
				},
				{
					"name": "Watch",
					"value": "watch"
				},
				{
					"name": "Car",
					"value": "car"
				},
				{
					"name": "Embedded",
					"value": "embedded"
				}
			],
			"routing": {
				"send": {
					"property": "formFactor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Register Push Device"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Unique identifier for the device generated by the device itself.",
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
						"Push"
					],
					"operation": [
						"Register Push Device"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "{}",
			"description": "Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.",
			"routing": {
				"send": {
					"property": "metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Register Push Device"
					]
				}
			}
		},
		{
			"displayName": "Platform",
			"name": "platform",
			"type": "options",
			"default": "ios",
			"description": "Platform of the push device.",
			"options": [
				{
					"name": "Ios",
					"value": "ios"
				},
				{
					"name": "Android",
					"value": "android"
				}
			],
			"routing": {
				"send": {
					"property": "platform",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Register Push Device"
					]
				}
			}
		},
		{
			"displayName": "Push Recipient",
			"name": "push-recipient",
			"type": "json",
			"default": "{}",
			"description": "Push recipient details for a device.",
			"routing": {
				"send": {
					"property": "push.recipient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Register Push Device"
					]
				}
			}
		},
		{
			"displayName": "Push State",
			"name": "push-state",
			"type": "options",
			"default": "Active",
			"description": "the current state of the push device.",
			"options": [
				{
					"name": "Active",
					"value": "Active"
				},
				{
					"name": "Failing",
					"value": "Failing"
				},
				{
					"name": "Failed",
					"value": "Failed"
				}
			],
			"routing": {
				"send": {
					"property": "push.state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Register Push Device"
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
						"Push"
					],
					"operation": [
						"Register Push Device"
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
						"Push"
					],
					"operation": [
						"Register Push Device"
					]
				}
			}
		},
		{
			"displayName": "DELETE /push/deviceRegistrations/{device_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Unregister Push Device"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "device_id",
			"required": true,
			"description": "Device's ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Unregister Push Device"
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
						"Push"
					],
					"operation": [
						"Unregister Push Device"
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
						"Push"
					],
					"operation": [
						"Unregister Push Device"
					]
				}
			}
		},
		{
			"displayName": "GET /push/deviceRegistrations/{device_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Get Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "device_id",
			"required": true,
			"description": "Device's ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Get Push Device Details"
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
						"Push"
					],
					"operation": [
						"Get Push Device Details"
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
						"Push"
					],
					"operation": [
						"Get Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /push/deviceRegistrations/{device_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Patch Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "device_id",
			"required": true,
			"description": "Device's ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Patch Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Client Id",
			"name": "clientId",
			"type": "string",
			"default": "",
			"description": "Optional trusted client identifier for the device.",
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
						"Push"
					],
					"operation": [
						"Patch Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Device Secret",
			"name": "deviceSecret",
			"type": "string",
			"default": "",
			"description": "Secret value for the device.",
			"routing": {
				"send": {
					"property": "deviceSecret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Patch Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Form Factor",
			"name": "formFactor",
			"type": "options",
			"default": "phone",
			"description": "Form factor of the push device.",
			"options": [
				{
					"name": "Phone",
					"value": "phone"
				},
				{
					"name": "Tablet",
					"value": "tablet"
				},
				{
					"name": "Desktop",
					"value": "desktop"
				},
				{
					"name": "Tv",
					"value": "tv"
				},
				{
					"name": "Watch",
					"value": "watch"
				},
				{
					"name": "Car",
					"value": "car"
				},
				{
					"name": "Embedded",
					"value": "embedded"
				}
			],
			"routing": {
				"send": {
					"property": "formFactor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Patch Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Unique identifier for the device generated by the device itself.",
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
						"Push"
					],
					"operation": [
						"Patch Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "{}",
			"description": "Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.",
			"routing": {
				"send": {
					"property": "metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Patch Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Platform",
			"name": "platform",
			"type": "options",
			"default": "ios",
			"description": "Platform of the push device.",
			"options": [
				{
					"name": "Ios",
					"value": "ios"
				},
				{
					"name": "Android",
					"value": "android"
				}
			],
			"routing": {
				"send": {
					"property": "platform",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Patch Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Push Recipient",
			"name": "push-recipient",
			"type": "json",
			"default": "{}",
			"description": "Push recipient details for a device.",
			"routing": {
				"send": {
					"property": "push.recipient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Patch Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Push State",
			"name": "push-state",
			"type": "options",
			"default": "Active",
			"description": "the current state of the push device.",
			"options": [
				{
					"name": "Active",
					"value": "Active"
				},
				{
					"name": "Failing",
					"value": "Failing"
				},
				{
					"name": "Failed",
					"value": "Failed"
				}
			],
			"routing": {
				"send": {
					"property": "push.state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Patch Push Device Details"
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
						"Push"
					],
					"operation": [
						"Patch Push Device Details"
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
						"Push"
					],
					"operation": [
						"Patch Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "PUT /push/deviceRegistrations/{device_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Put Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "device_id",
			"required": true,
			"description": "Device's ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Put Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Client Id",
			"name": "clientId",
			"type": "string",
			"default": "",
			"description": "Optional trusted client identifier for the device.",
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
						"Push"
					],
					"operation": [
						"Put Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Device Secret",
			"name": "deviceSecret",
			"type": "string",
			"default": "",
			"description": "Secret value for the device.",
			"routing": {
				"send": {
					"property": "deviceSecret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Put Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Form Factor",
			"name": "formFactor",
			"type": "options",
			"default": "phone",
			"description": "Form factor of the push device.",
			"options": [
				{
					"name": "Phone",
					"value": "phone"
				},
				{
					"name": "Tablet",
					"value": "tablet"
				},
				{
					"name": "Desktop",
					"value": "desktop"
				},
				{
					"name": "Tv",
					"value": "tv"
				},
				{
					"name": "Watch",
					"value": "watch"
				},
				{
					"name": "Car",
					"value": "car"
				},
				{
					"name": "Embedded",
					"value": "embedded"
				}
			],
			"routing": {
				"send": {
					"property": "formFactor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Put Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Unique identifier for the device generated by the device itself.",
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
						"Push"
					],
					"operation": [
						"Put Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "{}",
			"description": "Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.",
			"routing": {
				"send": {
					"property": "metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Put Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Platform",
			"name": "platform",
			"type": "options",
			"default": "ios",
			"description": "Platform of the push device.",
			"options": [
				{
					"name": "Ios",
					"value": "ios"
				},
				{
					"name": "Android",
					"value": "android"
				}
			],
			"routing": {
				"send": {
					"property": "platform",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Put Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Push Recipient",
			"name": "push-recipient",
			"type": "json",
			"default": "{}",
			"description": "Push recipient details for a device.",
			"routing": {
				"send": {
					"property": "push.recipient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Put Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Push State",
			"name": "push-state",
			"type": "options",
			"default": "Active",
			"description": "the current state of the push device.",
			"options": [
				{
					"name": "Active",
					"value": "Active"
				},
				{
					"name": "Failing",
					"value": "Failing"
				},
				{
					"name": "Failed",
					"value": "Failed"
				}
			],
			"routing": {
				"send": {
					"property": "push.state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Put Push Device Details"
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
						"Push"
					],
					"operation": [
						"Put Push Device Details"
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
						"Push"
					],
					"operation": [
						"Put Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "GET /push/deviceRegistrations/{device_id}/resetUpdateToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Update Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "device_id",
			"required": true,
			"description": "Device's ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Update Push Device Details"
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
						"Push"
					],
					"operation": [
						"Update Push Device Details"
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
						"Push"
					],
					"operation": [
						"Update Push Device Details"
					]
				}
			}
		},
		{
			"displayName": "POST /push/publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Publish Push Notification To Devices"
					]
				}
			}
		},
		{
			"displayName": "Push",
			"name": "push",
			"type": "json",
			"default": "{\n  \"apns\": {\n    \"notification\": {}\n  },\n  \"fcm\": {\n    \"notification\": {}\n  },\n  \"notification\": {},\n  \"web\": {\n    \"notification\": {}\n  }\n}",
			"routing": {
				"send": {
					"property": "push",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Publish Push Notification To Devices"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Recipient",
			"name": "recipient",
			"type": "json",
			"default": "{}",
			"description": "Push recipient details for a device.",
			"routing": {
				"send": {
					"property": "recipient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Push"
					],
					"operation": [
						"Publish Push Notification To Devices"
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
						"Push"
					],
					"operation": [
						"Publish Push Notification To Devices"
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
						"Push"
					],
					"operation": [
						"Publish Push Notification To Devices"
					]
				}
			}
		},
];

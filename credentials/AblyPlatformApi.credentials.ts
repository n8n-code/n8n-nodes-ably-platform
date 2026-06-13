import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AblyPlatformApi implements ICredentialType {
        name = 'N8nDevAblyPlatformApi';

        displayName = 'Ably Platform API';

        icon: Icon = { light: 'file:../nodes/AblyPlatform/ably-platform.svg', dark: 'file:../nodes/AblyPlatform/ably-platform.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://rest.ably.io',
                        required: true,
                        placeholder: 'https://rest.ably.io',
                        description: 'The base URL of your Ably Platform API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}

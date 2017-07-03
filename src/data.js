export const applications = [
    {
        title: 'Dashboard',
        healthCheck: '/health/check',
        dataTransformer: (responseData) => responseData.version
    },
    {
        title: 'Geo API',
        healthCheck: '/api/geo/health/check',
        dataTransformer: (responseData) => responseData.version
    },
    {
        title: 'User API',
        healthCheck: '/api/user/health/check',
        dataTransformer: (responseData) => responseData.version
    },
    {
        title: 'Tracking API',
        healthCheck: '/api/tracking/health/check',
        dataTransformer: (responseData) => responseData.version
    },
    {
        title: 'Cash Collection',
        healthCheck: '/api/cash-collection/health/check',
        dataTransformer: (responseData) => responseData.version
    },
    {
        title: 'Mobile Sync',
        healthCheck: '/api/mobile/health/check',
        dataTransformer: (responseData) => responseData.version
    },
    {
        title: 'Dispatch Service',
        healthCheck: '/api/dispatch-service/health/check',
        dataTransformer: (responseData) => responseData.version
    },
    {
        title: 'Comms API',
        healthCheck: '/api/comms/health/check',
        dataTransformer: (responseData) => responseData.version
    },
];

export const stagingCountries = [
    {
        code: 'at',
        baseUrl: 'https://logistics-st.foodora.at',
    },
    {
        code: 'de',
        baseUrl: 'https://logistics-st.foodora.de',
    },
    {
        code: 'nl',
        baseUrl: 'https://logistics-st.foodora.nl',
    },
    {
        code: 'no',
        baseUrl: 'https://logistics-st.foodora.no',
    },
];

export const productionApCountries = [
    {
        code: 'sg',
        baseUrl: 'https://logistics.foodora.sg',
    },
    {
        code: 'hk',
        baseUrl: 'https://logistics.foodora.hk',
    },
];

export const productionEuCountries = [
    {
        code: 'at',
        baseUrl: 'https://logistics.foodora.at',
    },
    {
        code: 'de',
        baseUrl: 'https://logistics.foodora.de',
    },
    {
        code: 'nl',
        baseUrl: 'https://logistics.foodora.nl',
    },
    {
        code: 'no',
        baseUrl: 'https://logistics.foodora.no',
    },
];

export const productionUsCountries = [
    {
        code: 'ca',
        baseUrl: 'https://logistics.foodora.ca',
    },
];

export const qaCountries = [
    {
        code: 'xa',
        baseUrl: 'https://logistics-xa.foodora.tech',
    },
    {
        code: 'xb',
        baseUrl: 'https://logistics-xb.foodora.tech',
    },
    {
        code: 'xc',
        baseUrl: 'https://logistics-xc.foodora.tech',
    },
];

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

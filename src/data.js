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
        code: 'ar',
        baseUrl: 'https://logistics-st.foodora.com.ar',
    },
    {
        code: 'at',
        baseUrl: 'https://logistics-st.foodora.at',
    },
    // {
    //     code: 'au',
    //     baseUrl: 'https://logistics-st.foodora.com.au',
    // },
    // {
    //     code: 'bd',
    //     baseUrl: 'https://logistics-st-bd.foodora.tech',
    // },
    // {
    //     code: 'bh',
    //     baseUrl: 'https://logistics-st-bh.foodora.tech',
    // },
    // {
    //     code: 'ca',
    //     baseUrl: 'https://logistics-st.foodora.ca',
    // },
    // {
    //     code: 'cl',
    //     baseUrl: 'https://logistics-st.foodora.com.cl',
    // },
    // {
    //     code: 'co',
    //     baseUrl: 'https://logistics-st-co.foodora.tech',
    // },
    // {
    //     code: 'cz',
    //     baseUrl: 'https://logistics-st-cz.foodora.tech',
    // },
    // {
    //     code: 'de',
    //     baseUrl: 'https://logistics-st.foodora.de',
    // },
    // {
    //     code: 'fi',
    //     baseUrl: 'https://logistics-st.foodora.fi',
    // },
    // {
    //     code: 'fr',
    //     baseUrl: 'https://logistics-st.foodora.fr',
    // },
    // {
    //     code: 'hk',
    //     baseUrl: 'https://logistics-st.foodora.hk',
    // },
    // {
    //     code: 'it',
    //     baseUrl: 'https://logistics-st.foodora.it',
    // },
    // {
    //     code: 'kw',
    //     baseUrl: 'https://logistics-st.foodora.com.kw',
    // },
    // {
    //     code: 'my',
    //     baseUrl: 'https://logistics-st.foodora.my',
    // },
    // {
    //     code: 'nl',
    //     baseUrl: 'https://logistics-st.foodora.nl',
    // },
    // {
    //     code: 'no',
    //     baseUrl: 'https://logistics-st.foodora.no',
    // },
    // {
    //     code: 'ph',
    //     baseUrl: 'https://logistics-st.foodora.co.ph',
    // },
    // {
    //     code: 'qa',
    //     baseUrl: 'https://logistics-st-qa.foodora.tech',
    // },
    // {
    //     code: 'se',
    //     baseUrl: 'https://logistics-st.foodora.se',
    // },
    // {
    //     code: 'sg',
    //     baseUrl: 'https://logistics-st.foodora.sg',
    // },
    // {
    //     code: 'th',
    //     baseUrl: 'https://logistics-st.foodora.co.th',
    // },
    // {
    //     code: 'tw',
    //     baseUrl: 'https://logistics-st.foodora.co.tw',
    // },
    // {
    //     code: 'uy',
    //     baseUrl: 'https://logistics-st.foodora.uy',
    // },
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

export const APP_CONFIG = {
    SOCKET_URL: 'wss://city-ws.herokuapp.com/‌',
    AQI_CATEGORIES: [
        {
            title: 'Good',
            startRange: 0,
            endRange: 50,
            bgColor: '#54a84f'
        },
        {
            title: 'Satisfactory',
            startRange: 51,
            endRange: 100,
            bgColor: '#a3c853'
        },
        {
            title: 'Moderate',
            startRange: 101,
            endRange: 200,
            bgColor: '#e3dd4f'
        },
        {
            title: 'Poor',
            startRange: 201,
            endRange: 300,
            bgColor: '#f29c32'
        },
        {
            title: 'Very Poor',
            startRange: 301,
            endRange: 400,
            bgColor: '#e93f33'
        },
        {
            title: 'Severe',
            startRange: 401,
            endRange: 500,
            bgColor: '#af2d24'
        }
    ]
}
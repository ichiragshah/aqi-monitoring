import { APP_CONFIG } from './../config/app.config'

export const getCategory = (aqi) => {
    const filteredCategory = APP_CONFIG.AQI_CATEGORIES.filter((category) => {
        return Math.ceil(aqi) >= category.startRange && Math.ceil(aqi) <= category.endRange
    }) 
    return filteredCategory[0]
}

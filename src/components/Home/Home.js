import React from "react"
import { initSocket, getAQIData } from './../../socket'
import Comparison from './../Comparison/Comparison'
import Feed from './../Feed/Feed'
import Visualisation from "../Visualisation/Visualisation"
import { DEFAULT_CITIES } from "../../config/default"
import { getCategory } from './../../utils/Category.util'

const Home = () => {
    

    const [cities, setCities] = React.useState(DEFAULT_CITIES)
    const [updatedCities, setupdatedCities] = React.useState(DEFAULT_CITIES)

    React.useEffect(() => {
        initSocket()
    }, [])

    React.useEffect(() => {
        getAQIData((newData) => {
            let citiesCopy = cities
            newData.map((data) => {

                const date = new Date()
                const hours = date.getHours()
                const minutes = date.getMinutes()
                const seconds = date.getSeconds()

                const dataTimeStamp = `${hours}:${minutes}:${seconds}`
                data.updatedTime = dataTimeStamp

                data.category = getCategory(data.aqi)

                let index = citiesCopy.findIndex(
                    (city) => city.city === data.city
                )
                // City found
                index >= 0 ? citiesCopy[index] = data : citiesCopy.push(data)

                return citiesCopy
            })
            setupdatedCities(newData)
            return setCities(citiesCopy)
        }, [])
    })

    return (
        <div className="home-wrapper">

            {updatedCities.length > 0 ? (
                <React.Fragment>
                    <div className="section-live">
                        <div className="visualisation-wrapper">
                            <Visualisation cities={cities} />
                        </div>
                        <div className="feed-wrapper">
                            <Feed cities={cities} />
                        </div>
                    </div>
                    <div className="comparison-wrapper">
                        <Comparison cities={cities} />
                    </div>
                </React.Fragment>  
                ) : (
                    <p>Loading...</p>
                )}             
        </div>
    )

}

export default  Home

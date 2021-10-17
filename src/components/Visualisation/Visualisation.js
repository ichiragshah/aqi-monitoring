import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import { APP_CONFIG } from '../../config/app.config'
import { DEFAULT_CITIES } from '../../config/default'
import './Visualisaton.css'
import { getCategory } from './../../utils/Category.util'

const Visualisation = ({cities}) => {

    const [activeCity, setActiveCity] = React.useState(cities[0].city)
    const [activeCities, setActiveCities] = React.useState(cities);

    function handleCityChange(event) {
        setActiveCity(event.target.value)
        setActiveCities(cities.filter((city) => city.city === event.target.value))
    }

    const labels = []
    APP_CONFIG.AQI_CATEGORIES.map((category) => {

        const label = {}
        label["text"] = category.title
        label["color"] = category.bgColor
        label["position"] = "INSIDE"
        labels.push(label)
        return label
    })

    const category = getCategory(activeCities[0].aqi)

    
    return ( 
        <div className="visualisation-section">

            <div className="wrapper">

                <ReactSpeedometer
                    height={200}
                    value={activeCities[0].aqi}
                    currentValueText={activeCities[0].aqi.toFixed(2).toString()}
                    minValue={0}
                    maxValue={500}
                    segments={6}
                    segmentColors={[
                        "#54a84f",
                        "#a3c853",
                        "#e3dd4f",
                        "#f29c32",
                        "#e93f33",
                        "#af2d24"
                    ]}
                />

                <h3 className="status m-0">Air quality of <select value={activeCity.city} onChange={handleCityChange}>
                    {DEFAULT_CITIES.map((city) => {
                        return (
                            <option key={city.city} value={city.city}>
                            {city.city}
                            </option>
                        )
                    })}
                </select> is <span style={{color: category.bgColor}}>{category.title}</span></h3>
            </div>
        </div>
    )
}

export default Visualisation
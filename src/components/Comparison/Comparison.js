import React from "react"
import { APP_CONFIG } from "../../config/app.config"
import './Comparison.css'

const Comparison = ({cities}) => {

    // const dummyData = [
    //     {
    //         city: "Mumbai",
    //         aqi: 150.2341
    //     },
    //     {
    //         city: "Delhi",
    //         aqi: 405.2341
    //     },
    //     {
    //         city: "Bangalore",
    //         aqi: 245.2341
    //     },
    //     {
    //         city: "Jaipur",
    //         aqi: 29.2341
    //     },
    //     {
    //         city: "Kolkata",
    //         aqi: 35.2341
    //     }
    // ]
    const config = APP_CONFIG

    return (
        <div className="section">
            <h1>Live comparison Chart</h1>
            <div className="row">
                {config.AQI_CATEGORIES.map((category) => {
                    return (
                        <div className="card-wrapper" key={category.title}>
                            <div className="box-header" >
                                <p className="title">{category.title}</p>
                                <p className="range">
                                    <span className="label">
                                        AQI Range: ({category.startRange}-{category.endRange})
                                    </span>
                                </p>
                            </div>
                            <div className="wrapper">
                                {cities.map((city) => {
                                    const cityAqi = city.aqi.toFixed(2)
                                    return (
                                        <div key={city.city}>

                                            {cityAqi >= category.startRange && cityAqi <= category.endRange ? (
                                                <div className="card" style={{backgroundColor: category.bgColor}}>
                                                    {city.city}: {cityAqi}
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>                    
                    )
                })}
            </div>
        </div>
    )
}

export default Comparison

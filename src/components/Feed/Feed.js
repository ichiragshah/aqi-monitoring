import React from "react"
import './Feed.css'
import { getCategory } from './../../utils/Category.util'

const Feed = ({cities}) => {

    return (
        <React.Fragment>

            <h1>Live data feed </h1>
            <div className="live-feed-wrapper">
                {cities.map((city, index) => {

                    const category = getCategory(city.aqi)

                    return (
                        <div className="feed-card-wrapper" key={index}>
                            <React.Fragment>

                                <div className="card-inner">
                                    <div className="section">
                                        <div className="left-section">
                                            <div className="avatar" style={{backgroundColor: category.bgColor}}>{city.aqi.toFixed(2)}</div>
                                        </div>
                                        <div className="right-section">
                                            <h3 className="title">{city.city}</h3>
                                            <p className="m-0 label">Updated at {city.updatedTime}</p>
                                        </div>
                                    </div>
                                    <div className="description">Air quality is <span style={{color: category.bgColor}}>{category.title} </span></div>
                                </div>
                            </React.Fragment>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default Feed

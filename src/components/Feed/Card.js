const Card = ({name, aqi, timeStamp}) => {

    // TODO: Format time here
    return (
        <div className="card">
            <h2>{name}</h2>
            <p className="highlight">{aqi}</p>
            <p class="time">Last updated on: {timeStamp}</p>
        </div>
    )
}

export default Card

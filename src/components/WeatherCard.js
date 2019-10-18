import React from 'react'
import '../card.css';
import '../css/all.min.css'


const WeatherCard = (props) => {

    return(
        <div className="card">
            <h1> { props.city } </h1>
            <h2>
                The temp is {props.temp}
            </h2>
        </div>
    )

}

export default WeatherCard;
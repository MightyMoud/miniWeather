import React from 'react'
import '../card.css';
import '../css/all.min.css'
import '../css/weather-icons.min.css'
import '../css/weather-icons-wind.min.css'


const WeatherCard = (props) => {

    const icon = `wi wi-owm-day-${props.id}`;

    return(
        <div className="crd">
            <div className="crd__location">
                <h1> { props.city } </h1>
                <h2> { props.country } </h2>
            </div>
            <div className="crd__icon">
                <i className={icon}></i>
            </div>
            <div className="crd__temp">
                <h2> {props.temp}&deg;C</h2>
            </div>
            <div className="crd__condition">
                <h3>the max temp is : { props.maxTemp } &deg;C</h3>
            </div>
            <div className="crd__highLow">
                <h3>the min temp is : { props.minTemp }&deg;C</h3>
            </div>
        </div>
    )

}

export default WeatherCard;
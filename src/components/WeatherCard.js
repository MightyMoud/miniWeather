import React from 'react'
import '../card.css';
import '../css/all.min.css'
import '../css/weather-icons.min.css'
import '../css/weather-icons-wind.min.css'


const WeatherCard = ({city, country, temp, maxTemp, minTemp, id, main}) => {

    const icon = `wi ic wi-owm-day-${id}`;

    return(
        <div className="crd">
            <div className="crd__location">
                <h1> { city } </h1>
                <h2> { country } </h2>
            </div>
            <div className="crd__icon">
                <i className={icon}></i>
            </div>
            <div className="crd__temp">
                <h2> {temp.toFixed(0)} <i className='wi wi-celsius'></i></h2>
                <h3 className="crd__condition">{ main }</h3>
            </div>
            <div className="crd__highLow">
                <div className="crd__high">
                    <h3> <i className='wi wi-direction-up'></i> { maxTemp.toFixed(2) } <i className='wi wi-celsius'></i> </h3>
                    <h4 className='crd--max'>max</h4>
                </div>
                <div className="crd__low">
                    <h3> <i className='wi wi-direction-down'></i> { minTemp.toFixed(2) } <i className='wi wi-celsius'></i> </h3>
                    <h4 className='crd--min'>min</h4>
                </div>
            </div>
        </div>
    )

}

export default WeatherCard;
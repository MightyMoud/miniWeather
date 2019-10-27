import React from 'react'
import '../cardBig.css';
import '../css/all.min.css'
import '../css/weather-icons.min.css'
import '../css/weather-icons-wind.min.css'



const ForecastCard = ({city, country, temp, main}) => {
   
// const icon = `wi ic wi-owm-day-${id}`;
    var icon = null;
    switch (main) {
        case 'Clouds':
            icon = `/img/Mostly Cloudy-2x.png`;
            break;
        case 'Clear':
            icon = `/img/Mostly Sunny-2x.png`;
            break;
        case 'Haze':
            icon = `/img/Haze-2x.png`;
            break;
        case 'Hail':
            icon = `/img/Hail-2x.png`;
            break;
        case 'Fog':
            icon = `/img/Fog-2x.png`;
            break;
        case 'Tornado':
            icon = `/img/Tornado-2x.png`;
            break;
        case 'Dust':
            icon = `/img/Dust-2x.png`;
            break;
        case 'Mist':
            icon = `/img/Fog-2x.png`;
            break;
        case 'Snow':
            icon = `/img/Snow-2x.png`;
            break;
        case 'Rain':
            icon = `/img/Rain-2x.png`;
            break;
        case 'Drizzle':
            icon = `/img/Drizzle-2x.png`;
            break;
        case 'Thunderstorm':
            icon = `/img/Severe Thunderstorm-2x.png`;
            break;
        default:
            icon = `/img/Fog-2x.png`;
            break;
    }
    
    return(
        
            <div className="det__up">
                <div className="up__dta">
                    <div className="dta__icon">
                        <img src={icon} alt="Current weather icon"/>
                    </div>
                    <div className="dta__nums">
                        <h2> {temp} <i className='wi wi-celsius'></i></h2>
                        <h3 className="det__condition">{ main }</h3>
                    </div>
                </div>
                <div className="up__loc">
                    <h1> { city } </h1>
                    <h2> { country } </h2>
                </div>
            </div>
    )

}

export default ForecastCard;
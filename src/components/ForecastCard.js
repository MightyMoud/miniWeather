import React from 'react'
import '../cardBig.css';
import '../css/all.min.css'
import '../css/weather-icons.min.css'
import '../css/weather-icons-wind.min.css'
import DayForecast from './DayForecast'



const ForecastCard = ({city, country, temp, maxTemp, minTemp, id, main, forecast}) => {
    var highColor = 0;
    var lowColor = 0;
    var color = null;
    if(temp>12 && temp<40) {
        highColor = (1+(1-(temp-17)/28)*254);
        lowColor = highColor-150;
        color = `linear-gradient(0deg, rgb(255,${highColor},0),rgb(255,${lowColor},0))`; 

    } else if (temp<12) {
        highColor = (1+(1-(temp-(-20))/38)*254);
        lowColor = highColor+100;
        color = `linear-gradient(0deg, rgb(0,${lowColor},255),rgb(0,${highColor},255))`; 
    }
    



// const icon = `wi ic wi-owm-day-${id}`;
    var icon = null;
    switch (main) {
        case 'Clouds':
            icon = `./img/Mostly Cloudy-2x.png`;
            break;
        case 'Clear':
            icon = `./img/Mostly Sunny-2x.png`;
            break;
        case 'Haze':
            icon = `./img/Haze-2x.png`;
            break;
        case 'Hail':
            icon = `./img/Hail-2x.png`;
            break;
        case 'Fog':
            icon = `./img/Fog-2x.png`;
            break;
        case 'Tornado':
            icon = `./img/Tornado-2x.png`;
            break;
        case 'Dust':
            icon = `./img/Dust-2x.png`;
            break;
        case 'Mist':
            icon = `./img/Fog-2x.png`;
            break;
        case 'Snow':
            icon = `./img/Snow-2x.png`;
            break;
        case 'Rain':
            icon = `./img/Rain-2x.png`;
            break;
        case 'Drizzle':
            icon = `./img/Drizzle-2x.png`;
            break;
        case 'Thunderstorm':
            icon = `./img/Severe Thunderstorm-2x.png`;
            break;
        default:
            icon = `./img/Fog-2x.png`;
            break;
    }
    
    return(
        <div className="det" style= {{background: `${color}`}}>
            <div className="det__up">
                <div className="up__dta">
                    <div className="dta__icon">
                        <img src={icon} alt="Current weather icon"/>
                    </div>
                    <div className="dta__nums">
                        <h2> {temp} <i className='wi wi-celsius'></i></h2>
                        <h3 className="det__condition">{ main }</h3>
                    </div>
                    <div className="dta__sun">
                        <h4>Sunrise: 7:00am</h4> 
                        <h4>Sunset : 6:00pm</h4>
                    </div>
                </div>
                <div className="up__loc">
                    <h1> { city } </h1>
                    <h2> { country } </h2>
                </div>
            </div>
            <div className="det__dwn">
                <DayForecast/>
            </div>
        </div>
    )

}

export default ForecastCard;

{/* <div className="det__location">
                <h1> { city } </h1>
                <h2> { country } </h2>
            </div>
            <div className="det__icon">
                <img src={icon} alt=""/>
            </div>
            <div className="det__temp">
                <h2> {temp} <i className='wi wi-celsius'></i></h2>
                <h3 className="det__condition">{ main }</h3>
            </div>
            <div className="det__highLow">
                <div className="det__high">
                    <h3> <i className='wi wi-direction-up'></i> { maxTemp } <i className='wi wi-celsius'></i> </h3>
                    <h4 className='det--max'>max</h4>
                </div>
                <div className="det__low">
                    <h3> <i className='wi wi-direction-down'></i> { minTemp } <i className='wi wi-celsius'></i> </h3>
                    <h4 className='det--min'>min</h4>
                </div>
            </div> */}
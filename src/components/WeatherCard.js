import React from 'react'
import '../card.css';
import '../css/all.min.css'
import '../css/weather-icons.min.css'
import '../css/weather-icons-wind.min.css'

// ((1-((temp-17)/23)*254));

const WeatherCard = ({city, country, temp, maxTemp, minTemp, id, main}) => {
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
        <div className="crd" style= {{background: `${color}`}}>
            <div className="crd__location">
                <h1> { city } </h1>
                <h2> { country } </h2>
            </div>
            <div className="crd__icon">
                {/* <i className={icon}></i> */}
                <img src={icon} alt=""/>
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
            <a href='#' className='crd__more'>More <i className='wi wi-direction-right'></i></a>
        </div>
    )

}

export default WeatherCard;
import React from 'react'

const DayForecast = ({ avgTemp, main, minTemp, maxTemp,day }) =>{

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
        <div className="dwn__day">
            <div className="det__icon">
                <img src={ icon } alt={ main }/>
            </div>
            <div className="det__temp">
                <h2> { avgTemp } <i className='wi wi-celsius'></i></h2>
                <h3 className="det__condition">{ main }</h3>
            </div>
            <div className="det__highLow">
                <div className="det__high">
                    <h3> <i className='wi wi-direction-up'></i>  {maxTemp} <i className='wi wi-celsius'></i> </h3>
                    <h4 className='det--max'>max</h4>
                </div>
                <div className="det__low">
                    <h3> <i className='wi wi-direction-down'></i>  {minTemp}  <i className='wi wi-celsius'></i> </h3>
                    <h4 className='det--min'>min</h4>
                </div>
            </div>
            <h3>{ day }</h3>
        </div>
    )
}

export default DayForecast;
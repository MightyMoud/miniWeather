import React, { useEffect, useState } from "react";
import { geolocated } from "react-geolocated";
import WeatherCard from './WeatherCard'


 
const Welcome = ({ coords, isGeolocationAvailable, isGeolocationEnabled, positionError}) => {
    const [state, setState] = useState({
        city: null,
        country: null,
        temp: null,
        main: null
    });
    

    async function getWeatherForLocation (lat,lon) {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=644ba889d2629824a466b19685f307e0`);
        let jsonRes = await res.json();
        setState({
            city: jsonRes.name,
            country: jsonRes.sys.country,
            temp: jsonRes.main.temp,
            main: jsonRes.weather[0].main
        })
    }


    useEffect(()=>{
        try {
            getWeatherForLocation(coords.latitude, coords.longitude);
        } catch (error) {
            console.error(error)
        }
    },[coords])

    return !isGeolocationAvailable ? (
                <div>Your browser does not support Geolocation</div>
            ) : !isGeolocationEnabled ? (
                <div>Geolocation is not enabled</div>
            ) : coords && state.temp!== null ? (
                <>
                    <WeatherCard 
                    temp ={ state.temp } 
                    city = { state.city }
                    country = { state.country }
                    main = { state.main }
                    />
                </>
            ) : (
                <div>Getting the location data&hellip; </div>
            );
}
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Welcome);
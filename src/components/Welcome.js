/**@jsx jsx */
import { useEffect, useState } from "react";
import { geolocated } from "react-geolocated";
import WeatherCard from './WeatherCard'
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';


 
const Welcome = ({ coords, isGeolocationAvailable, isGeolocationEnabled, positionError}) => {
    const [state, setState] = useState({
        city: null,
        country: null,
        temp: null,
        main: null,
        forecast: {
            minTemp: null,
            masTemp: null,
            main: null
        }
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
            if (coords !== null ) 
                {getWeatherForLocation(coords.latitude === null ? null : coords.latitude, coords.longitude === null ? null :  coords.longitude);}            
        } catch (error) {
            console.error(error)
        }
    },[coords, state.city])


    return !isGeolocationAvailable ? (
                <Container>
                    <img  src="./img/user.svg" alt="User login" css={{width: '30%', maxWidth: '100px'}} />
                    <h1>G'day Mate!</h1>
                    <div>Your browser does not support Geolocation</div>
                </Container>
            ) : !isGeolocationEnabled ? (
                <Container>
                    <img  src="./img/user.svg" alt="User login" css={{width: '30', maxWidth: '100px'}} />
                    <h1>G'day Mate!</h1>
                    <div>Geolocation is not enabled</div>
                </Container>
            ) : coords && state.temp!== null ? (
                <Container >
                        <img  src="./img/user.svg" alt="User login" css={{width: '30%', maxWidth: '100px'}} />
                        <h1>G'day Mate!</h1>
                        <WeatherCard 
                        temp ={ state.temp } 
                        city = { state.city }
                        country = { state.country }
                        main = { state.main }
                        id={true}
                        />
                        <h3> It's a {state.main} {state.temp > 35 ? 'blazing hot' : state.temp > 27 ? 'steaming hot' : state.temp > 20 ? 'hot' : state.temp > 17 ? 'warm' : state.temp > 10 ? 'chilly' : state.temp > 5 ? 'cool' : state.temp > 0 ? 'cold' : 'freeazing' } day in { state.city } </h3>
                </Container>
            ) : (
                <Container>
                    <img  src="./img/user.svg" alt="User login" css={{width: '30%', maxWidth: '100px'}} />
                    <h1>G'day Mate!</h1>
                    <div className='loading'>     
                    <i className='fas fa-spinner fa-4x spinner '></i>
                    <h4>Getting the location data </h4>
                   </div>
                </Container>
            );
}
 
export default geolocated ({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
}) (Welcome);


const Container = styled.div`
    color: var(--text-color);
    width: 50vw;
    max-width: 450px;
    height: 40vh;
    text-align: center;
    background: var(--bg-light);
    margin: 10px auto;
    padding: 15px 15px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 20px var(--shadow);
    justify-self: flex-end;
    @media screen and (max-width:765px) {
        width: 80vw;
    }
`;

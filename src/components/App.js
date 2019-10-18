import React, { useState,useEffect,useReducer } from 'react';
import '../css/all.min.css'
import '../App.css';
import Search from './Search';
import WeatherCard from './WeatherCard';
import Error from'./Error'
import Welcome from './Welcome'



// const demo = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=644ba889d2629824a466b19685f307e0';

const initialState = {
  temp: 0,
  loading: null,
  errorMessage: 0,
  city: null,
  cod:0
};


const reducer = (state, action)=> {
  switch (action.type) {
    case 'SEARCH_PROGRESS':
      return {
        ...state,
        loading: true
      }
      case 'SEARCH_SUCCESS':
      return {
        ...state,
        temp: action.payload,
        loading: false,
        errorMessage: action.error,
        city: action.city,
        cod: action.cod
      }
      case 'SEARCH_FAIL':
      return {
        ...state,
        errorMessage: action.error,
        loading: action.loading,
        cod: action.cod
      }
      default: 
      return state;
  } 
}


const App = ()=> {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const { temp, loading, errorMessage, cod, city, country,  } = state;



  const getWeather = (city) => {
    dispatch({
      type:'SEARCH_PROGRESS'
    })
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=644ba889d2629824a466b19685f307e0`)
    .then(response => response.json())
    .then(jsonResponse => {
      if(jsonResponse.cod==200) {
        dispatch({
          type: 'SEARCH_SUCCESS',
          payload: jsonResponse.main.temp,
          cod: jsonResponse.cod,
          city: jsonResponse.name
        })
        console.log(temp);
      } else if(jsonResponse.cod != 200) {
        console.log(jsonResponse.cod);
        dispatch({
          type: 'SEARCH_FAIL',
          loading: false,
          error: jsonResponse.message,
          cod: jsonResponse.cod
        })
        console.log(cod);
      }
        
    })
  }


  return(
    <div className="container">
      <Search getWeather = { getWeather } />
     {
       loading === null && cod === 0 ?
       <Welcome />
       :
       loading === true ?
       <div>     
        <i className='fas fa-spinner fa-4x spinner '></i>
       </div>
       :
       temp !== 0 && cod==200 ?
       <div>
        <WeatherCard 
          temp ={ temp } 
          city = { city }
        />
       </div>
       :
       loading === false ?
       <Error cod = { cod } errorMessage= { errorMessage } />
       :
       <h1>dunno</h1>
     }
    </div>
  )
}

export default App;


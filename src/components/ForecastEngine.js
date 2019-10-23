
import React, { useReducer } from 'react';
import '../css/all.min.css'
import '../css/weather-icons-wind.min.css'
import '../App.css';
import Search from './Search';
import WeatherCard from './WeatherCard';
import Error from'./Error';

// this is the initial state of all the variables we need/expect to get from the API plus a couple others to handle errors
const initialState = {
  temp: 0,
  loading: null,
  errorMessage: 0,
  city: null,
  main: {
    averageTemp: null,
    minTemp: null,
    maxTemp: null
  },
  weather: {
    id: null,
    main : null,
    description: null
  },
  cod:0
};

// The reducer is the function that will shift the state based on the dispatch value. 
// here it's unloading the values of dispatch onto the state variables

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
        main : {
          averageTemp: action.averageTemp,
          minTemp: action.minTemp,
          maxTemp: action.maxTemp,
        },
        weather : {
          id: action.id,
          main: action.main,
          description : action.description
        },
        country: action.country,
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

// base component
const WeatherEngine = ()=> {
  // basic declarations of state and the reducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  const { temp, loading, errorMessage, cod, city, country, main, weather } = state;

  // definition of the function that gets the API results and assignes it to dispatch
  // this happens once the search button is pressed

  const getWeather = (city ) => {
    // once search is pressed, send search progress to display loading signal
    dispatch({
      type:'SEARCH_PROGRESS'
    })
    // fetch the results from API the unload by dispatch
    // cod is the code returned form API, 200 is success otherwise it's faliure
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=644ba889d2629824a466b19685f307e0`)
    .then(response => response.json())
    .then(jsonResponse => {
      if(jsonResponse.cod===200) {
        console.log(jsonResponse.weather[0].icon);
        dispatch({
          type: 'SEARCH_SUCCESS',
          payload: jsonResponse.main.temp,
          cod: jsonResponse.cod,
          city: jsonResponse.name,
          averageTemp: jsonResponse.main.temp,
          minTemp: jsonResponse.main.temp_min,
          maxTemp: jsonResponse.main.temp_max,
          country: jsonResponse.sys.country,
          id: jsonResponse.weather[0].id,
          icon: jsonResponse.weather[0].icon,
          main: jsonResponse.weather[0].main,
          description: jsonResponse.weather[0].description
        })
      } else if(jsonResponse.cod !== 200) {
        dispatch({
          type: 'SEARCH_FAIL',
          loading: false,
          error: jsonResponse.message,
          cod: jsonResponse.cod
        })
      }
        
    })
  }

  // conditional rendering based on state values
  return(
    <div>
     {
      //  render welcome screen to show the search component initially
       loading === null && cod === 0 ? //   matching the initial state
        <div className='welcome'>
          <Search getWeather = { getWeather } />
        </div>
       :
       loading === true ? // if loading is true - search button is pressed - show a loading icon
       <div className='loading'>     
        <i className='fas fa-spinner fa-4x spinner '></i>
       </div>
       :
       temp !== 0 && cod===200 ? // if temp is updated and cod is 200 as in successful API response
       <div>
        <WeatherCard 
          maxTemp = { main.maxTemp }
          minTemp = { main.minTemp }
          temp ={ main.averageTemp } 
          city = { city }
          country = { country }
          main = { weather.main }
          id = { weather.id }
          // forecast = {  }
        />
       </div>
       :
       loading === false ? // if loading is then error happend
       <Error cod = { cod } errorMessage= { errorMessage } />
       :
       <h1>dunno</h1> // we never get to this point so yeah dunno!
     }
     </div>
  )
}

export default WeatherEngine;


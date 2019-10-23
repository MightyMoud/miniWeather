import React, { useState,useEffect,useReducer } from 'react';
import '../css/all.min.css'
import '../css/weather-icons.min.css'
import '../css/weather-icons-wind.min.css'
import '../App.css';
import Header from './Header';
import WeatherEngine from './WeatherEngine';
import Button from '@material-ui/core/Button';



const App = ()=> {
  
  const [count , setCount] = useState(1);

  const show = () => {
    switch (count) {
      case 2:
          return (
            <div className='container' >
                <WeatherEngine/>
                <WeatherEngine/>
            </div>
          );
      case 3:
          return (
            <div className='container'>
                <WeatherEngine/>
                <WeatherEngine/>
                <WeatherEngine/>
            </div>
          );
      case 4:
          return (
            <div className='container'>
                <WeatherEngine/>
                <WeatherEngine/>
                <WeatherEngine/>
                <WeatherEngine/>
            </div>
          );
      default:
        return (
          <div className='container'>
              <WeatherEngine/>
          </div>
        );
    }
 };

  const handleNewCity = () => {
    setCount(count+1);
  };

  var visibility= null;
  if(count<=3) {
    visibility= `initial`;
  } else {
    visibility = 'none';
  } 

  return(
    <div className="app">
    <Header/>
      {
        count < 5 ?
          show()
      :
        <div>
          You'd never get here! :P
        </div>
      }
      <div className="btnCon">
        <Button 
          style={{display: `${visibility}`}} 
          onClick={handleNewCity}
          type="submit" 
          value="Add a new City"
          variant = 'contained'
          color = 'primary'
        >
          Add a new City
        </Button>
      </div>
    </div>
  )
}

export default App;


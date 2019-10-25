import React, { useState } from 'react';
import '../css/all.min.css'
import '../css/weather-icons.min.css'
import '../css/weather-icons-wind.min.css'
import '../App.css';
import Header from './Header';
import WeatherEngine from './WeatherEngine';
import ForecastEngine from './ForecastEngine';
import ForecastCard from './ForecastCard';
import Button from '@material-ui/core/Button';



// it was quite challenging to make multiple instances of the WeatherEnging component using a button
// I think my implentation is really bad! but yeah it works!
// Set a count state and make a function that shows different numbers of counts based on the count value

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
            {/* <ForecastEngine 
              city = 'Lodnon'
              temp = '15'
              country = 'UK'
              main = 'CLOUDS'
            /> */}
          </div>
        );
    }
 };

//  when you click on the button add one to count value by using setCount
  const handleNewCity = () => {
    setCount(count+1);
  };

// I want to limit to 4 cards only for looks
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
        // another conditional rednering - as long as count is less than 5 then render Show() function
        count < 5 ?
          show()
      : // count will never be more than 5 so yeah! 
        <div> 
          You'd never get here! :P
        </div>
      }
      {/* this is the button to add a new city  */}
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


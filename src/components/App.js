import React, { useState } from 'react';
import '../css/all.min.css'
import '../css/weather-icons.min.css'
import '../css/weather-icons-wind.min.css'
import '../App.css';
import Header from './Header';
import WeatherEngine from './WeatherEngine';
import Button from '@material-ui/core/Button';
import Welcome from './Welcome'



// render multiple instances of the Weatherengine based on count state

const App = ()=> {
  
  const [count , setCount] = useState(1);

  const show = () => {
    let engines = [];
    for (let i=0; i<count; i+=1) {
      engines.push(<WeatherEngine key={i}/>);
    }
    return (
      <div className="container">
        {engines}
      </div>
    )

 };

//  when you click on the button add one to count value by using setCount
  const handleNewCity = () => {
    setCount(count+1);
  };

// I want to limit to 3 cards only for looks
  var visibility= null;
  count<3 ? visibility = 'initial' : visibility = 'none';

  return(
    <div className="app">
    <Header/>
    <Welcome/>

      {show()}
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
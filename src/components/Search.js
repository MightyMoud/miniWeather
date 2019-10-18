import React , {useState} from 'react'
import '../App.css';



const Search = (props) => {

    const[city,setCity] = useState('');

    const handleUserInput = (e)=> {
        setCity(e.target.value);
    }
    const resetInputFiled = (e)=> {
        setCity("");
    }
    const searchWeather = (e)=>{
        e.preventDefault();
        props.getWeather(city);
        resetInputFiled();
    }

    return (
    <div className="searchForm">
        <form  className="search">
        <input
            placeholder="Enter your city"
            value={city}
            onChange={handleUserInput}
            type="text"
        />
        <input onClick={searchWeather} type="submit" value="SEARCH" />
        </form>
    </div>
    );
}

export default Search;
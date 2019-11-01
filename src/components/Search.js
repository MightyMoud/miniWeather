import React , {useState} from 'react'
import '../App.css';

const Search = ({ getWeather }) => {
  
  const[city,setCity] = useState('');
  const[fieldClass, setFieldClass] = useState('')
  const[searchClass, setSearchClass] = useState('');
  const[searchIconClass, setSearchIconClass] = useState('');

  const handleUserInput = (e)=> {
      setCity(e.target.value);
  }
  const resetInputFiled = (e)=> {
      setCity("");
  }
  const searchWeather = (e)=>{
      e.preventDefault();
      getWeather(city);
      resetInputFiled();
  }

  const changeClass = () => {
    setFieldClass('fieldOpen');
    setSearchClass('searchOpen')
    setSearchIconClass('searchIconOpen')
  }
  

  return (
    <>
      <form  className={`searchClosed ${searchClass}`}>
        <img src='./img/search.svg' className={`searchIconClosed ${searchIconClass}`} onMouseEnter={ changeClass }></img>
      <input
        className= {`fieldClosed ${fieldClass}`}
        placeholder = 'Search for your city'
        value={city}
        onChange={handleUserInput}
        onSubmit= {searchWeather}
        autoFocus = 'true'
        />
      <input
        className = 'searchBtn'
        onClick={searchWeather} 
        type="submit" 
        value="SEARCH"
      />
      </form>
    </>
  );
}


export default Search;
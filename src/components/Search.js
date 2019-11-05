import React , {useState} from 'react'
import '../App.css';
import Autosuggest from 'react-autosuggest';
import { citiesList } from '../citiesList.js'




const Search = ({ getWeather }) => {
  
  const[value, setValue] = useState('');
  const[suggestions, setSuggestions] = useState([]);
  const[city,setCity] = useState('');
  const[fieldClass, setFieldClass] = useState('')
  const[searchClass, setSearchClass] = useState('');
  const[searchIconClass, setSearchIconClass] = useState('');



  // Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;
  return inputLength === 0 ? [] : citiesList.filter(city =>
    city.city.toLowerCase().slice(0, inputLength) === inputValue && count ++< 5
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
function getSuggestionValue (suggestion) {
  return `${suggestion.city},${suggestion.country}`;
};

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div className='slideIn'>
    {suggestion.city},{suggestion.country}
  </div>
);


 const onChange = (e, { newValue }) => {
    setValue(newValue);
    setCity(newValue);
  };

   // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

   // Autosuggest will pass through all these props to the input.
   const inputProps = {
    placeholder: 'Search for a city',
    value,
    onChange: onChange
  };
  

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
  
  const autosuggestStyle = {
    'input' : `fieldClosed ${fieldClass}`,
    'suggestionsContainer' : 'suggestionCon',
    'suggestionsList' : 'suggestionList',
    'containerOpen' : 'suggestionConOpen',
    'suggestionFirst' : 'firstSuggestion',
    'suggestionHighlighted' : 'suggestionHighlighted'
  };

  return (
    <>
      <form  className={`searchClosed ${searchClass}`}>
        <img src='./img/search.svg' className={`searchIconClosed ${searchIconClass}`} onMouseEnter={ changeClass }></img>
      <input
        className = 'searchBtn'
        onClick={searchWeather} 
        type="submit" 
        value="SEARCH"
      />
       <Autosuggest
        theme = {autosuggestStyle}
        highlightFirstSuggestion = {true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSubmit= {searchWeather}
      />
      </form>
    </>
  );
}


export default Search;
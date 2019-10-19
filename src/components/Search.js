import React , {useState} from 'react'
import '../App.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css';




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
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Enter your city..."
            value={city}
            onChange={handleUserInput}
            aria-label="City search name"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <Button variant="primary" onClick={searchWeather} >Search</Button>
            </InputGroup.Append>
        </InputGroup>
    </div>
    );
}

export default Search;
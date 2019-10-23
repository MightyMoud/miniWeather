import React , {useState} from 'react'
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#003EFF',
        sub: '#00FF9B'
    },
    secondary: {
      main: '#f44336',
    },
  },
});


const styles = {
    root: {
    background: "linear-gradient(45deg, #6d4cc8 30%, #432c85 90%)"
    },
    input: {
      color: "white"
    }
  };


const Search = (props) => {
    const { classes } = props;

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
       <ThemeProvider theme={theme}>
        <form  className="search">
        <TextField
            id="outlined-dense"
            label="Enter your city"
            margin="dense"
            variant="filled"
            value={city}
            onChange={handleUserInput}
            className={classes.root}
            InputProps={{
                className: classes.input
            }}
            InputLabelProps={{
              className: classes.input
            }}
         />
     
        <Button 
            onClick={searchWeather} 
            type="submit" 
            value="SEARCH"
            variant = 'contained'
            className = 'fieled'
            color = 'primary'
        >SEARCH
        </Button>
        </form>
        </ThemeProvider>
    </div>
    );
}

Search.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(Search);
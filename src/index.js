import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Router} from '@reach/router'
import ForecastEngine from './components/ForecastEngine';

ReactDOM.render( 
    <Router>
        < App path='/' /> 
        <ForecastEngine path='/details/:city/:country/:temp/:main' />
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
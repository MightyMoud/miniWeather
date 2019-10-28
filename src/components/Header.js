import React from 'react'
import { Link } from "@reach/router";
import '../App.css';

const Header = () => {

    return (
        <div className="toBr">
            <div className='toBr__menu'>
                <i className='fas fa-bars fa-2x'></i>
            </div>
            <div className='toBr__logo'>
                <Link className='toBr__name' to = '/'>
                miniWeather
                </Link>
            </div>
                <Link className='toBr__text' to='/'>
                today
                </Link>
        </div>
    )
}
export default Header;
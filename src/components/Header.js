import React from 'react'
import { Link } from "@reach/router";
import '../App.css';

const Header = () => {

    return (
        <div className="toBr">
                <Link className='toBr__text' to='/'>
                WeatherNow
                </Link>
        </div>
    )
}
export default Header;
import React from 'react'

const Header = () => {

    return (
        <div className="toBr">
            <div className='toBr__menu'>
                <i className='fas fa-bars fa-2x'></i>
            </div>
            <div className='toBr__logo'>
                <h1 className='toBr__name'>miniWeather</h1>
            </div>
            <div className='toBr__text'>
                <h1>today</h1>
            </div>
        </div>
    )
}
export default Header;
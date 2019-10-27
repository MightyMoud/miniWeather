import React from 'react'
import '../App.css';




const Error = (props) => {
    return (
        <div className='error'>
         <h4>Some error happened!</h4>
         <h5> Error code is: { props.cod } </h5>
         <h5> The accompanying error message is:  <b>{props.errorMessage}</b> </h5>
        </div>
    )
}

export default Error;
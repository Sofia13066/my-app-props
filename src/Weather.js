import React from 'react';

const Weather = (props) =>{

    if (props && props.res) {
    return(
        <div>
            <p id="location">Location: {props.res.location}</p>
            <p id ="temp">Temp: {Math.floor(props.res.temp - 273.15, 1)}</p>
            <p id="pressure">Pressure: {props.res.pressure}</p>
            <p id="sunset">Sunset: {props.res.sunset}</p>
        </div>
    )
    }
}

export default Weather;
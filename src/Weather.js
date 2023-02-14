import React from 'react';

const Weather = (props) =>{

    if (props && props.res) {
    return(
        <div>
            <p id="location">Location: {props.location}</p>
            <p id ="temp">Temp: {Math.floor(props.temp - 273.15, 1)}</p>
            <p id="pressure">Pressure: {props.pressure}</p>
            <p id="sunset">Sunset: {props.sunset}</p>
        </div>
    )
    }
}

export default Weather;
import React from 'react';

const Form = (props) => {
    let city = "";
    let res;
    
    
    function createWeatherToAdd (location, temp, pressure, sunset) {
        return{
        location: location,
        temp: temp,
        pressure: pressure,
        sunset: sunset,
        }
    };
    
    

    async function addWeather(city) {
        
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6716a862970abdf2fcfda82986d1fc0f`)
            .then((response) => response.json())
            .then((data) => { 
                let location = data.name;
                let temp = data.main.temp;
                let pressure = data.main.pressure;
                let sunset = data.sys.sunset;

                res = createWeatherToAdd(location, temp, pressure, sunset);
                console.log(res.location);

            })
            .catch((err) => {
                console.log(err);
            });
    }


    const getCity = async e => {
        e.preventDefault();
        city = e.currentTarget.city.value;
        console.log(city);
        await addWeather(city);
        console.log(res);
        // props = res.value;
        props.setRes(res); //!!!
        
        }


    return ( 
        <form onSubmit={getCity}>
            <input type='text' name='city' placeholder='City'/>
            <button type = "submit" > Get weather </button> 
        </form >
    )
}

export default Form;
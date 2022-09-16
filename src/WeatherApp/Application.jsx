import React, { useState } from "react";
import { fetchWeather } from './api/fetchWeather';

const Application = () => {


    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});


    const search = async (evt) => {
        if(evt.key === 'Enter') {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery()
        }
    }


    return(
        <div className="container main-container">
            <div className="search">
                <input className="search-input"
                 type="text"
                 placeholder="search..."
                 value={query}
                 onChange={(evt) => setQuery(evt.target.value)}
                 onKeyPress={search} />
            </div>

        {weather.main &&(
           <div className="city">
           <div className="info">
               <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
           </div>
           <div className="details">
               <h2 className="city-name">
                   <span>{weather.name}</span>
                   <sup>{weather.sys.country}</sup>
               </h2>
               <div className="city-temp">
                   {Math.round(weather.main.temp)}
                   <sup>&deg;C</sup>
                   <p>{weather.weather[0].description}</p>
               </div>
           </div>
       </div>
        )} 
        </div>
    );
};

export default Application;
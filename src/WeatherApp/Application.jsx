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

            
        </div>
    );
}

export default Application;
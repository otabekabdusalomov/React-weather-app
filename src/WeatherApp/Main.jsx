import React, { Component } from 'react';
import './style.css';
import WeatherNav from './WeatherNav';
import Application from './Application';
import fetchWeather from './api/fetchWeather';


class Main extends Component {
    render() {
        return (
            <div>
             <WeatherNav />
             <Application />
             <fetchWeather />                
            </div>
        );
    }
}

export default Main;
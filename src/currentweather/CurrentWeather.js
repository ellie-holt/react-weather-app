import React from "react";
import CurrentTemperature from "./currenttemperature/CurrentTemperature";
import WeatherTable from "./weathertable/WeatherTable";

import "./CurrentWeather.scss";

export default function CurrentWeather({ weatherData }) {
  console.log(weatherData);
  console.log(weatherData.temperature);
  return (
    <div className="CurrentWeather">
      <div className="cityInfo">
        <h2 className="cityName">{weatherData.city}</h2>
        <h3 className="currentDate">Tuesday 1st November</h3>
        <h2 className="currentTime">15:52</h2>
      </div>
      <div className="cityWeather">
        <div className="weatherMain">
          <h2 className="description">{weatherData.description}</h2>
          <div className="icon">☀︎</div>
        </div>
        <CurrentTemperature temperatureData={weatherData.temperature} />
        <WeatherTable weatherData={weatherData} />
      </div>
    </div>
  );
}

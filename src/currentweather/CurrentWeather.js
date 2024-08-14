import React from "react";

import CityInfo from "./cityinfo/CityInfo";
import WeatherMain from "./weathermain/WeatherMain";
import CurrentTemperature from "./currenttemperature/CurrentTemperature";
import WeatherTable from "./weathertable/WeatherTable";

import "./CurrentWeather.scss";

export default function CurrentWeather({ weatherData }) {
  console.log(weatherData);
  console.log(weatherData.temperature);
  return (
    <div className="CurrentWeather card">
      <CityInfo weatherData={weatherData} />
      <div className="cityWeather">
        <WeatherMain weatherData={weatherData} />
        <CurrentTemperature temperatureData={weatherData.temperature} />
        <WeatherTable weatherData={weatherData} />
      </div>
    </div>
  );
}

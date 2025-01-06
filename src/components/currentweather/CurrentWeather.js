import React from "react";

import WeatherMain from "./WeatherMain";
import WeatherTable from "./WeatherTable";

export default function CurrentWeather({ weatherData }) {
  console.log(weatherData);
  console.log(weatherData.temperature);
  return (
    <div className="">
      <WeatherMain weatherData={weatherData} />
      <WeatherTable weatherData={weatherData} />
    </div>
  );
}

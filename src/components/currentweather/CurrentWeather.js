import React from "react";

import WeatherMain from "./WeatherMain";
import WeatherTable from "./WeatherTable";

export default function CurrentWeather({ weatherData }) {
  console.log(weatherData);
  console.log(weatherData.temperature);
  return (
    <article className="currentWeather">
      <WeatherMain weatherData={weatherData} />
      <WeatherTable weatherData={weatherData} />
    </article>
  );
}

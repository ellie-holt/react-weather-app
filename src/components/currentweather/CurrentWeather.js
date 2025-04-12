import React from "react";

import WeatherMain from "./WeatherMain";
import WeatherTable from "./WeatherTable";

export default function CurrentWeather({ weatherData, unit }) {
  console.log(weatherData);
  console.log(weatherData.temperature);
  return (
    <article className="items-center justify-center currentWeather 2xl:flex 2xl:gap-4">
      <WeatherMain weatherData={weatherData} unit={unit} />
      <WeatherTable weatherData={weatherData} unit={unit} />
    </article>
  );
}

import React from "react";
import loadingOpacity from "../../utils/loadingOpacity";

import WeatherMain from "./WeatherMain";
import WeatherTable from "./WeatherTable";

export default function CurrentWeather({ weatherState, unit }) {
  const { loading } = weatherState;
  return (
    <article
      className={`${loadingOpacity(
        loading
      )} items-center justify-center currentWeather 2xl:flex 2xl:gap-4`}
    >
      <WeatherMain weatherData={weatherState.data} unit={unit} />
      <WeatherTable weatherData={weatherState.data} unit={unit} />
    </article>
  );
}

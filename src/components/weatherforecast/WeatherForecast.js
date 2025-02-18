import React from "react";

import DayCard from "./DayCard";

import SetTheme from "../../SetTheme";

export default function WeatherForecast({ weatherData }) {
  let themeClass = SetTheme({ weatherData });
  return (
    <article
      className={`${themeClass} card weatherForecast mx-4 mt-2 px-2 pt-1 pb-3 flex overflow-x-scroll scroll-smooth snap-x snap-mandatory`}
    >
      <DayCard weatherData={weatherData} />
      <DayCard weatherData={weatherData} />
      <DayCard weatherData={weatherData} />
      <DayCard weatherData={weatherData} />
      <DayCard weatherData={weatherData} />
      <DayCard weatherData={weatherData} />
    </article>
  );
}

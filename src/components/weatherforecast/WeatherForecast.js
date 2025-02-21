import React from "react";

import DayCard from "./DayCard";

import SetTheme from "../../SetTheme";

export default function WeatherForecast({ weatherData, forecastData, unit }) {
  let themeClass = SetTheme({ weatherData });

  if (forecastData.ready) {
    return (
      <article
        className={`${themeClass} card weatherForecast mx-5 mt-2 px-2 pt-1 pb-3 flex overflow-x-scroll scroll-smooth snap-x snap-mandatory`}
      >
        {forecastData.forecast.map(
          (data, index) =>
            index > 0 && (
              <DayCard key={index} dailyForecast={data} unit={unit} />
            )
        )}
      </article>
    );
  } else {
    return "Loading";
  }
}

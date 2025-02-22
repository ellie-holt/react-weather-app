import React from "react";

import DayCard from "./DayCard";

import SetTheme from "../../SetTheme";

export default function WeatherForecast({ weatherData, forecastData, unit }) {
  let themeClass = SetTheme({ weatherData });

  if (forecastData.ready) {
    return (
      <article
        className={`${themeClass} card weatherForecast mx-5 mt-2 px-2 pt-1 pb-3 flex lg:max-h-[500px] lg:flex-col overflow-x-scroll lg:overflow-x-hidden lg:overflow-y-auto scroll-smooth snap-x lg:snap-y snap-mandatory`}
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

import React from "react";

import DayCard from "./DayCard";

import SetTheme from "../../SetTheme";

export default function WeatherForecast({ weatherData, forecastData, unit }) {
  let themeClass = SetTheme({ weatherData });

  if (forecastData.ready) {
    return (
      <article
        className={`${themeClass} card weatherForecast mb-4 mx-5 sm:mx-14 mlg:mx-2 lg:mx-8 mt-2 px-2 pt-1 pb-3 flex mlg:max-h-[500px] mlg:flex-col overflow-x-scroll mlg:overflow-x-hidden mlg:overflow-y-auto scroll-smooth snap-x mlg:snap-y snap-mandatory`}
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

import React from "react";

import DayCard from "./DayCard";

import SetTheme from "../../utils/SetTheme";
import loadingOpacity from "../../utils/loadingOpacity";

export default function WeatherForecast({ weatherState, forecastState, unit }) {
  let themeClass = SetTheme(weatherState.data);
  const { data, loading, error } = forecastState;

  // if (forecastState.loading) return "Loading forecast...";
  // if (forecastState.error) return `Error: ${forecastState.error}`;
  if (!data) return "No forecast data available.";

  return (
    <article
      className={`${themeClass} ${loadingOpacity(
        loading
      )} card weatherForecast mb-4 mx-5 xs:mx-7 xss:mx-10 sm:mx-14 mlg:mx-2 lg:mx-8 2xl:mx-4 mt-2 px-2 pt-1 pb-3 2xl:pb-0 flex mlg:max-h-[500px] 2xl:h-[480px] mlg:min-w-[21.5rem] 2xl:min-w-[21rem] mlg:flex-col overflow-x-scroll mlg:overflow-x-hidden mlg:overflow-y-auto scroll-smooth snap-x mlg:snap-y snap-mandatory styled-scrollbar`}
    >
      {data.map(
        (day, index) => index > 0 && <DayCard key={index} dailyForecast={day} unit={unit} />
      )}
    </article>
  );
}

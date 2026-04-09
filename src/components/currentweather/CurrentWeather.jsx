import loadingOpacity from "../../utils/loadingOpacity";

import WeatherMain from "./WeatherMain";
import WeatherTable from "./WeatherTable";

export default function CurrentWeather({ weatherState, unit }) {
  const { loading } = weatherState;
  const sectionStateClass = loadingOpacity(loading);

  return (
    <>
      <h2 id="current-weather-heading" className="sr-only">
        Current weather
      </h2>
      <WeatherMain
        weatherData={weatherState.data}
        unit={unit}
        className={sectionStateClass}
        ariaLabelledBy="current-weather-heading"
      />
      <WeatherTable
        weatherData={weatherState.data}
        unit={unit}
        className={`${sectionStateClass}`}
        ariaLabelledBy="current-weather-heading"
      />
    </>
  );
}

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloudSunRain,
  faCloudMoonRain,
  faCloudShowersHeavy,
  faSnowflake,
  faCloudBolt,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherMain({ weatherData }) {
  let iconType = "";
  switch (weatherData.icon) {
    case "01d":
      iconType = faSun;
      break;
    case "01n":
      iconType = faMoon;
      break;
    case "02d":
      iconType = faCloudSun;
      break;
    case "02n":
      iconType = faCloudMoon;
      break;
    case "03d":
      iconType = faCloud;
      break;
    case "03n":
      iconType = faCloud;
      break;
    case "04d":
      iconType = faCloudSun;
      break;
    case "04n":
      iconType = faCloudSun;
      break;
    case "09d":
      iconType = faCloudSunRain;
      break;
    case "09n":
      iconType = faCloudMoonRain;
      break;
    case "10d":
      iconType = faCloudShowersHeavy;
      break;
    case "10n":
      iconType = faCloudShowersHeavy;
      break;
    case "11d":
      iconType = faCloudBolt;
      break;
    case "11n":
      iconType = faCloudBolt;
      break;
    case "13d":
      iconType = faSnowflake;
      break;
    case "13n":
      iconType = faSnowflake;
      break;
    case "50d":
      iconType = faSmog;
      break;
    case "50n":
      iconType = faSmog;
      break;
    default:
      iconType = faCloudSun;
  }
  return (
    <div>
      <h1 className="text-xl leading-tight">
        {Math.round(weatherData.temperature.current)}
        <span>°C</span>
      </h1>
      <h2 className="italic text-md leading-tight">
        {weatherData.description.charAt(0).toUpperCase() +
          weatherData.description.slice(1)}
      </h2>
      <div className="text-xl text-[#00000022] leading-tight">
        <FontAwesomeIcon icon={iconType} />
      </div>
    </div>
  );
}

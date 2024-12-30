import React from "react";
import icons from "../../img/icons";

export default function WeatherMain({ weatherData }) {
  let iconVariant = "";

  switch (weatherData.icon) {
    case "01d":
      iconVariant = "clearday";
      break;
    case "01n":
      iconVariant = "clearnight";
      break;
    case "02d":
      iconVariant = "cloudyday";
      break;
    case "02n":
      iconVariant = "cloudynight";
      break;
    case "03d":
      iconVariant = "cloudyday";
      break;
    case "03n":
      iconVariant = "cloudynight";
      break;
    case "04d":
      iconVariant = "cloudy";
      break;
    case "04n":
      iconVariant = "cloudy";
      break;
    case "09d":
      iconVariant = "rainyday";
      break;
    case "09n":
      iconVariant = "rainynight";
      break;
    case "10d":
      iconVariant = "rainyday";
      break;
    case "10n":
      iconVariant = "rainynight";
      break;
    case "11d":
      iconVariant = "stormy";
      break;
    case "11n":
      iconVariant = "stormy";
      break;
    case "13d":
      iconVariant = "snowyday";
      break;
    case "13n":
      iconVariant = "snowynight";
      break;
    case "50d":
      iconVariant = "misty";
      break;
    case "50n":
      iconVariant = "misty";
      break;
    default:
      iconVariant = "cloudyday";
  }

  let icon = icons[iconVariant];

  console.log(icons.cloudy);

  console.log(iconVariant);
  console.log(icon);
  return (
    <div className="flex flex-col justify-center px-4">
      <h1 className="text-[4rem] leading-tight">
        {Math.round(weatherData.temperature.current)}
        <span>°C</span>
      </h1>
      <h2 className="italic text-xl leading-snug">
        {weatherData.description.charAt(0).toUpperCase() +
          weatherData.description.slice(1)}
      </h2>
      <div className="self-end">
        <img src={icon} alt="" className="w-40" />
      </div>
    </div>
  );
}

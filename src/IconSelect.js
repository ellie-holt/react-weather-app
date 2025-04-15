export default function IconSelect({ weatherData, dailyForecast }) {
  let iconVariant = "";

  if (dailyForecast) {
    weatherData = dailyForecast.condition;
  }

  switch (weatherData.icon) {
    case "01d":
    case "clear-sky-day":
      iconVariant = "clearday";
      break;
    case "01n":
    case "clear-sky-night":
      iconVariant = "clearnight";
      break;
    case "02d":
    case "few-clouds-day":
      iconVariant = "cloudyday";
      break;
    case "02n":
    case "few-clouds-night":
      iconVariant = "cloudynight";
      break;
    case "03d":
    case "scattered-clouds-day":
      iconVariant = "cloudyday";
      break;
    case "03n":
    case "scattered-clouds-night":
      iconVariant = "cloudynight";
      break;
    case "04d":
    case "broken-clouds-day":
      iconVariant = "overcast";
      break;
    case "04n":
    case "broken-clouds-night":
      iconVariant = "overcast";
      break;
    case "09d":
    case "shower-rain-day":
      iconVariant = "showerday";
      break;
    case "09n":
    case "shower-rain-night":
      iconVariant = "showernight";
      break;
    case "10d":
    case "rain-day":
      iconVariant = "rain";
      break;
    case "10n":
    case "rain-night":
      iconVariant = "rain";
      break;
    case "11d":
    case "thunderstorm-day":
      iconVariant = "thunderstorm";
      break;
    case "11n":
    case "thunderstorm-night":
      iconVariant = "thunderstorm";
      break;
    case "13d":
    case "snow-day":
      iconVariant = "snow";
      break;
    case "13n":
    case "snow-night":
      iconVariant = "snow";
      break;
    case "50d":
    case "mist-day":
      iconVariant = "mist";
      break;
    case "50n":
    case "mist-night":
      iconVariant = "mist";
      break;
    default:
      iconVariant = "cloudyday";
  }
  return iconVariant;
}

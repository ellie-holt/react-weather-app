export default function SetTheme(weatherData) {
  const themeMap = {
    "01d": "clear-day",
    "01n": "clear-night",
    "02d": "cloudy-day",
    "02n": "cloudy-night",
    "03d": "cloudy-day",
    "03n": "cloudy-night",
    "04d": "overcast-day",
    "04n": "overcast-night",
    "09d": "shower-day",
    "09n": "shower-night",
    "10d": "rainy-day",
    "10n": "rainy-night",
    "11d": "thunderstorm",
    "11n": "thunderstorm",
    "13d": "snowy-day",
    "13n": "snowy-night",
    "50d": "misty-day",
    "50n": "misty-night",
  };

  const themeClass = themeMap[weatherData.icon];
  return themeClass;
}

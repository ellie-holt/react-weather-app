export default function SetTheme({ weatherData }) {
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
    "10d": "rain",
    "10n": "rain",
    "11d": "thunderstorm",
    "11n": "thunderstorm",
    "13d": "snow",
    "13n": "snow",
    "50d": "mist",
    "50n": "mist",
  };

  const themeClass = themeMap[weatherData.icon];
  return themeClass;
}

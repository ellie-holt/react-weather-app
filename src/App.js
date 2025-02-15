import React, { useState } from "react";
import axios from "axios";

import Search from "./components/Search";
import CityInfo from "./components/CityInfo";
import CurrentWeather from "./components/currentweather/CurrentWeather";
import WeatherForecast from "./components/weatherforecast/WeatherForecast";
import Footer from "./components/Footer";

import SetTheme from "./SetTheme";

function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: {
        current: response.data.main.temp,
        feels_like: response.data.main.feels_like,
        min: response.data.main.temp_min,
        max: response.data.main.temp_max,
      },
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: {
        speed: response.data.wind.speed,
        direction: response.data.wind.deg,
      },
      visibility: response.data.visibility,
      cloud_cover: response.data.clouds.all,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      coordinates: response.data.coord,
    });
  }

  function fetchWeatherData(city) {
    let apiKey = "ca0db41e2e878c74a1dfc7ffece370d4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    let themeClass = SetTheme({ weatherData });
    return (
      <main className={`${themeClass}`}>
        <Search fetchWeatherData={fetchWeatherData} defaultCity="London" />
        <CityInfo weatherData={weatherData} />
        <CurrentWeather weatherData={weatherData} />
        <WeatherForecast weatherData={weatherData} />
        <Footer />
      </main>
    );
  } else {
    fetchWeatherData("London");
    return "Loading";
  }
}

export default App;

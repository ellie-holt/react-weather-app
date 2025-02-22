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
  const [forecastData, setForecastData] = useState({ ready: false });
  const [unit, setUnit] = useState("metric");

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
      timezone: response.data.timezone,
    });
    fetchForecastData(response.data.coord);
  }

  function handleForecastResponse(response) {
    console.log(response.data);
    setForecastData({
      ready: true,
      forecast: response.data.daily,
    });
  }

  function createApiUrl({ city, lat, lon }) {
    const apiKey = "ca0db41e2e878c74a1dfc7ffece370d4";
    let apiUrl = "";
    console.log(city);
    console.log(lat);
    console.log(lon);

    if (city) {
      apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } else if (lat && lon) {
      apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    }

    return apiUrl;
  }

  function fetchWeatherData(query) {
    let apiUrl = createApiUrl(query);
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function fetchForecastData(coord) {
    const apiKey = "839e3cb4ta48e140e587fa20cb9532o6";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coord.lon}&lat=${coord.lat}&key=${apiKey}`;
    axios.get(apiUrl).then(handleForecastResponse);
  }

  function changeUnit(unit) {
    let newUnit = unit;
    setUnit(newUnit);
    console.log(newUnit);
  }

  if (weatherData.ready) {
    let themeClass = SetTheme({ weatherData });
    return (
      <div className={`App flex flex-col min-h-screen ${themeClass}`}>
        <main className={`w-full flex-grow`}>
          <Search
            fetchWeatherData={fetchWeatherData}
            changeUnit={changeUnit}
            defaultCity="London"
          />
          <CityInfo weatherData={weatherData} />
          <div className="flex flex-col lg:mx-20 lg:mt-10 lg:flex-row lg:justify-center lg:items-start">
            <CurrentWeather weatherData={weatherData} unit={unit} />
            <WeatherForecast
              weatherData={weatherData}
              forecastData={forecastData}
              unit={unit}
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  } else {
    fetchWeatherData({ city: "London" });
    return "Loading";
  }
}

export default App;

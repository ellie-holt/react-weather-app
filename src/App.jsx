import React, { useState } from "react";
import { fetchCurrentWeather, fetchForecast } from "./services/weatherApi";

import Search from "./components/Search";
import CityInfo from "./components/CityInfo";
import CurrentWeather from "./components/currentweather/CurrentWeather";
import WeatherForecast from "./components/weatherforecast/WeatherForecast";
import Footer from "./components/Footer";

import SetTheme from "./utils/SetTheme";

function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [forecastData, setForecastData] = useState({ ready: false });
  const [unit, setUnit] = useState("metric");

  function handleResponse(data) {
    setWeatherData({
      ready: true,
      temperature: {
        current: data.main.temp,
        feels_like: data.main.feels_like,
        min: data.main.temp_min,
        max: data.main.temp_max,
      },
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind: {
        speed: data.wind.speed,
        direction: data.wind.deg,
      },
      visibility: data.visibility,
      cloud_cover: data.clouds.all,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      city: data.name,
      coordinates: data.coord,
      timezone: data.timezone,
    });
    fetchForecastData(data.coord);
  }

  async function fetchWeatherData(query) {
    try {
      const data = await fetchCurrentWeather(query);
      handleResponse(data);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  }

  async function fetchForecastData(coord) {
    try {
      const data = await fetchForecast(coord);
      setForecastData({
        ready: true,
        forecast: data.daily,
      });
    } catch (error) {
      console.error("Error fetching forecast data:", error.message);
    }
  }

  function changeUnit(unit) {
    let newUnit = unit;
    setUnit(newUnit);
  }

  if (weatherData.ready) {
    let themeClass = SetTheme({ weatherData });
    return (
      <div className={`App flex flex-col min-h-screen ${themeClass}`}>
        <main className={`w-full flex-grow flex flex-col`}>
          <Search
            fetchWeatherData={fetchWeatherData}
            changeUnit={changeUnit}
            defaultCity="London"
          />
          <CityInfo weatherData={weatherData} />
          <div className="flex flex-col sm:mx-4 md:mx-8 mlg:mx-14 lg:mx-16 mlg:m-auto mlg:flex-row-reverse mlg:gap-2 mlg:justify-center mlg:items-start 2xl:items-center">
            <CurrentWeather weatherData={weatherData} unit={unit} />
            <WeatherForecast weatherData={weatherData} forecastData={forecastData} unit={unit} />
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

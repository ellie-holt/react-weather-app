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
          <CurrentWeather weatherData={weatherData} unit={unit} />
          <WeatherForecast weatherData={weatherData} unit={unit} />
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

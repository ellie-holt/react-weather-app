import React, { useState, useEffect } from "react";
import { fetchCurrentWeather, fetchForecast } from "./services/weatherApi";

import Search from "./components/Search";
import CityInfo from "./components/CityInfo";
import CurrentWeather from "./components/currentweather/CurrentWeather";
import WeatherForecast from "./components/weatherforecast/WeatherForecast";
import Footer from "./components/Footer";

import SetTheme from "./utils/SetTheme";

function App() {
  const [weatherState, setWeatherState] = useState({ data: null, loading: false, error: null });
  const [forecastState, setForecastState] = useState({ data: null, loading: false, error: null });
  const [unit, setUnit] = useState("metric");

  function handleResponse(data) {
    const formattedData = {
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
    };

    setWeatherState({ data: formattedData, loading: false, error: null });
    fetchForecastData(data.coord);
  }

  async function fetchWeatherData(query) {
    setWeatherState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const data = await fetchCurrentWeather(query);
      handleResponse(data);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      setWeatherState(prev => ({ ...prev, loading: false, error: error.message }));
    }
  }

  async function fetchForecastData(coord) {
    setForecastState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const data = await fetchForecast(coord);
      setForecastState({
        data: data.daily,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Error fetching forecast data:", error.message);
      setForecastState(prev => ({ ...prev, loading: false, error: error.message }));
    }
  }

  function changeUnit(newUnit) {
    setUnit(newUnit);
  }

  useEffect(() => {
    fetchWeatherData({ city: "London" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (weatherState.loading) return "Loading...";
  // if (weatherState.error) return `Error: ${weatherState.error}`;
  if (!weatherState.data) return null;
  let themeClass = SetTheme(weatherState.data);

  return (
    <div className={`App flex flex-col min-h-screen ${themeClass}`}>
      <main className={`w-full flex-grow flex flex-col`}>
        <Search fetchWeatherData={fetchWeatherData} changeUnit={changeUnit} defaultCity="London" />
        <CityInfo weatherData={weatherState.data} />
        <div className="flex flex-col sm:mx-4 md:mx-8 mlg:mx-14 lg:mx-16 mlg:m-auto mlg:flex-row-reverse mlg:gap-2 mlg:justify-center mlg:items-start 2xl:items-center">
          <CurrentWeather weatherData={weatherState.data} unit={unit} />
          <WeatherForecast
            weatherData={weatherState.data}
            forecastState={forecastState}
            unit={unit}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

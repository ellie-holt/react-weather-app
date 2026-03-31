import { useState, useEffect } from "react";
import { fetchCurrentWeather, fetchForecast } from "./services/weatherApi";

import Search from "./components/Search";
import CityInfo from "./components/CityInfo";
import CurrentWeather from "./components/currentweather/CurrentWeather";
import WeatherForecast from "./components/weatherforecast/WeatherForecast";
import Footer from "./components/Footer";

import { formatCurrentWeather } from "./utils/formatWeatherData";
import SetTheme from "./utils/SetTheme";

function App() {
  const [weatherState, setWeatherState] = useState({ data: null, loading: false, error: null });
  const [forecastState, setForecastState] = useState({ data: null, loading: false, error: null });
  const [unit, setUnit] = useState("metric");

  async function fetchWeatherData(query) {
    setWeatherState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const data = await fetchCurrentWeather(query);
      const formattedData = formatCurrentWeather(data);

      setWeatherState({ data: formattedData, loading: false, error: null });

      fetchForecastData(data.coord);
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
        <CityInfo weatherState={weatherState} />
        <div className="flex flex-col sm:mx-4 md:mx-8 mlg:mx-14 lg:mx-16 mlg:m-auto mlg:flex-row-reverse mlg:gap-2 mlg:justify-center mlg:items-start 2xl:items-center">
          <CurrentWeather weatherState={weatherState} unit={unit} />
          <WeatherForecast weatherState={weatherState} forecastState={forecastState} unit={unit} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

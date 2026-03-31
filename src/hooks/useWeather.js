import { useState, useEffect } from "react";
import { fetchCurrentWeather, fetchForecast } from "../services/weatherApi";
import { formatCurrentWeather } from "../utils/formatWeatherData";

export default function useWeather(defaultCity = "London") {
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
    fetchWeatherData({ city: defaultCity });
  }, [defaultCity]);

  return {
    weatherState,
    forecastState,
    unit,
    fetchWeatherData,
    changeUnit,
  };
}

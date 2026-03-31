import { useEffect, useReducer } from "react";
import { fetchCurrentWeather, fetchForecast } from "../services/weatherApi";
import { formatCurrentWeather } from "../utils/formatWeatherData";

import { weatherReducer, initialState } from "../state/weatherReducer";

export default function useWeather(defaultCity = "London") {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  async function fetchWeatherData(query) {
    dispatch({ type: "WEATHER/FETCH_START" });

    try {
      const data = await fetchCurrentWeather(query);
      const formattedData = formatCurrentWeather(data);

      dispatch({ type: "WEATHER/FETCH_SUCCESS", payload: formattedData });

      fetchForecastData(data.coord);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      dispatch({ type: "WEATHER/FETCH_ERROR", payload: error.message });
    }
  }

  async function fetchForecastData(coord) {
    dispatch({ type: "FORECAST/FETCH_START" });

    try {
      const data = await fetchForecast(coord);
      dispatch({ type: "FORECAST/FETCH_SUCCESS", payload: data.daily });
    } catch (error) {
      console.error("Error fetching forecast data:", error.message);
      dispatch({ type: "FORECAST/FETCH_ERROR", payload: error.message });
    }
  }

  function changeUnit(newUnit) {
    dispatch({ type: "UNIT/CHANGE", payload: newUnit });
  }

  useEffect(() => {
    fetchWeatherData({ city: defaultCity });
  }, [defaultCity]);

  return {
    weatherState: state.weather,
    forecastState: state.forecast,
    unit: state.unit,
    fetchWeatherData,
    changeUnit,
  };
}

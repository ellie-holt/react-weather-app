import axios from "axios";

const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const SHECODES_API_KEY = process.env.REACT_APP_SHECODES_API_KEY;

const openWeatherClient = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  timeout: 10000,
});

const sheCodesClient = axios.create({
  baseURL: "https://api.shecodes.io/weather/v1/",
  timeout: 10000,
});

export async function fetchCurrentWeather({ city, lat, lon, units = "metric" }) {
  if (!OPENWEATHER_API_KEY) throw new Error("Missing OpenWeather API key");
  const params = { appid: OPENWEATHER_API_KEY, units };
  if (city) {
    params.q = city;
  } else if (lat && lon) {
    params.lat = lat;
    params.lon = lon;
  } else {
    throw new Error("Provide either a city name or latitude and longitude");
  }

  try {
    const response = await openWeatherClient.get("weather", { params });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("OpenWeather API responded with an error:", error.response.data);
      if (error.response.status === 401) {
        throw new Error("Invalid OpenWeather API key.");
      } else if (error.response.status === 404) {
        throw new Error("City not found. Please check the city name and try again.");
      } else if (error.response.status === 429) {
        throw new Error("OpenWeather API rate limit exceeded. Please try again later.");
      } else if (error.response.status >= 500) {
        throw new Error("OpenWeather API server error. Please try again later.");
      } else {
        throw new Error(`OpenWeather API error: ${error.response.data.message}`);
      }
    } else if (error.request) {
      console.error("No response from OpenWeather API:", error.request);
      throw new Error(
        "No response from the OpenWeather API. Please check your internet connection."
      );
    } else {
      console.error("Unexpected error while setting up request:", error.message);
      throw new Error("An unexpected error occurred while fetching weather data.");
    }
  }
}

export async function fetchForecast({ lat, lon, units = "metric" }) {
  if (!SHECODES_API_KEY) throw new Error("Missing SheCodes API key");
  if (lat == null || lon == null) throw new Error("Latitude and longitude are required");
  const params = { key: SHECODES_API_KEY, lat, lon, units };

  try {
    const response = await sheCodesClient.get("forecast", { params });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("SheCodes API responded with an error:", error.response.data);
      if (error.response.status === 401) {
        throw new Error("Invalid SheCodes API key.");
      } else if (error.response.status === 404) {
        throw new Error("Forecast data not found for the provided coordinates.");
      } else if (error.response.status === 429) {
        throw new Error("SheCodes API rate limit exceeded. Please try again later.");
      } else if (error.response.status >= 500) {
        throw new Error("SheCodes API server error. Please try again later.");
      } else {
        throw new Error(`SheCodes API error: ${error.response.data.message}`);
      }
    } else if (error.request) {
      console.error("No response from SheCodes API:", error.request);
      throw new Error("No response from the SheCodes API. Please check your internet connection.");
    } else {
      console.error("Unexpected error while setting up request:", error.message);
      throw new Error("An unexpected error occurred while fetching forecast data.");
    }
  }
}

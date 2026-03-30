import { openWeatherClient, sheCodesClient } from "./api/clients";
import { getApiErrorMessage } from "./api/errors";

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const SHECODES_API_KEY = import.meta.env.VITE_SHECODES_API_KEY;

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
    throw new Error(getApiErrorMessage(error, "OpenWeather"));
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
    throw new Error(getApiErrorMessage(error, "SheCodes"));
  }
}

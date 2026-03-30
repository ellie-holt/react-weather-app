import axios from "axios";

export const openWeatherClient = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  timeout: 10000,
});

export const sheCodesClient = axios.create({
  baseURL: "https://api.shecodes.io/weather/v1/",
  timeout: 10000,
});

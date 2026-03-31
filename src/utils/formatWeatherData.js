export function formatCurrentWeather(data) {
  return {
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
}

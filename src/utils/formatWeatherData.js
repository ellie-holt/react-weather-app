export function formatCurrentWeather(data) {
  const weather = data.weather?.[0] ?? {};
  const main = data.main ?? {};
  const wind = data.wind ?? {};
  const sys = data.sys ?? {};
  const rain1h = data.rain?.["1h"] ?? null;
  const snow1h = data.snow?.["1h"] ?? null;

  return {
    location: {
      city: data.name,
      country: sys.country,
      coordinates: data.coord,
      timezone: data.timezone,
      sunrise: sys.sunrise,
      sunset: sys.sunset,
    },
    conditions: {
      description: weather.description,
      icon: weather.icon,
      cloud_cover: data.clouds?.all,
      visibility: data.visibility,
      rain_1h: rain1h,
      snow_1h: snow1h,
    },
    temperature: {
      current: main.temp,
      feels_like: main.feels_like,
      min: main.temp_min,
      max: main.temp_max,
    },
    wind: {
      speed: wind.speed,
      direction: wind.deg,
      gust: wind.gust,
    },
    atmosphere: {
      humidity: main.humidity,
      pressure: main.pressure,
      sea_level: main.sea_level,
      ground_level: main.grnd_level,
    },
  };
}

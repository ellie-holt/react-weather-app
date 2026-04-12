import Search from "./components/Search";
import CityInfo from "./components/CityInfo";
import CurrentWeather from "./components/currentweather/CurrentWeather";
import WeatherForecast from "./components/weatherforecast/WeatherForecast";
import Footer from "./components/Footer";

import useWeather from "./hooks/useWeather";

import SetTheme from "./utils/SetTheme";

function App() {
  const { weatherState, forecastState, unit, fetchWeatherData, changeUnit } = useWeather();

  if (!weatherState.data) return null;
  let themeClass = SetTheme(weatherState.data);

  return (
    <div className={`App app-shell app-shell--overlap ${themeClass}`}>
      <header className="app-header layout-grid">
        <Search
          fetchWeatherData={fetchWeatherData}
          changeUnit={changeUnit}
          unit={unit}
          weatherError={weatherState.error}
          defaultCity="London"
        />
        <CityInfo weatherState={weatherState} />
      </header>

      <main className="app-main layout-grid">
        {/* <div className="weather-layout"> */}
        <CurrentWeather weatherState={weatherState} unit={unit} />
        <WeatherForecast weatherState={weatherState} forecastState={forecastState} unit={unit} />
        {/* </div> */}
      </main>

      <footer className="app-footer layout-grid">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

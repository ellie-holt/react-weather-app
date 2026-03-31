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
    <div className={`App flex flex-col min-h-screen ${themeClass}`}>
      <main className={`w-full flex-grow flex flex-col`}>
        <Search
          fetchWeatherData={fetchWeatherData}
          changeUnit={changeUnit}
          unit={unit}
          defaultCity="London"
        />
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

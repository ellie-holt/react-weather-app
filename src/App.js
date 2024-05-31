import "./App.scss";
import Search from "./search/Search";
import CurrentWeather from "./currentweather/CurrentWeather";
import WeatherForecast from "./weatherforecast/WeatherForecast";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <h1 className="MainHeading">Weather Checker</h1>
      <Search />
      <CurrentWeather />
      <WeatherForecast />
      <Footer />
    </div>
  );
}

export default App;

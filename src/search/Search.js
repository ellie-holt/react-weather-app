import React, { useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";

export default function Search() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("London");

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      temp_min: response.data.main.temp_min,
      temp_max: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind_speed: response.data.wind.speed,
      wind_direction: response.data.wind.deg,
      visibility: response.data.visibility,
      cloud_cover: response.data.clouds.all,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ca0db41e2e878c74a1dfc7ffece370d4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Search">
      <form id="search-form" className="SearchForm" onSubmit={handleSubmit}>
        <button type="button" id="current-button" className="CurrentButton">
          Current
        </button>
        <div className="SearchBar">
          <input
            type="search"
            id="search-bar"
            className="SearchInput"
            placeholder="Type city here..."
            autoFocus
            required
            aria-label="User location"
            aria-describedby="search-button"
            onChange={handleCityChange}
          />
          <button type="submit" id="search-button" className="SearchButton">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </form>
    </div>
  );
}

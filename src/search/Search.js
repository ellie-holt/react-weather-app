import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";

export default function Search({ fetchWeatherData, defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  console.log(defaultCity);

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeatherData(city);
  }

  return (
    <div className="Search">
      <div className="SearchBarTab">
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
    </div>
  );
}

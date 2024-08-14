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
    <div className="Search z-10">
      <div className="SearchBarTab p-[0.7rem] fixed top-0 left-0 z-20 md:w-[70vw] xl:w-[65vw]">
        <form id="search-form" className="SearchForm" onSubmit={handleSubmit}>
          <button
            type="button"
            id="current-button"
            className="CurrentButton button md:ml-[1vw]"
          >
            Current
          </button>
          <div className="SearchBar ml-[8vw]">
            <input
              type="search"
              id="search-bar"
              className="SearchInput input"
              placeholder="Type city here..."
              autoFocus
              required
              aria-label="User location"
              aria-describedby="search-button"
              onChange={handleCityChange}
            />
            <button
              type="submit"
              id="search-button"
              className="SearchButton button"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

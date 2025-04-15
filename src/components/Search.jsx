import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search({ fetchWeatherData, changeUnit, defaultCity }) {
  const [city, setCity] = useState(defaultCity);

  function handleCurrentClick() {
    navigator.geolocation.getCurrentPosition(position => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      fetchWeatherData({ lat, lon });
    });
  }

  function handleUnitClick() {
    let unitButton = document.getElementById("unit-button");
    let unit = unitButton.textContent === "℉" ? "imperial" : "metric";
    unitButton.textContent = unit === "metric" ? "℉" : "℃";
    changeUnit(unit);
    console.log(unit);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeatherData({ city });
  }

  return (
    <nav className="sticky top-0 z-10 p-4 shadow-lg search bg-opacity-35 backdrop-blur-lg bg-white/20 font-librefranklin max-h-content">
      <form
        id="search-form"
        className="flex items-center justify-around xs:justify-center sm:justify-end flex-nowrap"
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          id="current-button"
          className="button"
          aria-label="Get current location weather"
          onClick={handleCurrentClick}
        >
          Current
        </button>
        <div className="flex items-center justify-center flex-nowrap xs:mx-3 sm:mx-3" role="search">
          <label htmlFor="search-bar" className="sr-only">
            City search
          </label>
          <input
            type="search"
            id="search-bar"
            className="z-10 w-3/4 border-r-0 rounded-r-none input xs:w-full"
            placeholder="Type city here..."
            autoFocus
            required
            aria-describedby="search-button"
            onChange={handleCityChange}
          />
          <button type="submit" id="search-button" className="rounded-l-none button">
            <span className="sr-only">Search</span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <button
          type="button"
          id="unit-button"
          className="button flex items-center justify-center rounded-full text-xs 2xs:text-sm 2xl:text-base px-2.5 self-stretch 2xs:min-w-10 2xl:w-11 w-9"
          onClick={handleUnitClick}
        >
          ℉
        </button>
      </form>
    </nav>
  );
}

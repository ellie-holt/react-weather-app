import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGear } from "@fortawesome/free-solid-svg-icons";

export default function Search({ fetchWeatherData, defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  console.log(defaultCity);

  function handleCurrentClick() {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      fetchWeatherData({ lat, lon });
    });
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeatherData({ city });
  }

  return (
    <nav className="search sticky top-0 z-10 p-4 bg-opacity-35 backdrop-blur-lg bg-white/20 shadow-lg font-librefranklin  max-h-content">
      <form
        id="search-form"
        className="flex items-center justify-around flex-nowrap"
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          id="current-button"
          className="button"
          onClick={handleCurrentClick}
        >
          Current
        </button>
        <div className="flex items-center flex-nowrap justify-center">
          <input
            type="search"
            id="search-bar"
            className="input rounded-r-none border-r-0 z-10 w-4/5"
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
            className="button rounded-l-none"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <button
          type="button"
          id="settings-button"
          className="button rounded-full px-2.5"
        >
          <FontAwesomeIcon icon={faGear} />
        </button>
      </form>
    </nav>
  );
}

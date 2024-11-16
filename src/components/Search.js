import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
    <div className="sticky top-0 z-10 pt-4 pb-2">
      <form
        id="search-form"
        className="flex items-center justify-center flex-nowrap"
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          id="current-button"
          className="button md:ml-[1vw]"
        >
          Current
        </button>
        <div className="flex items-center flex-nowrap ml-[8vw]">
          <input
            type="search"
            id="search-bar"
            className="input"
            placeholder="Type city here..."
            autoFocus
            required
            aria-label="User location"
            aria-describedby="search-button"
            onChange={handleCityChange}
          />
          <button type="submit" id="search-button" className="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </form>
    </div>
  );
}

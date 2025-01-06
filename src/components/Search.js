import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGear } from "@fortawesome/free-solid-svg-icons";

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
    <div className="sticky px-4 top-0 z-10 bg-opacity-35 shadow-md p-4 font-librefranklin text-md bg-white max-h-content">
      <form
        id="search-form"
        className="flex items-center justify-around flex-nowrap"
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          id="current-button"
          className="button border-blue-500 shadow-blue-500 shadow-[-3px_3px_0]"
        >
          Current
        </button>
        <div className="flex items-center flex-nowrap">
          <input
            type="search"
            id="search-bar"
            className="input rounded-r-none z-10 border-blue-500 shadow-blue-500"
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
            className="button rounded-l-none border-blue-500 shadow-blue-500"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <button
          type="button"
          id="settings-button"
          className="button rounded-full px-2.5 border-blue-500 shadow-blue-500"
        >
          <FontAwesomeIcon icon={faGear} />
        </button>
      </form>
    </div>
  );
}

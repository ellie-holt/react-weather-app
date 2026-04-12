import { useState } from "react";

import Button from "./ui/Button";
import SearchBar from "./ui/SearchBar";

export default function Search({
  fetchWeatherData,
  changeUnit,
  unit,
  weatherError,
  defaultCity = "London",
}) {
  const [city, setCity] = useState("");
  const cityNotFound = weatherError?.toLowerCase().includes("not found");

  function handleCurrentClick() {
    navigator.geolocation.getCurrentPosition(position => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      fetchWeatherData({ lat, lon });
    });
  }

  function handleUnitClick() {
    changeUnit(unit === "metric" ? "imperial" : "metric");
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeatherData({ city: city.trim() || defaultCity });
  }

  return (
    <nav className="search fixed inset-x-0 top-0 z-30 p-4 shadow-lg bg-opacity-35 backdrop-blur-lg bg-white/20 font-librefranklin max-h-content">
      <form
        id="search-form"
        className="flex items-center justify-around 2xs:justify-center sm:justify-end flex-nowrap"
        onSubmit={handleSubmit}
      >
        <Button
          id="current-button"
          variant="rounded"
          aria-label="Get current location weather"
          onClick={handleCurrentClick}
        >
          Current
        </Button>
        <SearchBar
          city={city}
          onCityChange={event => setCity(event.target.value)}
          defaultCity={defaultCity}
        />
        <Button
          id="unit-button"
          variant="round"
          className="text-sm sm:text-base"
          onClick={handleUnitClick}
        >
          {unit === "metric" ? "℉" : "℃"}
        </Button>
      </form>

      {cityNotFound && (
        <p
          role="status"
          aria-live="polite"
          className="mt-4 text-center sm:text-right text-sm sm:text-base font-medium"
        >
          City not found. Check spelling and try again.
        </p>
      )}
    </nav>
  );
}

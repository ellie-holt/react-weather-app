import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

export default function SearchBar({ city, onCityChange, defaultCity = "London" }) {
  return (
    <div className="flex items-center justify-center flex-nowrap 2xs:mx-3 sm:mx-3" role="search">
      <label htmlFor="search-bar" className="sr-only">
        City search
      </label>
      <input
        type="search"
        id="search-bar"
        className="z-10 w-3/4 border-r-0 rounded-r-none input 2xs:w-full"
        placeholder={`Type city here...`}
        autoFocus
        required
        aria-describedby="search-button"
        value={city}
        onChange={onCityChange}
      />
      <Button type="submit" id="search-button" variant="search">
        <span className="sr-only">Search</span>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </div>
  );
}

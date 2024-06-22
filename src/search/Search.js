import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./Search.scss";

export default function Search() {
  return (
    <div className="Search">
      <div className="SearchBar">
        <input
          type="search"
          id="search-bar"
          placeholder="Type city here..."
          autoFocus
          required
          aria-label="User location"
          aria-describedby="search-button"
        />
        <button type="submit" id="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      {/* <div className="ConversionButton">
        <button type="button" id="conversion-button">
          Metric
        </button>
      </div> */}
      <div className="CurrentButton">
        <button type="button" id="current-button">
          Current
        </button>
      </div>
    </div>
  );
}

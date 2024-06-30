import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./Search.scss";

export default function Search() {
  return (
    <div className="Search">
      <div className="MainHeading">
        <h1>Weather Checker</h1>
      </div>
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
        />
        <button type="submit" id="search-button" className="SearchButton">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <button type="button" id="current-button" className="CurrentButton">
        Current
      </button>
    </div>
  );
}

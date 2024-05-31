import React from "react";

import "./Search";

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
          Search
        </button>
      </div>
    </div>
  );
}

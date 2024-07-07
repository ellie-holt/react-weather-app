import React from "react";

import "./CityInfo.scss";

export default function CityInfo({ weatherData }) {
  return (
    <div className="cityInfo">
      <h2 className="cityName">{weatherData.city}</h2>
      <h3 className="currentDate">Tuesday 1st November</h3>
      <h2 className="currentTime">15:52</h2>
    </div>
  );
}

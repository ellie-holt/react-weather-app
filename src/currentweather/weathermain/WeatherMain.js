import React from "react";

import "./WeatherMain.scss";

export default function WeatherMain({ weatherData }) {
  return (
    <div className="weatherMain">
      <h2 className="description">{weatherData.description}</h2>
      <div className="icon">☀︎</div>
    </div>
  );
}

import React from "react";

import DayCard from "./daycard/DayCard";

import "./WeatherForecast.scss";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
    </div>
  );
}

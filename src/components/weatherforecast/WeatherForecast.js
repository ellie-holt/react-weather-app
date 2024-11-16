import React from "react";

import DayCard from "./DayCard";

export default function WeatherForecast() {
  return (
    <div className="card flex">
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
    </div>
  );
}

import React from "react";

import DayCard from "./DayCard";

export default function WeatherForecast() {
  return (
    <div className="mx-4 mt-2 flex border-2 border-blue-500 rounded-xl shadow-blue-500 shadow-[-5px_5px_0] overflow-x-scroll">
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
    </div>
  );
}

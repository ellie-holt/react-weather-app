import React from "react";

export default function DayCard() {
  return (
    <article className="px-2 py-1 text-center">
      <h2 className="weekDay">Monday</h2>
      <h3 className="temp">
        14<span className="unit">°C</span>
      </h3>
      <div className="icon text-[3rem] leading-tight">☀︎</div>
      <p className="description whitespace-nowrap italic text-sm">Light rain</p>
    </article>
  );
}

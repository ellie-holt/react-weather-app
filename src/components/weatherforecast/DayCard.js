import React from "react";

export default function DayCard() {
  return (
    <article>
      <h2 className="weekDay">Mon</h2>
      <h3 className="temp">
        14<span className="tempUnit">°C</span>
      </h3>
      <div className="icon">☀︎</div>
      <p className="description">Light rain</p>
    </article>
  );
}

import React from "react";

import SetTheme from "../../SetTheme";

export default function DayCard({ weatherData }) {
  let themeClass = SetTheme({ weatherData });
  return (
    <section
      className={`${themeClass} dayCard mx-2 px-2 py-1 text-center border-2 border-white rounded-xl`}
    >
      <h2 className="weekDay text-xl font-semibold">Mon</h2>
      <h3 className="temp text-2xl">
        14<span className="unit">°C</span>
      </h3>
      <div className="icon text-[3rem] leading-tight">☀︎</div>
      <p className="description whitespace-nowrap italic text-base px-2 py-1 border-l-4 font-semibold">
        Light rain
      </p>
    </section>
  );
}

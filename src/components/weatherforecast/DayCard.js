import React from "react";

import SetTheme from "../../SetTheme";

export default function DayCard({ weatherData }) {
  let themeClass = SetTheme({ weatherData });
  return (
    <section
      className={`${themeClass} dayCard w-[calc(100%/3)] flex-shrink-0 mx-1 py-3 text-center border-none rounded-xl snap-start hover:shadow-[-4px_4px_2px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out`}
    >
      <h2 className="weekDay text-xl font-semibold">Mon</h2>
      <h3 className="temp text-2xl">
        14<span className="unit">°C</span>
      </h3>
      <div className="icon text-[3rem] leading-tight">☀︎</div>
      <p className="description whitespace-nowrap italic text-base px-2 py-1 font-semibold">
        Light rain
      </p>
    </section>
  );
}

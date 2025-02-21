import React from "react";
import FormattedDateTime from "../../FormattedDateTime";

export default function DayCard({ dailyForecast, unit }) {
  return (
    <section
      className={` dayCard w-[calc(100%/2)] xs:w-[calc(100%/3)] flex-shrink-0 mx-1 py-3 text-center border-none rounded-xl snap-start hover:shadow-[-4px_4px_2px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out`}
    >
      <h2 className="weekDay text-xl font-semibold">
        <FormattedDateTime
          timestamp={dailyForecast.time * 1000}
          format={"weekday"}
        />
      </h2>
      <h3 className="temp text-2xl">
        {unit === "metric"
          ? Math.round(dailyForecast.temperature.day)
          : Math.round(dailyForecast.temperature.day * 1.8 + 32)}
        <span className="unit-super">{unit === "metric" ? "°C" : "°F"}</span>
      </h3>
      <div className="icon text-[3rem] leading-tight">☀︎</div>
      <p className="description whitespace-nowrap italic text-base px-2 py-1 font-semibold">
        {dailyForecast.condition.description.charAt(0).toUpperCase() +
          dailyForecast.condition.description.slice(1)}
      </p>
    </section>
  );
}

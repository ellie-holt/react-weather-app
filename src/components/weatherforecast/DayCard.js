import React from "react";
import FormattedDateTime from "../../FormattedDateTime";
import IconSelect from "../../IconSelect";
import icons from "../../img/icons";

export default function DayCard({ dailyForecast, unit }) {
  let iconVariant = IconSelect({ dailyForecast });
  let icon = icons[iconVariant];
  console.log(dailyForecast);
  return (
    <section
      className={` dayCard w-[calc(100%/2)] 2xs:w-[calc(100%/3)] md:w-[calc(98%/4)] mlg:h-[calc(100%/4)] mlg:w-full mlg:grid mlg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-[auto] flex-shrink-0 mx-1 py-3 mlg:my-2 mlg:py-2 mlg:px-3 mlg:place-content-between text-center border-none rounded-xl snap-start hover:shadow-[-4px_4px_2px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out`}
    >
      <h2 className="weekDay mlg:text-lg text-xl font-semibold mlg:row-start-1 mlg:row-span-2 mlg:self-center mlg:justify-self-start">
        <FormattedDateTime
          timestamp={dailyForecast.time * 1000}
          format={"weekday"}
        />
      </h2>
      <img
        src={icon}
        alt={dailyForecast.condition.description + " icon"}
        className="icon w-16 m-auto lg:self-end"
      />
      <h3 className="temp text-2xl mlg:self-end">
        {unit === "metric"
          ? Math.round(dailyForecast.temperature.day)
          : Math.round(dailyForecast.temperature.day * 1.8 + 32)}
        <span className="unit-super">{unit === "metric" ? "°C" : "°F"}</span>
      </h3>
      <p className="description xs:truncate italic text-base px-2 py-1 mlg:py-0 mlg:inline-block mlg:col-start-2 mlg:col-span-2 mlg:self-center mlg:text-right font-semibold">
        {dailyForecast.condition.description.charAt(0).toUpperCase() +
          dailyForecast.condition.description.slice(1)}
      </p>
    </section>
  );
}

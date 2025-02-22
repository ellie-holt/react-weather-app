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
      className={` dayCard w-[calc(100%/2)] 2xs:w-[calc(100%/3)] lg:h-[calc(100%/4)] lg:w-full lg:grid lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-[auto] flex-shrink-0 mx-1 py-3 lg:my-2 lg:py-2 lg:px-3 lg:place-content-between text-center border-none rounded-xl snap-start hover:shadow-[-4px_4px_2px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out`}
    >
      <h2 className="weekDay text-xl font-semibold lg:row-start-1 lg:row-span-2 lg:self-center lg:justify-self-start">
        <FormattedDateTime
          timestamp={dailyForecast.time * 1000}
          format={"weekday"}
        />
      </h2>
      <img src={icon} alt="" className="icon w-16 m-auto lg:self-end" />
      <h3 className="temp text-2xl lg:self-end">
        {unit === "metric"
          ? Math.round(dailyForecast.temperature.day)
          : Math.round(dailyForecast.temperature.day * 1.8 + 32)}
        <span className="unit-super">{unit === "metric" ? "°C" : "°F"}</span>
      </h3>
      <p className="description whitespace-nowrap italic text-base px-2 py-1 lg:py-0 lg:inline-block lg:col-start-2 lg:col-span-2 lg:self-center lg:text-right font-semibold">
        {dailyForecast.condition.description.charAt(0).toUpperCase() +
          dailyForecast.condition.description.slice(1)}
      </p>
    </section>
  );
}

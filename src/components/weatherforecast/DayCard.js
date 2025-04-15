import React from "react";
import FormattedDateTime from "../../FormattedDateTime";
import IconSelect from "../../IconSelect";
import icons from "../../img/icons";

export default function DayCard({ dailyForecast, unit }) {
  let iconVariant = IconSelect({ dailyForecast });
  let icon = icons[iconVariant];
  return (
    <section
      className={`dayCard w-[calc(100%/2)] 2xs:w-[calc(100%/3)] md:w-[calc(98%/4)] mlg:h-[calc(100%/4)] 2xl:h-[calc(90%/4)] mlg:w-full mlg:grid mlg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-[auto] flex-shrink-0 mx-1 py-3 mlg:my-2 2xl:mt-4 2xl:mb-0 mlg:py-2 mlg:px-3 mlg:place-content-between text-center border-none rounded-xl snap-start`}
    >
      <h2 className="text-xl font-semibold 2xl:text-[1.4rem] weekDay mlg:text-lg mlg:row-start-1 mlg:row-span-2 mlg:self-center mlg:justify-self-start">
        <FormattedDateTime
          timestamp={dailyForecast.time * 1000}
          format={"weekday"}
        />
      </h2>
      <img
        src={icon}
        alt={dailyForecast.condition.description + " icon"}
        className="w-16 h-16 m-auto icon lg:self-end"
      />
      <h3 className="text-2xl 2xl:text-3xl temp mlg:self-end">
        {unit === "metric"
          ? Math.round(dailyForecast.temperature.day)
          : Math.round(dailyForecast.temperature.day * 1.8 + 32)}
        <span className="unit-super">{unit === "metric" ? "°C" : "°F"}</span>
      </h3>
      <p className="px-2 py-1 text-base italic font-semibold description xs:truncate mlg:py-0 mlg:inline-block mlg:col-start-2 mlg:col-span-2 mlg:self-center mlg:text-right">
        {dailyForecast.condition.description.charAt(0).toUpperCase() +
          dailyForecast.condition.description.slice(1)}
      </p>
    </section>
  );
}

import { useState, useEffect } from "react";
import FormattedDateTime from "../utils/FormattedDateTime";
import loadingOpacity from "../utils/loadingOpacity";

export default function CityInfo({ weatherState }) {
  const { data, loading } = weatherState;
  const location = data.location;
  const [currentTime, setCurrentTime] = useState(() => getLocalTime(location.timezone));

  function getLocalTime(timezoneShift) {
    // Get the user's local time and timezone offset in seconds
    let localTime = new Date(Date.now());
    let timezoneOffset = localTime.getTimezoneOffset() * 60;

    // Calculate the UTC timestamp in milliseconds from the user's local time and timezone offset
    let UTCtimestamp = Date.now() + timezoneOffset * 1000;

    // Apply the timezone shift from OpenWeather's API to get the time in the specified timezone
    return UTCtimestamp + timezoneShift * 1000;
  }

  // Update the time every second to keep the clock ticking
  useEffect(() => {
    setCurrentTime(getLocalTime(location.timezone));
    const interval = setInterval(() => {
      setCurrentTime(getLocalTime(location.timezone));
    }, 1000);

    return () => clearInterval(interval);
  }, [location.timezone]);

  return (
    <section
      className={`${loadingOpacity(
        loading
      )} cityInfo w-[87%] 2xs:w-5/6 lg:w-full relative ml-auto rounded-bl-xl h-full font-librefranklin shadow-[-4px_4px_5px_rgba(0,0,0,0.1)] `}
    >
      <div className="row-start-2 row-end-4 pt-1 pb-2 lg:py-2 lg:flex-nowrap lg:items-center lg:gap-x-4 flex flex-wrap items-end justify-end gap-x-2 px-[var(--space-outside-inline)] sm:px-[var(--space-outside-inline-lg)] ">
        <div className="flex lg:flex-col flex-wrap lg:flex-nowrap justify-end lg:justify-center items-baseline lg:items-end lg:gap-1 text-right basis-full lg:basis-auto">
          <h3 className="inline-block max-w-40 2xs:max-w-full lg:max-w-none text-xl 3xs:text-2xl lg:text-3xl text-right truncate font-semibold leading-tight">
            {location.city}
          </h3>

          <div className="lg:hidden flex items-baseline">
            <span className="opacity-50 text-2xl 3xs:text-3xl">~</span>
            <h3 className="inline-block min-w-[2.8em] text-xl 3xs:text-2xl text-right font-semibold leading-tight">
              <FormattedDateTime timestamp={currentTime} format={"hours_:_minutes"} />
            </h3>
          </div>

          <h4 className="inline-block mt-1 lg:mt-0 font-normal text-base sm:text-lg text-right lg:text-right italic basis-full lg:basis-auto leading-snug">
            {window.screen.width < 430 ? (
              <FormattedDateTime
                timestamp={currentTime}
                format={"shortWeekday_,_ _day_ _shortMonth"}
              />
            ) : (
              <FormattedDateTime timestamp={currentTime} format={"weekday_,_ _day_ _month"} />
            )}
          </h4>
        </div>

        <h3 className="hidden lg:inline-block min-w-[2.8em] text-5xl xl:text-6xl text-right leading-none font-semibold">
          <FormattedDateTime timestamp={currentTime} format={"hours_:_minutes"} />
        </h3>
      </div>
    </section>
  );
}

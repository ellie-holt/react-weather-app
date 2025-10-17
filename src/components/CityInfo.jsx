import React, { useState, useEffect } from "react";
import FormattedDateTime from "../utils/FormattedDateTime";
import loadingOpacity from "../utils/loadingOpacity";

export default function CityInfo({ weatherState }) {
  const { data, loading } = weatherState;
  const [currentTime, setCurrentTime] = useState(() => getLocalTime(data.timezone));

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
    setCurrentTime(getLocalTime(data.timezone));
    const interval = setInterval(() => {
      setCurrentTime(getLocalTime(data.timezone));
    }, 1000);

    return () => clearInterval(interval);
  }, [data.timezone]);

  return (
    <section
      className={`${loadingOpacity(
        loading
      )} cityInfo w-[87%] xs:w-5/6 lg:w-3/4 relative bottom-20 px-2 pt-24 pb-5 ml-auto -mb-20 mlg:-mb-16 rounded-bl-full flex flex-wrap justify-self-end justify-end md:justify-center md:flex-col md:content-end max-h-44 2xs:max-h-none md:max-h-48 bg-white font-librefranklin shadow-[-4px_4px_5px_rgba(0,0,0,0.1)]`}
    >
      <h3 className="inline-block px-1 text-2xl text-right truncate xs:max-w-full max-w-40 2xs:text-3xl md:text-4xl">
        {data.city}
      </h3>
      <span className="text-3xl opacity-50 2xs:text-4xl md:hidden">~</span>
      <h3 className="inline-block md:order-last min-w-[2.8em] text-2xl 2xs:text-3xl md:text-7xl md:ml-3 px-1 ">
        <FormattedDateTime timestamp={currentTime} format={"hours_:_minutes"} />
      </h3>
      <h4 className="inline-block px-1 text-xl italic font-light text-right sm:text-2xl basis-full md:basis-auto">
        {window.screen.width < 430 ? (
          <FormattedDateTime timestamp={currentTime} format={"shortWeekday_,_ _day_ _shortMonth"} />
        ) : (
          <FormattedDateTime timestamp={currentTime} format={"weekday_,_ _day_ _month"} />
        )}
      </h4>
    </section>
  );
}

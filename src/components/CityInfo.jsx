import React, { useState, useEffect } from "react";

import FormattedDateTime from "../utils/FormattedDateTime";

export default function CityInfo({ weatherData }) {
  const [currentTime, setCurrentTime] = useState(() =>
    getLocalTime(weatherData.timezone)
  );

  function getLocalTime(timezoneShift) {
    return new Date(Date.now() + timezoneShift * 1000);
  }

  useEffect(() => {
    setCurrentTime(getLocalTime(weatherData.timezone));
    const interval = setInterval(() => {
      setCurrentTime(getLocalTime(weatherData.timezone));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [weatherData.timezone]);

  return (
    <section className="cityInfo w-[87%] xs:w-5/6 lg:w-3/4 relative bottom-20 px-2 pt-24 pb-5 ml-auto -mb-20 mlg:-mb-16 rounded-bl-full flex flex-wrap justify-self-end justify-end md:justify-center md:flex-col md:content-end md:max-h-48 bg-white font-librefranklin shadow-[-4px_4px_5px_rgba(0,0,0,0.1)]">
      <h3 className="inline-block px-1 text-2xl text-right truncate xs:max-w-full max-w-40 2xs:text-3xl md:text-4xl">
        {weatherData.city}
      </h3>
      <span className="text-3xl opacity-50 2xs:text-4xl md:hidden">~</span>
      <h3 className="inline-block md:order-last min-w-[2.8em] text-2xl 2xs:text-3xl md:text-7xl md:ml-3 px-1 ">
        <FormattedDateTime timestamp={currentTime} format={"hours_:_minutes"} />
      </h3>
      <h4 className="inline-block px-1 text-xl italic font-light text-right sm:text-2xl basis-full md:basis-auto">
        {window.screen.width < 430 ? (
          <FormattedDateTime
            timestamp={currentTime}
            format={"shortWeekday_,_ _day_ _shortMonth"}
          />
        ) : (
          <FormattedDateTime
            timestamp={currentTime}
            format={"weekday_,_ _day_ _month"}
          />
        )}
      </h4>
    </section>
  );
}

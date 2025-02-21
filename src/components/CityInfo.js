import React, { useState, useEffect } from "react";

import FormattedDateTime from "../FormattedDateTime";

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

  console.log(currentTime);

  return (
    <section className="cityInfo w-5/6 relative bottom-20 px-2 pt-24 pb-5 ml-auto -mb-20 rounded-bl-full flex flex-wrap justify-self-end justify-end bg-white font-librefranklin shadow-[-4px_4px_5px_rgba(0,0,0,0.1)]">
      <h3 className="inline-block text-2xl px-1">{weatherData.city}</h3>
      <span className="text-3xl opacity-50">~</span>
      <h3 className="inline-block min-w-[2.8em] text-2xl px-1 w-">
        <FormattedDateTime timestamp={currentTime} format={"hours_:_minutes"} />
      </h3>
      <h4 className="inline-block px-1 font-light text-xl italic text-right basis-full">
        <FormattedDateTime
          timestamp={currentTime}
          format={"weekday_,_ _day_ _month"}
        />
      </h4>
    </section>
  );
}

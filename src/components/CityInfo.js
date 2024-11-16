import React, { useState, useEffect } from "react";

import FormattedDateTime from "../FormattedDateTime";

export default function CityInfo({ weatherData }) {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="card flex flex-wrap ">
      <h3 className="text-right basis-1/2 pr-1">{weatherData.city}</h3>
      <h3 className="text-left basis-1.2 pl-1">
        <FormattedDateTime timestamp={currentTime} format={"hours_:_minutes"} />
      </h3>
      <h4 className="font-light italic text-center basis-full">
        <FormattedDateTime
          timestamp={currentTime}
          format={"weekday_,_ _day_ _month"}
        />
      </h4>
    </div>
  );
}

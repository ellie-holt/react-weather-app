import React, { useState, useEffect } from "react";

import FormattedDateTime from "../../FormattedDateTime";

import "./CityInfo.scss";

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
    <div className="cityInfo card px-4 py-2">
      <h2 className="cityName">{weatherData.city}</h2>
      <h3 className="currentDate ps-4 font-light italic">
        <FormattedDateTime
          timestamp={currentTime}
          format={"weekday_,_ _day_ _month"}
        />
      </h3>
      <h2 className="currentTime">
        <FormattedDateTime timestamp={currentTime} format={"hours_:_minutes"} />
      </h2>
    </div>
  );
}

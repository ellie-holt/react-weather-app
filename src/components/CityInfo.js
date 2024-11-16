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
    <div className="card">
      <h3>{weatherData.city}</h3>
      <h3>
        <FormattedDateTime timestamp={currentTime} format={"hours_:_minutes"} />
      </h3>
      <h4 className="font-light italic">
        <FormattedDateTime
          timestamp={currentTime}
          format={"weekday_,_ _day_ _month"}
        />
      </h4>
    </div>
  );
}

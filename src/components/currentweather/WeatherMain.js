import React from "react";
import IconSelect from "../../IconSelect";
import icons from "../../img/icons";

import SetTheme from "../../SetTheme";

export default function WeatherMain({ weatherData, unit }) {
  console.log(unit);
  let iconVariant = IconSelect({ weatherData });

  let icon = icons[iconVariant];

  console.log(icons.cloudy);

  console.log(iconVariant);
  console.log(icon);
  let themeClass = SetTheme({ weatherData });
  return (
    <section
      className={`${themeClass} weatherMain flex flex-col sm:mt-4 mlg:mt-6 lg:mt-10 mx-4 sm:mx-14 md:mx-20 mlg:mx-10 px-4 font-ubuntu`}
    >
      <h1 className="text-[5.5rem] 2xs:text-[6rem] sm:text-[7rem] lg:text-[8rem] leading-tight ">
        {unit === "metric"
          ? Math.round(weatherData.temperature.current)
          : Math.round(weatherData.temperature.current * 1.8 + 32)}
        <span className="unit-super">{unit === "metric" ? "°C" : "°F"}</span>
      </h1>
      <h2 className="description mlg:order-last italic text-[2.5rem] 2xs:text-5xl lg:text-6xl tracking-tight leading-none w-3/5 mlg:w-full min-h-28 ">
        {weatherData.description.charAt(0).toUpperCase() +
          weatherData.description.slice(1)}
      </h2>
      <div className="self-end mt-[-6rem] 2xs:mt-[-4rem] sm:mt-[-6rem] sm:mb-4 pb-5 px-3">
        <img src={icon} alt="" className="w-40 2xs:w-44 sm:w-48 mlg:w-44" />
      </div>
    </section>
  );
}

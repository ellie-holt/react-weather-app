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
      className={`${themeClass} weatherMain flex flex-col xss:mt-5 sm:mt-8 mlg:mt-3 lg:my-4 mx-4 xss:mx-12 sm:mx-16 md:mx-28 mlg:mx-8 mlg:min-w-80 lg:min-w-96 2xl:min-w-[26rem] mlg:mb-1 px-4 mlg:px-2 font-ubuntu`}
    >
      <h1 className="text-[5rem] 2xs:text-[6rem] sm:text-[6.5rem] md:text-[7rem] lg:text-[8rem] leading-normal ">
        {unit === "metric"
          ? Math.round(weatherData.temperature.current)
          : Math.round(weatherData.temperature.current * 1.8 + 32)}
        <span className="unit-super">{unit === "metric" ? "°C" : "°F"}</span>
      </h1>
      <h2 className="description mlg:order-last italic text-[2rem] 2xs:text-[3rem] sm:text-[3.5rem] lg:text-[3.7rem] tracking-tight leading-none w-3/5 mlg:w-full lg:mt-[-1rem] lg:mb-1 min-h-28">
        {weatherData.description.charAt(0).toUpperCase() +
          weatherData.description.slice(1)}
      </h2>
      <div className="self-end mt-[-7rem] 2xs:mt-[-4rem] sm:mt-[-6rem] mlg:mt-[-2rem] sm:mb-4 pb-5 px-3">
        <img
          src={icon}
          alt={weatherData.description + " icon"}
          className="w-32 h-32 2xs:w-44 2xs:h-44 sm:w-48 sm:h-48 mlg:w-44 mlg:h-44"
        />
      </div>
    </section>
  );
}

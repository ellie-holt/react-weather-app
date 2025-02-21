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
      className={`${themeClass} weatherMain flex flex-col mx-4 px-4 font-ubuntu`}
    >
      <h1 className="text-[6rem] leading-tight ">
        {unit === "metric"
          ? Math.round(weatherData.temperature.current)
          : Math.round(weatherData.temperature.current * 1.8 + 32)}
        <span className="unit">{unit === "metric" ? "°C" : "°F"}</span>
      </h1>
      <h2 className="description italic text-[3rem] tracking-tight leading-none w-3/5 min-h-28 ">
        {weatherData.description.charAt(0).toUpperCase() +
          weatherData.description.slice(1)}
      </h2>
      <div className="self-end mt-[-4rem] pb-5 px-3">
        <img src={icon} alt="" className="w-44" />
      </div>
    </section>
  );
}

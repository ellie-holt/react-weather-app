import React from "react";
import IconSelect from "../../IconSelect";
import icons from "../../img/icons";

export default function WeatherMain({ weatherData }) {
  let iconVariant = IconSelect({ weatherData });

  let icon = icons[iconVariant];

  console.log(icons.cloudy);

  console.log(iconVariant);
  console.log(icon);
  return (
    <div className="flex flex-col mx-4 px-4 font-ubuntu">
      <h1 className="text-[6rem] leading-tight ">
        {Math.round(weatherData.temperature.current)}
        <span className="unit">°C</span>
      </h1>
      <h2 className="italic text-[3rem] tracking-tight leading-none w-3/5 min-h-28">
        {weatherData.description.charAt(0).toUpperCase() +
          weatherData.description.slice(1)}
      </h2>
      <div className="self-end mt-[-4rem] pb-5 px-3">
        <img src={icon} alt="" className="w-44" />
      </div>
    </div>
  );
}

import IconSelect from "../../utils/IconSelect";
import icons from "../../img/icons";

import SetTheme from "../../utils/SetTheme";

export default function WeatherMain({ weatherData, unit, className = "", ariaLabelledBy }) {
  let iconVariant = IconSelect({ weatherData });

  let icon = icons[iconVariant];

  let themeClass = SetTheme({ weatherData });
  const description = weatherData.conditions.description;
  const currentTemp =
    unit === "metric"
      ? Math.round(weatherData.temperature.current)
      : Math.round(weatherData.temperature.current * 1.8 + 32);
  const feelsLikeTemp =
    unit === "metric"
      ? Math.round(weatherData.temperature.feels_like)
      : Math.round(weatherData.temperature.feels_like * 1.8 + 32);

  return (
    <section
      className={`${themeClass} weatherMain h-full min-h-0 flex flex-col items-center justify-center lg:justify-start 2xl:justify-center gap-y-4 pt-3 py-5 lg:py-10 2xl:py-0 2xl:min-w-[26rem] 2xl:max-w-[29rem] 3xl:min-w-[26rem] 3xl:max-w-none lg:mb-1 px-4 lg:px-3 font-ubuntu ${className}`}
      aria-labelledby={ariaLabelledBy}
    >
      <div className="flex justify-center items-end w-full mt-2 sm:mt-3">
        <div className="flex flex-1 justify-end lg:justify-center 2xl:justify-end items-end pr-2 sm:pr-4 lg:pr-0 2xl:pr-4">
          <h1 className="font-semibold 3xl:text-[6rem] text-6xl 3xs:text-7xl sm:text-[5.5rem] 2xl:text-[5.5rem] lg:text-9xl text-right 2xl:text-right lg:text-center leading-none tracking-tight">
            {currentTemp}
            <span className="unit-super">{unit === "metric" ? "°C" : "°F"}</span>
          </h1>
        </div>

        <div className="lg:hidden 2xl:block self-stretch w-px bg-black/30" aria-hidden="true" />

        <div className="lg:hidden flex 2xl:flex flex-1 justify-start pl-3 sm:pl-4 text-left leading-none">
          <div className="inline-block relative">
            <p className="2xl:left-2 3xl:left-4 bottom-full absolute mb-1 sm:mb-1.5 font-medium text-base sm:text-xl md:text-xl xl:text-2xl italic leading-tight whitespace-nowrap">
              Feels like
            </p>
            <p className="feels-like-temp font-semibold text-4xl 3xs:text-5xl sm:text-6xl 2xl:text-6xl 3xl:text-[4.5rem] leading-none whitespace-nowrap">
              {feelsLikeTemp}
              <span className="unit-top">{unit === "metric" ? "°C" : "°F"}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center self-center min-w-0 text-center">
        <img
          src={icon}
          alt={description + " icon"}
          className="w-36 3xs:w-44 sm:w-52 md:w-56 lg:w-52 xl:w-56 h-36 3xs:h-44 sm:h-52 md:h-56 lg:h-52 xl:h-56"
        />

        <h2 className="max-w-[14ch] mt-3 font-medium text-xl 3xs:text-2xl sm:text-3xl lg:text-4xl text-center italic leading-tight tracking-tight description">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </h2>
      </div>
    </section>
  );
}

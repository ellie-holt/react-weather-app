import FormattedDateTime from "../../utils/FormattedDateTime";
import IconSelect from "../../utils/IconSelect";
import icons from "../../img/icons";
import Card from "../ui/Card";

export default function DayCard({
  dailyForecast,
  unit,
  orientation = "horizontal",
  className = "",
}) {
  const isHorizontal = orientation === "horizontal";
  let iconVariant = IconSelect({ dailyForecast });
  let icon = icons[iconVariant];
  return (
    <Card variant="plain" className={`carousel-item dayCard dayCard--${orientation} ${className}`}>
      <h2
        className={`weekDay ${isHorizontal ? "text-center leading-snug" : "text-left leading-tight"}`}
      >
        <span
          className={`block font-semibold ${isHorizontal ? "text-base sm:text-lg" : "text-base 2xs:text-lg sm:text-xl font-bold"}`}
        >
          <FormattedDateTime timestamp={dailyForecast.time * 1000} format={`weekday`} />
        </span>
        <span
          className={`block font-medium opacity-90 ${isHorizontal ? "text-xs sm:text-sm" : "text-xs 2xs:text-sm sm:text-base"}`}
        >
          <FormattedDateTime timestamp={dailyForecast.time * 1000} format={`day_ _month`} />
        </span>
      </h2>

      <div className="flex flex-col items-center justify-center text-center min-w-0">
        <img
          src={icon}
          alt={dailyForecast.condition.description + " icon"}
          className={`icon ${isHorizontal ? "w-10 h-10 sm:w-12 sm:h-12" : "w-14 h-14 sm:w-16 sm:h-16"}`}
        />
        <p
          className={`description italic font-medium truncate ${
            isHorizontal
              ? "mt-0.5 max-w-[14ch] text-xs sm:text-sm leading-snug"
              : "mt-1 text-xs sm:text-sm leading-snug max-w-[12ch]"
          }`}
        >
          {dailyForecast.condition.description.charAt(0).toUpperCase() +
            dailyForecast.condition.description.slice(1)}
        </p>
      </div>

      <h3
        className={`temp font-semibold whitespace-nowrap ${
          isHorizontal
            ? "text-center text-3xl sm:text-4xl leading-none"
            : "text-4xl sm:text-5xl leading-none text-right"
        }`}
      >
        {unit === "metric"
          ? Math.round(dailyForecast.temperature.day)
          : Math.round(dailyForecast.temperature.day * 1.8 + 32)}
        <span className="unit-super">{unit === "metric" ? "°C" : "°F"}</span>
      </h3>
    </Card>
  );
}

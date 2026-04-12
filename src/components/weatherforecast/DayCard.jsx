import FormattedDateTime from "../../utils/FormattedDateTime";
import IconSelect from "../../utils/IconSelect";
import icons from "../../img/icons";
import Card from "../ui/Card";

export default function DayCard({
  dailyForecast,
  unit,
  orientation = "horizontal",
  isLoading = false,
  className = "",
}) {
  const isHorizontal = orientation === "horizontal";
  const dayCardSpacingClass = isHorizontal
    ? "py-3 gap-y-2"
    : "gap-x-3 px-[var(--space-inside-inline)] sm:px-[var(--space-inside-inline-lg)] py-[var(--space-inside-block)] sm:py-[var(--space-inside-block-lg)]";

  if (isLoading) {
    return (
      <Card
        className={`carousel-item dayCard dayCard--${orientation} ${dayCardSpacingClass} ${className}`}
        aria-busy="true"
      >
        <h2
          className={`${isHorizontal ? "text-center leading-snug" : "text-left leading-tight"}`}
          aria-hidden="true"
        >
          <span
            className={`block font-semibold ${isHorizontal ? "text-base sm:text-lg" : "text-base 2xs:text-lg sm:text-xl font-bold"}`}
          >
            <span
              className={`block rounded bg-black/15 animate-pulse ${
                isHorizontal ? "h-5 w-20 sm:h-6 sm:w-24 mx-auto" : "h-5 w-24 sm:h-6 sm:w-28"
              }`}
            />
          </span>
          <span
            className={`block font-medium opacity-90 ${isHorizontal ? "text-xs sm:text-sm" : "text-xs 2xs:text-sm sm:text-base"}`}
          >
            <span
              className={` block rounded bg-black/10 animate-pulse ${
                isHorizontal ? "my-1.5 h-3 w-24 sm:h-4 sm:w-28 mx-auto" : "h-3 w-28 sm:h-4 sm:w-32"
              }`}
            />
          </span>
        </h2>

        <div className="flex flex-col justify-center items-center min-w-0 text-center">
          <div
            className={`rounded-full bg-black/15 animate-pulse ${
              isHorizontal ? "w-10 h-10 sm:w-12 sm:h-12" : "mt-2 w-14 h-14 sm:w-16 sm:h-16"
            }`}
            aria-hidden="true"
          />
          <p
            className={`description italic font-medium truncate ${
              isHorizontal
                ? "mt-0.5 max-w-[14ch] text-xs sm:text-sm leading-snug"
                : "mt-1 text-xs sm:text-sm leading-snug max-w-[12ch]"
            }`}
            aria-hidden="true"
          >
            <span
              className={`block rounded bg-black/10 animate-pulse ${
                isHorizontal ? "h-3 w-20 sm:h-4 sm:w-24" : "mb-2 h-3 w-24 sm:h-4 sm:w-28"
              }`}
            />
          </p>
        </div>

        <h3
          className={`temp font-semibold whitespace-nowrap ${
            isHorizontal
              ? "text-center text-3xl sm:text-4xl leading-none"
              : "text-4xl sm:text-5xl leading-none text-right"
          }`}
          aria-hidden="true"
        >
          <span
            className={`inline-block rounded bg-black/15 animate-pulse ${
              isHorizontal ? "h-9 w-20 sm:h-10 sm:w-24" : "h-11 w-24 sm:h-12 sm:w-28"
            }`}
          />
        </h3>
      </Card>
    );
  }

  let iconVariant = IconSelect({ dailyForecast });
  let icon = icons[iconVariant];
  return (
    <Card
      className={`carousel-item dayCard dayCard--${orientation} ${dayCardSpacingClass} ${className}`}
    >
      <h2 className={`${isHorizontal ? "text-center leading-snug" : "text-left leading-tight"}`}>
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

      <div className="flex flex-col justify-center items-center min-w-0 text-center">
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

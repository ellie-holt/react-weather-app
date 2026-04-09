import CustomAccordion from "../ui/Accordion";

import SetTheme from "../../utils/SetTheme";

export default function WeatherTable({ weatherData, unit, className = "", ariaLabelledBy }) {
  let themeClass = SetTheme({ weatherData });
  const location = weatherData.location;
  const conditions = weatherData.conditions;
  const atmosphere = weatherData.atmosphere;
  const wind = weatherData.wind;

  const toDisplayTemp = temp => {
    if (temp == null) return "—";
    return unit === "metric" ? Math.round(temp) : Math.round(temp * 1.8 + 32);
  };

  const formatLocalDateTime = (timestampSec, timezoneOffsetSec, options) => {
    if (timestampSec == null) return "—";
    const shifted = new Date((timestampSec + (timezoneOffsetSec ?? 0)) * 1000);
    return new Intl.DateTimeFormat(undefined, {
      ...options,
      timeZone: "UTC",
    }).format(shifted);
  };

  const formatWindDirection = degrees => {
    if (degrees == null || Number.isNaN(degrees)) return "—";
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };

  const feelsLikeTemp = toDisplayTemp(weatherData.temperature.feels_like);
  const visibilityKm =
    conditions.visibility == null
      ? "—"
      : (conditions.visibility / 1000).toFixed(1).replace(/\.0$/, "");
  const tempUnit = unit === "metric" ? "°C" : "°F";
  const cityCountry = [location.city, location.country].filter(Boolean).join(", ");
  const sunrise = formatLocalDateTime(location.sunrise, location.timezone, {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunset = formatLocalDateTime(location.sunset, location.timezone, {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formatWithSubUnit = (value, subUnit) => {
    if (value == null || value === "—") return "—";

    return (
      <span>
        {value}
        <span className="unit-sub">{subUnit}</span>
      </span>
    );
  };

  const formatTempValue = value => {
    if (value === "—") return "—";

    return (
      <>
        {value}
        <span className="unit-top">{tempUnit}</span>
      </>
    );
  };

  const formatWindSummary = () => {
    if (wind.speed == null) return "—";
    const speed = Number(wind.speed).toFixed(1).replace(/\.0$/, "");
    const direction = formatWindDirection(wind.direction);
    return formatWithSubUnit(speed, `m/s ${direction === "—" ? "" : direction}`.trim());
  };

  const summaryRows = [
    { label: "Feels like", value: formatTempValue(feelsLikeTemp) },
    {
      label: "Humidity",
      value: atmosphere.humidity != null ? `${atmosphere.humidity}%` : "—",
    },
    {
      label: "Wind",
      value: formatWindSummary(),
    },
    {
      label: "Visibility",
      value: formatWithSubUnit(visibilityKm, "km"),
    },
  ];

  const detailGroups = [
    {
      title: "Sky",
      rows: [
        {
          label: "Cloud cover",
          value: conditions.cloud_cover != null ? `${conditions.cloud_cover}%` : "—",
        },
        {
          label: "Rain (1h)",
          value: formatWithSubUnit(conditions.rain_1h, "mm"),
          show: conditions.rain_1h != null,
        },
        {
          label: "Snow (1h)",
          value: formatWithSubUnit(conditions.snow_1h, "mm"),
          show: conditions.snow_1h != null,
        },
      ],
    },
    {
      title: "Wind",
      rows: [
        { label: "Wind speed", value: formatWithSubUnit(wind.speed, "m/s") },
        {
          label: "Wind dir.",
          value:
            wind.direction != null
              ? `${wind.direction}° (${formatWindDirection(wind.direction)})`
              : "—",
        },
        {
          label: "Wind gust",
          value: formatWithSubUnit(wind.gust, "m/s"),
          show: wind.gust != null,
        },
      ],
    },
    {
      title: "Sun",
      rows: [
        { label: "Sunrise", value: sunrise },
        { label: "Sunset", value: sunset },
      ],
    },
    {
      title: "Pressure",
      rows: [
        {
          label: "Pressure",
          value: formatWithSubUnit(atmosphere.pressure, "hPa"),
        },
        {
          label: "Sea level",
          value: formatWithSubUnit(atmosphere.sea_level, "hPa"),
          show: atmosphere.sea_level != null,
        },
        {
          label: "Ground level",
          value: formatWithSubUnit(atmosphere.ground_level, "hPa"),
          show: atmosphere.ground_level != null,
        },
      ],
    },
  ];

  return (
    <section
      className={`${themeClass} weatherTable min-w-[18rem] px-6 py-5 lg:py-8 3xs:px-12 2xs:px-14 lg:px-8 ${className}`}
      aria-labelledby={ariaLabelledBy}
    >
      <div className="weather-report-shell">
        <header className="weather-report-header px-4 pt-4 pb-2 sm:px-5 sm:pt-5">
          <h3 className="text-lg sm:text-xl font-semibold text-center">{cityCountry || "—"}</h3>
        </header>

        <table className="table-content weather-report-table" aria-label="Weather summary">
          <tbody className="weather-report-body">
            {summaryRows.map(row => (
              <tr
                key={`summary-${row.label}`}
                className="weather-report-row weather-report-item-row"
              >
                <th className="weather-report-key weather-report-item-key">{row.label}</th>
                <td className="weather-report-value">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <CustomAccordion
          rootClassName="weather-report-accordion"
          triggerClassName="weather-report-more-toggle"
          contentClassName="weather-report-more-content"
          summary={<span className="font-semibold text-center">More details</span>}
          details={
            <table className="table-content weather-report-table weather-report-table--details">
              <tbody className="weather-report-body">
                {detailGroups.flatMap(group => [
                  <tr
                    key={`${group.title}-header`}
                    className="weather-report-row weather-report-section-row"
                  >
                    <th
                      className="weather-report-key weather-report-section-title text-xs sm:text-sm uppercase tracking-wide opacity-80"
                      colSpan="2"
                    >
                      {group.title}
                    </th>
                  </tr>,
                  ...group.rows
                    .filter(row => row.show !== false)
                    .map((row, rowIndex, visibleRows) => (
                      <tr
                        key={`${group.title}-${row.label}`}
                        className={`weather-report-row weather-report-item-row ${
                          rowIndex === visibleRows.length - 1 ? "weather-report-item-row--last" : ""
                        }`}
                      >
                        <th className="weather-report-key weather-report-item-key">{row.label}</th>
                        <td className="weather-report-value">{row.value}</td>
                      </tr>
                    )),
                ])}
              </tbody>
            </table>
          }
        />
      </div>
    </section>
  );
}

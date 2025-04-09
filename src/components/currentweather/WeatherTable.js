import React from "react";

import Accordion from "../Accordion";

import SetTheme from "../../SetTheme";

export default function WeatherTable({ weatherData, unit }) {
  let themeClass = SetTheme({ weatherData });
  console.log(weatherData);
  return (
    <section
      className={`${themeClass} weatherTable mx-2 xs:mx-7 sm:mx-12 md:mx-20 mlg:mx-2 lg:mx-2 mb-6 px-3 py-2 mlg:mb-0`}
    >
      <Accordion
        summary={
          <table className="table-header md:min-w-96">
            <tbody>
              <tr className="pt-0.5">
                <th className="flex-initial truncate sm:flex-auto">
                  Min / Max
                </th>
                <td className="text-nowrap">
                  {unit === "metric"
                    ? Math.round(weatherData.temperature.min)
                    : Math.round(weatherData.temperature.min * 1.8 + 32)}
                  <span className="unit-super">
                    {unit === "metric" ? "°C" : "°F"}
                  </span>
                  {" / "}
                  {unit === "metric"
                    ? Math.round(weatherData.temperature.max)
                    : Math.round(weatherData.temperature.max * 1.8 + 32)}
                  <span className="unit-super">
                    {unit === "metric" ? "°C" : "°F"}
                  </span>
                </td>
                <th className="flex-initial truncate sm:flex-auto">
                  Feels like
                </th>
                <td className="">
                  {unit === "metric"
                    ? Math.round(weatherData.temperature.feels_like)
                    : Math.round(weatherData.temperature.feels_like * 1.8 + 32)}
                  <span className="unit-super">
                    {unit === "metric" ? "°C" : "°F"}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        }
        details={
          <table className="table-content mx-[auto]">
            <tbody>
              <tr>
                <th>Humidity</th>
                <td>{weatherData.humidity}%</td>
              </tr>
              <tr>
                <th>Wind speed</th>
                <td>
                  {weatherData.wind.speed}
                  <span className="unit-sub">m/s</span>
                </td>
              </tr>
              <tr>
                <th>Wind dir.</th>
                <td>
                  {weatherData.wind.direction}
                  <span className="unit-sub">deg</span>
                </td>
              </tr>
              <tr>
                <th>Cloud cover</th>
                <td>{weatherData.cloud_cover}%</td>
              </tr>
              <tr>
                <th>Visibility</th>
                <td>
                  {weatherData.visibility / 1000}
                  <span className="unit-sub">km</span>
                </td>
              </tr>
              <tr>
                <th>Pressure</th>
                <td>
                  {weatherData.pressure}
                  <span className="unit-sub">hPa</span>
                </td>
              </tr>
            </tbody>
          </table>
        }
      />
    </section>
  );
}

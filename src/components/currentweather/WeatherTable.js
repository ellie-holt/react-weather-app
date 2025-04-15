import React from "react";

import Accordion from "../Accordion";

import SetTheme from "../../SetTheme";

export default function WeatherTable({ weatherData, unit }) {
  let themeClass = SetTheme({ weatherData });
  return (
    <section
      className={`${themeClass} weatherTable mx-5 2xs:mx-6 xs:mx-10 sm:mx-28 md:mx-32 mlg:mx-2 mb-6 mlg:mb-0`}
    >
      <Accordion
        summary={
          <table className="table-header md:min-w-96">
            <tbody>
              <tr className="temp-data">
                <td className="2xs:pl-10 2xl:pl-4 text-nowrap basis-1/3">
                  {unit === "metric"
                    ? Math.round(weatherData.temperature.min)
                    : Math.round(weatherData.temperature.min * 1.8 + 32)}
                  <span className="unit-top">
                    {unit === "metric" ? "°C" : "°F"}
                  </span>
                  {" / "}
                  {unit === "metric"
                    ? Math.round(weatherData.temperature.max)
                    : Math.round(weatherData.temperature.max * 1.8 + 32)}
                  <span className="unit-top">
                    {unit === "metric" ? "°C" : "°F"}
                  </span>
                </td>
                <th className="flex-initial pl-0 truncate">Feels like</th>
                <td className="">
                  {unit === "metric"
                    ? Math.round(weatherData.temperature.feels_like)
                    : Math.round(weatherData.temperature.feels_like * 1.8 + 32)}
                  <span className="unit-top">
                    {unit === "metric" ? "°C" : "°F"}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        }
        details={
          <table className="table-content">
            <tbody className="grid grid-rows-6">
              <tr>
                <th>Humidity</th>
                <td>{weatherData.humidity}%</td>
              </tr>
              <tr>
                <th>Wind speed</th>
                <td>
                  <span>
                    {weatherData.wind.speed}
                    <span className="unit-sub">m/s</span>
                  </span>
                </td>
              </tr>
              <tr>
                <th>Wind dir.</th>
                <td>
                  <span>
                    {weatherData.wind.direction}
                    <span className="unit-sub">deg</span>
                  </span>
                </td>
              </tr>
              <tr>
                <th>Cloud cover</th>
                <td>{weatherData.cloud_cover}%</td>
              </tr>
              <tr>
                <th>Visibility</th>
                <td>
                  <span>
                    {weatherData.visibility / 1000}
                    <span className="unit-sub">km</span>
                  </span>
                </td>
              </tr>
              <tr>
                <th>Pressure</th>
                <td>
                  <span>
                    {weatherData.pressure}
                    <span className="unit-sub">hPa</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        }
      />
    </section>
  );
}

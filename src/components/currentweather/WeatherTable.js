import React from "react";

import Accordion from "../Accordion";

import SetTheme from "../../SetTheme";

export default function WeatherTable({ weatherData }) {
  let themeClass = SetTheme({ weatherData });
  console.log(weatherData);
  return (
    <section className={`${themeClass} card weatherTable mx-4 mb-6 px-4 py-2`}>
      <Accordion
        title={
          <thead>
            <tr>
              <th>Min</th>
              <td>
                {Math.round(weatherData.temperature.min)}
                <span className="unit">°C</span>
              </td>
              <th>Max</th>
              <td>
                {Math.round(weatherData.temperature.max)}
                <span className="unit">°C</span>
              </td>
              <th>Feels like</th>
              <td>
                {Math.round(weatherData.temperature.feels_like)}
                <span className="unit">°C</span>
              </td>
            </tr>
          </thead>
        }
        content={
          <table className="mx-[auto]">
            <tbody>
              <tr>
                <th>Humidity</th>
                <td>{weatherData.humidity}%</td>
              </tr>
              <tr>
                <th>Wind speed</th>
                <td>
                  {weatherData.wind.speed}
                  <span className="unit">m/s</span>
                </td>
              </tr>
              <tr>
                <th>Wind dir.</th>
                <td>
                  {weatherData.wind.direction}
                  <span className="unit">deg</span>
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
                  <span className="unit">km</span>
                </td>
              </tr>
              <tr>
                <th>Pressure</th>
                <td>
                  {weatherData.pressure}
                  <span className="unit">hPa</span>
                </td>
              </tr>
            </tbody>
          </table>
        }
      />
    </section>
  );
}

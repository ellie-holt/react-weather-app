import React from "react";

import Accordion from "../Accordion";

export default function WeatherTable({ weatherData }) {
  return (
    <div className="">
      <Accordion
        title="Weather Details"
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
    </div>
  );
}

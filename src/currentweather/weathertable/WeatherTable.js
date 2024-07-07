import React from "react";

import "./WeatherTable.scss";

export default function WeatherTable({ weatherData }) {
  return (
    <div className="weatherTable">
      <table>
        <tbody>
          <tr>
            <th>Humidity</th>
            <td>{weatherData.humidity}</td>
          </tr>
          <tr>
            <th>Pressure</th>
            <td>{weatherData.pressure}</td>
          </tr>
          <tr>
            <th>Cloud cover</th>
            <td>{weatherData.cloud_cover}%</td>
          </tr>
          <tr>
            <th>Visibility</th>
            <td>{weatherData.visibility}</td>
          </tr>
          <tr>
            <th>Wind speed</th>
            <td>{weatherData.wind.speed}</td>
          </tr>
          <tr>
            <th>Wind direction</th>
            <td>{weatherData.wind.direction}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

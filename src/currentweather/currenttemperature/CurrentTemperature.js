import React from "react";

import "./CurrentTemperature.scss";

export default function CurrentTemperature({ temperatureData }) {
  return (
    console.log(temperatureData),
    (
      <div className="currentTemperature card">
        <h2 className="temp">
          {Math.round(temperatureData.current)}
          <span className="tempUnit">°C</span>
        </h2>
        <div className="tempData">
          <table>
            <tbody>
              <tr className="tempMin">
                <th>Min</th>
                <td>
                  {Math.round(temperatureData.min)}
                  <span className="tempUnit">°C</span>
                </td>
              </tr>
              <tr className="tempMax">
                <th>Max</th>
                <td>
                  {Math.round(temperatureData.max)}
                  <span className="tempUnit">°C</span>
                </td>
              </tr>
              <tr className="tempFeelsLike">
                <th>Feels like</th>
                <td>
                  {Math.round(temperatureData.feels_like)}
                  <span className="tempUnit">°C</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  );
}

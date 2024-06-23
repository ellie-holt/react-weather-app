import React from "react";

import "./CurrentWeather.scss";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="cityInfo">
        <h2 className="cityName">London</h2>
        <h3 className="currentDate">Tuesday 1st November</h3>
        <h2 className="currentTime">15:52</h2>
      </div>
      <div className="cityWeather">
        <div className="weatherMain">
          <h2 className="description">Clear sky</h2>
          <div className="icon">☀︎</div>
        </div>
        <div className="weatherTemp">
          <h2 className="temp">
            17<span className="tempUnit">°C</span>
          </h2>
          <div className="tempData">
            <table>
              <tr className="tempMin">
                <th>Min</th>
                <td>
                  13<span className="tempUnit">°C</span>
                </td>
              </tr>
              <tr className="tempMax">
                <th>Max</th>
                <td>
                  19<span className="tempUnit">°C</span>
                </td>
              </tr>
              <tr className="tempFeelsLike">
                <th>Feels like</th>
                <td>
                  16<span className="tempUnit">°C</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="weatherTable">
          <table>
            <tbody>
              <tr>
                <th>Humidity</th>
                <td>68</td>
              </tr>
              <tr>
                <th>Pressure</th>
                <td>1025</td>
              </tr>
              <tr>
                <th>Cloud cover</th>
                <td>75%</td>
              </tr>
              <tr>
                <th>Visibility</th>
                <td>10000</td>
              </tr>
              <tr>
                <th>Wind speed</th>
                <td>5.14</td>
              </tr>
              <tr>
                <th>Wind direction</th>
                <td>360</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

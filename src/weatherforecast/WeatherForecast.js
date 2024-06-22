import React from "react";

import "./WeatherForecast.scss";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <article className="dayCard">
        <h2 className="weekDay">Mon</h2>
        <h3 className="temp">
          14<span className="tempUnit">°C</span>
        </h3>
        <div className="icon">☀︎</div>
        <p className="description">Light rain</p>
      </article>
      <article className="dayCard">
        <h2 className="weekDay">Tue</h2>
        <h3 className="temp">
          14<span className="tempUnit">°C</span>
        </h3>
        <div className="icon">☀︎</div>
        <p className="description">Light rain</p>
      </article>
      <article className="dayCard">
        <h2 className="weekDay">Wed</h2>
        <h3 className="temp">
          14<span className="tempUnit">°C</span>
        </h3>
        <div className="icon">☀︎</div>
        <p className="description">Light rain</p>
      </article>
      <article className="dayCard">
        <h2 className="weekDay">Thur</h2>
        <div className="icon">☀︎</div>
        <h3 className="temp">
          14<span className="tempUnit">°C</span>
        </h3>
        <p className="description">Light rain</p>
      </article>
      <article className="dayCard">
        <h2 className="weekDay">Fri</h2>
        <h3 className="temp">
          14<span className="tempUnit">°C</span>
        </h3>
        <div className="icon">☀︎</div>
        <p className="description">Light rain</p>
      </article>
      <article className="dayCard">
        <h2 className="weekDay">Sat</h2>
        <h3 className="temp">
          14<span className="tempUnit">°C</span>
        </h3>
        <div className="icon">☀︎</div>
        <p className="description">Light rain</p>
      </article>
      <article className="dayCard">
        <h2 className="weekDay">Sun</h2>
        <h3 className="temp">
          14<span className="tempUnit">°C</span>
        </h3>
        <div className="icon">☀︎</div>
        <p className="description">Light rain</p>
      </article>
    </div>
  );
}

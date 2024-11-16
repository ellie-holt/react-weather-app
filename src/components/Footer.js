import React from "react";

export default function Footer() {
  return (
    <div className="card px-4 py-2 text-center">
      <p>This weather app was made with ♡ by</p>
      <p>
        <a
          href="https://github.com/ellie-holt"
          target="_blank"
          rel="noreferrer"
        >
          Ellie Holt
        </a>
      </p>
      <p>
        <a
          href="https://github.com/ellie-holt/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-source code
        </a>
      </p>
    </div>
  );
}

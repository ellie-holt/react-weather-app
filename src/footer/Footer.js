import React from "react";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="Footer">
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

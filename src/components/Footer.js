import React from "react";

export default function Footer() {
  return (
    <div className="card px-4 py-2 text-center">
      <p>This weather app was made with ♡ by</p>
      <p className="font-bold leading-relaxed">
        <a
          href="https://github.com/ellie-holt"
          target="_blank"
          rel="noreferrer"
        >
          Ellie Holt
        </a>
        <hr className="border-black border-opacity-20 my-1 mx-10" />
      </p>
      <p className="text-xs leading-relaxed font-mono">
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

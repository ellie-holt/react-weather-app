import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="curved-edge h-20 bg-white"></div>
      <div className="py-5 bg-white text-center">
        <p>This weather app was made with ♡ by</p>
        <p className="font-bold leading-relaxed">
          <a
            href="https://github.com/ellie-holt"
            target="_blank"
            rel="noreferrer"
          >
            Ellie Holt
          </a>
        </p>
        <hr className="border-black border-opacity-20 my-1 mx-10" />
        <p className="text-xs leading-relaxed font-mono">
          <a
            href="https://github.com/ellie-holt/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>
        </p>
        <p>
          Icons created by
          <a
            href="https://www.flaticon.com/free-icons/cloudy"
            target="_blank"
            rel="noreferrer"
            title="cloudy icons"
          >
            {" "}
            Freepik
          </a>{" "}
          at{" "}
          <a
            href="https://www.flaticon.com/free-icons/cloudy"
            title="cloudy icons"
          >
            Flaticon
          </a>
        </p>
      </div>
    </div>
  );
}

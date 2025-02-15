import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="curved-edge h-20 bg-white"></div>
      <footer className="py-5 h-64 text-center bg-white">
        <p className="text-base mt-2">
          Open-source{" "}
          <a
            href="https://github.com/ellie-holt/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="font-bold font-mono"
          >
            code
          </a>{" "}
          by{" "}
          <a
            href="https://github.com/ellie-holt"
            target="_blank"
            rel="noreferrer"
            className="font-bold"
          >
            Ellie Holt
          </a>
        </p>
        <hr className="border-black border-opacity-20 my-3 mx-10" />
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
      </footer>
    </div>
  );
}

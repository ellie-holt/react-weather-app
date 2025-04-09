import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      {/* <div className="h-20 bg-white curved-edge"></div> */}
      <footer className="rounded-tr-full pb-10 pt-7 xs:pt-5 px-4 mt-4 flex flex-col justify-start w-5/6 shadow-[4px_-4px_5px_rgba(0,0,0,0.1)]">
        <p className="px-1 mt-2 text-base">
          Open-source{" "}
          <a
            href="https://github.com/ellie-holt/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="font-mono font-bold"
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
        <hr className="w-2/3 my-3 border-black border-opacity-20" />
        <p className="px-1">
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

import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      {/* <div className="h-20 bg-white curved-edge"></div> */}
      <footer className="rounded-tr-full pb-6 xs:pb-12 pt-4 xs:pt-5 px-6 mt-4 flex flex-col justify-start w-[87%] xs:w-5/6 lg:w-3/4 shadow-[4px_-4px_5px_rgba(0,0,0,0.1)]">
        <p className="mt-2 text-base mlg:mt-4 xs:text-lg">Open-source </p>
        <p className="text-base xs:text-lg">
          <a
            href="https://github.com/ellie-holt/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="font-mono font-bold"
          >
            code{" "}
          </a>
          by
          <a
            href="https://github.com/ellie-holt"
            target="_blank"
            rel="noreferrer"
            className="font-mono font-bold"
          >
            {" "}
            Ellie Holt
          </a>
        </p>
        <hr className="w-2/3 my-3 border-black border-opacity-20" />
        <p className="text-sm xs:text-base">
          Icons by
          <a
            href="https://www.flaticon.com/packs/weather-157"
            target="_blank"
            rel="noreferrer"
            title="cloudy icons"
            className="font-mono font-bold"
          >
            {" "}
            Freepik{" "}
          </a>
          at
          <a
            href="https://www.flaticon.com"
            title="cloudy icons"
            target="_blank"
            rel="noreferrer"
            className="font-mono font-bold"
          >
            {" "}
            Flaticon
          </a>
        </p>
      </footer>
    </div>
  );
}

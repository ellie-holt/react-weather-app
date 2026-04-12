export default function Footer() {
  return (
    <div className="rounded-tr-xl px-[var(--space-outside-inline)] sm:px-[var(--space-outside-inline-lg)] py-[var(--space-outside-block)] sm:py-[var(--space-outside-block-lg)] mt-4 flex flex-col justify-start w-[87%] 2xs:w-5/6 lg:w-full shadow-[4px_-4px_5px_rgba(0,0,0,0.1)]">
      <p className="mt-2 text-base lg:mt-4 sm:text-lg">Open-source </p>
      <p className="text-base sm:text-lg">
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
      <p className="text-sm sm:text-base">
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
    </div>
  );
}

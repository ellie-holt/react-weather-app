import { useEffect, useState } from "react";

import DayCard from "./DayCard";
import Carousel from "../ui/Carousel";

import SetTheme from "../../utils/SetTheme";
import loadingOpacity from "../../utils/loadingOpacity";

export default function WeatherForecast({ weatherState, forecastState, unit }) {
  let themeClass = SetTheme(weatherState.data);
  const { data, loading } = forecastState;
  const [is2xlUp, setIs2xlUp] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(min-width: 1280px)").matches : false
  );
  const [isXsDown, setIsXsDown] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 639px)").matches : false
  );
  const [isBelow2xs, setIsBelow2xs] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 474px)").matches : false
  );
  const [is2xsDown, setIs2xsDown] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 549px)").matches : false
  );
  const carouselOrientation = is2xlUp ? "vertical" : "horizontal";
  const visibleCards = isBelow2xs ? 2 : isXsDown ? 3 : 4;
  const carouselButtonVariant = is2xsDown ? "roundSm" : "round";

  useEffect(() => {
    const mediaQuery2xlUp = window.matchMedia("(min-width: 1280px)");
    const mediaQueryXsDown = window.matchMedia("(max-width: 639px)");
    const mediaQueryBelow2xs = window.matchMedia("(max-width: 474px)");
    const mediaQuery2xsDown = window.matchMedia("(max-width: 549px)");

    const handle2xlUpChange = event => {
      setIs2xlUp(event.matches);
    };

    const handleXsDownChange = event => {
      setIsXsDown(event.matches);
    };

    const handleBelow2xsChange = event => {
      setIsBelow2xs(event.matches);
    };

    const handle2xsDownChange = event => {
      setIs2xsDown(event.matches);
    };

    setIs2xlUp(mediaQuery2xlUp.matches);
    setIsXsDown(mediaQueryXsDown.matches);
    setIsBelow2xs(mediaQueryBelow2xs.matches);
    setIs2xsDown(mediaQuery2xsDown.matches);
    mediaQuery2xlUp.addEventListener("change", handle2xlUpChange);
    mediaQueryXsDown.addEventListener("change", handleXsDownChange);
    mediaQueryBelow2xs.addEventListener("change", handleBelow2xsChange);
    mediaQuery2xsDown.addEventListener("change", handle2xsDownChange);

    return () => {
      mediaQuery2xlUp.removeEventListener("change", handle2xlUpChange);
      mediaQueryXsDown.removeEventListener("change", handleXsDownChange);
      mediaQueryBelow2xs.removeEventListener("change", handleBelow2xsChange);
      mediaQuery2xsDown.removeEventListener("change", handle2xsDownChange);
    };
  }, []);

  // if (forecastState.loading) return "Loading forecast...";
  // if (forecastState.error) return `Error: ${forecastState.error}`;
  // if (!data) return "No forecast data available.";

  return (
    <div className="weatherForecast max-h-[44rem] py-5 px-2 lg:px-0 h-auto">
      {!loading && (
        <Carousel
          as="article"
          showButtons
          buttonVariant={carouselButtonVariant}
          orientation={carouselOrientation}
          visibleCards={visibleCards}
          gap={10}
          className={`${themeClass} ${loadingOpacity(loading)} h-full min-h-0 styled-scrollbar`}
        >
          {data.map(
            (day, index) =>
              index > 0 && (
                <DayCard dailyForecast={day} unit={unit} orientation={carouselOrientation} />
              )
          )}
        </Carousel>
      )}
    </div>
  );
}

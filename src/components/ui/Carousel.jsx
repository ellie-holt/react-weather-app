import { useRef } from "react";
import { Children } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

export default function Carousel({
  as: Component = "div",
  className = "",
  children,
  visibleCards = 1,
  showButtons = false,
  buttonVariant = "round",
  orientation = "horizontal",
  gap = 8,
  enableSnap = true,
  enableSmoothScroll = true,
  style,
  ...props
}) {
  const carouselRef = useRef(null);
  const isVertical = orientation === "vertical";
  const isSmallRoundButton = buttonVariant === "roundSm";
  const safeVisibleCards = Math.max(1, Number(visibleCards) || 1);
  const gapValue = typeof gap === "number" ? `${gap}px` : gap;
  const itemSize = `calc((100% - (${safeVisibleCards - 1} * ${gapValue})) / ${safeVisibleCards})`;
  const snapAxisClass = isVertical ? "snap-y" : "snap-x";

  function scrollByItem(step) {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const items = Array.from(carousel.children);
    if (!items.length) return;

    const currentPosition = isVertical ? carousel.scrollTop : carousel.scrollLeft;
    const positions = items.map(item => (isVertical ? item.offsetTop : item.offsetLeft));

    let currentIndex = 0;
    let bestDistance = Number.POSITIVE_INFINITY;

    positions.forEach((pos, index) => {
      const distance = Math.abs(pos - currentPosition);
      if (distance < bestDistance) {
        bestDistance = distance;
        currentIndex = index;
      }
    });

    const targetIndex = Math.min(Math.max(currentIndex + step, 0), items.length - 1);
    const target = items[targetIndex];
    const targetPosition = isVertical ? target.offsetTop : target.offsetLeft;

    carousel.scrollTo({
      top: isVertical ? targetPosition : carousel.scrollTop,
      left: isVertical ? carousel.scrollLeft : targetPosition,
      behavior: "smooth",
    });
  }

  const slotStyle = {
    flex: `0 0 ${itemSize}`,
    ...(isVertical
      ? { height: itemSize, maxHeight: itemSize }
      : { width: itemSize, maxWidth: itemSize }),
  };

  const slottedChildren = Children.toArray(children).map((child, index) => (
    <div
      key={
        (child && typeof child === "object" && "key" in child && child.key) ||
        `carousel-slot-${index}`
      }
      className={`carousel-slot min-h-0 min-w-0 ${enableSnap ? "snap-start" : ""}`}
      style={slotStyle}
    >
      {child}
    </div>
  ));

  const carouselContent = (
    <Component
      ref={carouselRef}
      className={`w-full h-full min-h-0 min-w-0 ${isVertical ? "flex flex-col overflow-y-auto overflow-x-visible" : "flex flex-row overflow-x-auto overflow-y-hidden"} ${enableSmoothScroll ? "scroll-smooth" : ""} ${enableSnap ? `${snapAxisClass} snap-mandatory` : ""} ${className}`}
      style={{
        ...style,
        gap: gapValue,
      }}
      {...props}
    >
      {slottedChildren}
    </Component>
  );

  if (!showButtons) {
    return carouselContent;
  }

  const prevButton = (
    <Button
      variant={buttonVariant}
      className="pointer-events-auto text-lg"
      aria-label="Scroll to previous item"
      onClick={() => scrollByItem(-1)}
    >
      <FontAwesomeIcon
        icon={faCaretDown}
        className={`button-caret ${isSmallRoundButton ? "button-caret--sm" : ""} ${isVertical ? "rotate-180" : "rotate-90"}`}
      />
    </Button>
  );

  const nextButton = (
    <Button
      variant={buttonVariant}
      className="pointer-events-auto text-lg"
      aria-label="Scroll to next item"
      onClick={() => scrollByItem(1)}
    >
      <FontAwesomeIcon
        icon={faCaretDown}
        className={`button-caret ${isSmallRoundButton ? "button-caret--sm" : ""} ${isVertical ? "rotate-0" : "-rotate-90"}`}
      />
    </Button>
  );

  if (isVertical) {
    return (
      <div className="relative min-h-44 2xl:min-h-0 min-w-0 h-full w-full grid grid-rows-[auto_1fr_auto] gap-2 place-content-stretch">
        <div className="flex justify-center">{prevButton}</div>
        <div className="min-h-0 min-w-0">{carouselContent}</div>
        <div className="flex justify-center">{nextButton}</div>
      </div>
    );
  }

  return (
    <div className="relative min-w-0 h-full w-full grid grid-cols-[auto_1fr_auto] gap-2 place-content-stretch items-center">
      <div className="flex justify-center">{prevButton}</div>

      <div className="min-h-0 min-w-0">{carouselContent}</div>

      <div className="flex justify-center">{nextButton}</div>
    </div>
  );
}

import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Accordion({ summary, details }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1440) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col accordion">
      {/* Accordion Header - contains clickable summary*/}
      <div
        className="flex items-center justify-between w-full transition-all duration-300 ease-out cursor-pointer accordion-toggle"
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(!isOpen);
          }
        }}
        aria-expanded={isOpen}
        aria-controls="accordion-details"
      >
        <div className="mr-2 accordion-summary grow">{summary}</div>

        {/* Caret Icon */}
        <button
          className={`caret-icon xs:w-10 xs:h-10 xs:min-w-10 w-9 h-9 origin-bottom rounded-full shadow-[-3px_3px_0_rgba(0,0,0,0.2)] hover:shadow-[-4px_4px_0_rgba(0,0,0,0.25)] active:shadow-[-2px_2px_2px_rgba(0,0,0,0.2)] active:scale-[0.98]`}
        >
          <FontAwesomeIcon
            icon={faCaretDown}
            className={`text-xl relative top-[2px] ${
              isOpen ? "animate-rotate-in" : "animate-rotate-out"
            }`}
            role="presentation"
            tabIndex="-1"
          />{" "}
          <span className="sr-only">
            {isOpen ? "Hide weather details" : "Show weather details"}
          </span>
        </button>
      </div>

      {/* Accordion Content - contains expandable details*/}
      {isOpen && (
        <div
          id="accordion-details"
          area-labelledby="accordion-summary"
          className="accordion-content"
        >
          {details}
        </div>
      )}
    </div>
  );
}

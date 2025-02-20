import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Accordion({ summary, details }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      {/* Accordion Header - contains clickable summary*/}
      <button
        className="flex justify-between items-center cursor-pointer w-full hover:shadow-[-4px_4px_2px_rgba(0,0,0,0.2)] active:shadow-[-2px_2px_2px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out "
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="accordion-details"
      >
        <div className="accordion-summary grow mr-2">{summary}</div>

        {/* Caret Icon */}
        <div
          className={`caret-icon w-9 h-9 origin-center rounded-full ${
            isOpen ? "animate-rotate-in" : "animate-rotate-out"
          }`}
        >
          <FontAwesomeIcon icon={faCaretDown} className="text-xl pt-2" />
        </div>
      </button>

      {/* Accordion Content - contains expandable details*/}
      {isOpen && <div id="accordion-details">{details}</div>}
    </div>
  );
}

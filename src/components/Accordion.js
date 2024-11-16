import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card">
      {/* Accordion Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{title}</h3>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </div>

      {/* Accordion Content */}
      {isOpen && <div>{content}</div>}
    </div>
  );
}

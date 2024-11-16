import React, { useState } from "react";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card">
      {/* Accordion Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Accordion Content */}
      {isOpen && <div>{content}</div>}
    </div>
  );
}

import React from "react";

export default function Button({ label, onClick }) {
  return (
    <button
      className="px-2 py-[0.6rem] rounded-[10px] border border-solid border-[#ffffff33] [box-shadow:0_4px_6px_rgba(0,_0,_0,_0.1)] transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#ffffff66]"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

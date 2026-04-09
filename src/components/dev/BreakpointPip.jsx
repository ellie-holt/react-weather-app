import { useEffect, useMemo, useState } from "react";

const BREAKPOINTS = [
  { name: "3xs", min: 450 },
  { name: "2xs", min: 475 },
  { name: "xs", min: 550 },
  { name: "sm", min: 640 },
  { name: "md", min: 768 },
  { name: "lg", min: 925 },
  { name: "xl", min: 1024 },
  { name: "2xl", min: 1280 },
  { name: "3xl", min: 1440 },
];

function getActiveBreakpoint(width) {
  const active = BREAKPOINTS.filter(bp => width >= bp.min).at(-1);
  return active ? active.name : "base";
}

export default function BreakpointPip() {
  const [width, setWidth] = useState(() => (typeof window !== "undefined" ? window.innerWidth : 0));

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const activeBreakpoint = useMemo(() => getActiveBreakpoint(width), [width]);

  if (!import.meta.env.DEV) return null;

  return (
    <aside
      className="fixed top-3 left-3 z-[100] w-20 h-20 rounded-full bg-black/70 text-white backdrop-blur-md border border-white/30 shadow-lg flex flex-col items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      <span className="text-[10px] leading-none uppercase opacity-80">{activeBreakpoint}</span>
      <span className="text-xs font-semibold leading-tight">{width}px</span>
    </aside>
  );
}

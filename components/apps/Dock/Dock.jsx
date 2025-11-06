"use client";

import { useSelector } from "react-redux";

export default function Dock() {
  const theme = useSelector((state) => state.theme);

  const style =
    theme === "dark"
      ? "border border-amber-500 w-full h-full rounded-2xl"
      : "border border-amber-500 w-full h-full rounded-2xl";

  return (
    <div className="fixed bottom-0 w-screen h-20 p-2.5">
      <div className="border border-gray-400 bg-gray-800 opacity-50 w-full h-full rounded-2xl"></div>
    </div>
  );
}

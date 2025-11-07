"use client";

import { useSelector } from "react-redux";
import "./Dock.css";

const Dock = () => {
  const theme = useSelector((state) => state.theme.theme);

  console.log(theme);

  return (
    <div className="fixed bottom-0 w-screen h-20 p-2.5">
      <div
        className={`theme ${
          theme === "dark" ? `dark` : ``
        } w-full h-full rounded-2xl backdrop-blur-2xl opacity-50`}
      ></div>
    </div>
  );
};

export default Dock;

"use client";

import { useSelector } from "react-redux";
import "./Dock.css";
import { motion } from "framer-motion";

const printDivs = () => {
  const divs = [];

  for (let i = 1; i <= 5; i++) {
    divs.push(
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 0.8,
          delay: i * 0.1,
        }}
        className="w-12 h-12 bg-gray-950 rounded-xl mr-4"
      ></motion.div>
    );
  }

  return <>{divs}</>;
};

const Dock = () => {
  const theme = useSelector((state) => state.theme.theme);

  console.log(theme);

  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 0.8,
      }}
      className="fixed bottom-0 w-screen h-25 p-2.5"
    >
      <div
        className={`theme ${
          theme === "dark" ? `dark` : ``
        } w-full h-full rounded-2xl backdrop-blur-2xl p-4`}
      >
        <div className="app-container w-screen h-full flex items-center">
          {printDivs()}
          {/* <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: 0.2,
            }}
            className="w-12 h-12 bg-gray-950 rounded-xl"
          ></motion.div> */}
        </div>
        <div className="info-container"></div>
      </div>
    </motion.div>
  );
};

export default Dock;

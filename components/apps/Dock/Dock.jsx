"use client";

import { useSelector } from "react-redux";
import "./Dock.css";
import { delay, motion, scale } from "framer-motion";
import { useEffect, useState } from "react";

const Dock = () => {
  const theme = useSelector((state) => state.theme.theme);
  const apps = useSelector((state) => state.apps.apps)

  console.log(theme);
  console.log(apps);

  //TIME CALCULATIONS
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const generateDivs = () => {
    const sortedApps = [...apps].sort((a,b) => a.dockPos - b.dockPos);
    return <>{sortedApps.map((app, i) => {
      return (
        <motion.div
          key={app.id}
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 0.8,
              delay: i * 0.1,
            },
          }}
          whileTap={{
            scale: 1,
            transition: {
              type: "spring",
              duration: 0.2,
              delay: 0,
            },
          }}
          whileHover={{
            scale: 1.3,
            transition: {
              type: "spring",
              duration: 0.4,
              delay: 0,
            },
          }}
          className={`apps w-12 h-12 bg-gray-950 rounded-xl mr-4  flex items-center justify-center ${app.bg}`}
        >
          {app.icon}

        </motion.div>
      )
    })}</>
  };

  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 0.8,
      }}
      className="dock-container fixed bottom-0 w-screen h-25 p-2.5 min-w-[1000]"
    >
      <div
        className={`dock w-full h-full rounded-2xl backdrop-blur-2xl p-4 flex theme ${
          theme === "dark" ? `dark` : ``
        } `}
      >
        <div className="app-container h-full flex items-center grow">
          {generateDivs()}
        </div>
        <div className="info-container w-fit h-full flex-col items-center justify-center">
          <div className="info w-full flex justify-center">
            {formatTime(time)}
          </div>
          <div className="info w-ful flex justify-center">
            {formatDate(time)}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dock;

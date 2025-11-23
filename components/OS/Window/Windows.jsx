"use client";
import { useSelector, useDispatch } from "react-redux";
import Window from "@/components/OS/Window/Window";
import { AnimatePresence } from "framer-motion";

const Windows = () => {
  const windows = useSelector((state) => state.windows.windows);
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {windows.map((win) => (
        <Window key={win.id} win={win} dispatch={dispatch} />
      ))}
    </AnimatePresence>
  );
};

export default Windows;

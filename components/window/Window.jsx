"use client";
import { useSelector, useDispatch } from "react-redux";
import DraggableWindow from "@/components/window/DraggableWindow";
import { AnimatePresence } from "framer-motion";

const Window = () => {
  const windows = useSelector((state) => state.windows.windows);
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {windows.map((win) => (
        <DraggableWindow key={win.id} win={win} dispatch={dispatch} />
      ))}
    </AnimatePresence>
  );
};

export default Window;

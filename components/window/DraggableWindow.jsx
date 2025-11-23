"use client";

import {
  closeWindow,
  bringToFront,
  resizeWindow,
} from "@/store/Windows/WindowsSlice";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { GrBottomCorner } from "react-icons/gr";

const DraggableWindow = ({ win, dispatch }) => {
  const [position, setPosition] = useState({ x: win.x, y: win.y });
  const [size, setSize] = useState({ width: win.width, height: win.height });

  const dragOffset = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);

  const resizeOffset = useRef({ w: 0, h: 0 });
  const resizing = useRef(false);

  /* --------------------------- DRAG LOGIC --------------------------- */
  const onMouseDownMove = (e) => {
    dragging.current = true;

    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };

    document.body.style.userSelect = "none";
  };

  const onMouseMoveDrag = (e) => {
    if (!dragging.current) return;

    setPosition({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
  };

  /* --------------------------- RESIZE LOGIC --------------------------- */
  const onMouseDownResize = (e) => {
    e.stopPropagation();
    resizing.current = true;

    resizeOffset.current = {
      w: size.width - e.clientX,
      h: size.height - e.clientY,
    };

    document.body.style.userSelect = "none";
  };

  const onMouseMoveResize = (e) => {
    if (!resizing.current) return;

    const newWidth = e.clientX + resizeOffset.current.w;
    const newHeight = e.clientY + resizeOffset.current.h;

    // Enforce minimum dimensions
    const minW = win.minWidth; // came from app.minWidth
    const minH = win.minHeight; // came from app.minHeight

    const finalWidth = Math.max(newWidth, minW);
    const finalHeight = Math.max(newHeight, minH);

    setSize({ width: finalWidth, height: finalHeight });

    dispatch(
      resizeWindow({
        id: win.id,
        width: finalWidth,
        height: finalHeight,
      })
    );
  };

  /* --------------------------- STOP ACTIONS --------------------------- */
  const stopActions = () => {
    dragging.current = false;
    resizing.current = false;
    document.body.style.userSelect = "auto";
  };

  /* --------------------------- GLOBAL LISTENERS --------------------------- */
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMoveDrag);
    window.addEventListener("mousemove", onMouseMoveResize);
    window.addEventListener("mouseup", stopActions);

    return () => {
      window.removeEventListener("mousemove", onMouseMoveDrag);
      window.removeEventListener("mousemove", onMouseMoveResize);
      window.removeEventListener("mouseup", stopActions);
    };
  });

  /* --------------------------- RENDER --------------------------- */
  return (
    <motion.div
      onMouseDown={() => dispatch(bringToFront(win.id))}
      className="fixed bg-white shadow-xl rounded-xl border border-gray-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Title Bar (Drag Area) */}
      <div
        onMouseDown={onMouseDownMove}
        className="w-full flex justify-between items-center p-2 cursor-move select-none"
      >
        <span className="font-medium">{win.title}</span>

        <motion.button
          whileHover={{ scale: 1.2 }}
          onClick={() => dispatch(closeWindow(win.id))}
          className="bg-red-500 px-2 rounded-lg text-white"
        >
          ✕
        </motion.button>
      </div>

      <div className="w-full h-[1px] bg-gray-200"></div>

      <div className="p-2 text-black">Window content for: {win.title}</div>

      {/* Resize Handle */}
      <div
        onMouseDown={onMouseDownResize}
        className="absolute bottom-1 right-1 p-1 cursor-se-resize select-none"
      >
        <GrBottomCorner size={16} className="text-gray-500" />
      </div>
    </motion.div>
  );
};

export default DraggableWindow;

"use client";
import { useSelector, useDispatch } from "react-redux";
import { closeWindow } from "@/store/Windows/WindowsSlice";

const Window = () => {
  const windows = useSelector((state) => state.windows.windows);
  const dispatch = useDispatch();

  return (
    <>
      {windows.map((win) => (
        <div
          key={win.id}
          className="fixed top-20 left-20 w-96 h-60 bg-white shadow-xl rounded-xl p-4"
        >
          <div className="w-full flex justify-between items-center mb-2">
            <span className="font-medium">{win.title}</span>
            <button
              onClick={() => dispatch(closeWindow(win.id))}
              className="text-red-500"
            >
              ✕
            </button>
          </div>

          <div className="p-2 text-black">Window content for: {win.title}</div>
        </div>
      ))}
    </>
  );
};

export default Window;

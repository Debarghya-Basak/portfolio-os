import Browser from "@/components/Apps/Browser/Browser";
import { createSlice } from "@reduxjs/toolkit";
import {
  BsFolderFill,
  BsTerminalFill,
  BsGearFill,
  BsGlobe2,
} from "react-icons/bs";
import {
  FaFileCode,
  FaMusic,
  FaImage,
  FaComments,
  FaVideo,
} from "react-icons/fa";

// Keep a Set of used IDs to ensure uniqueness
const usedIds = new Set();

export function generateRandomIds(min, max) {
  let id;
  do {
    id = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (usedIds.has(id));

  usedIds.add(id);
  return id;
}

const initialState = {
  apps: [
    {
      id: generateRandomIds(10000, 99999),
      name: "Browser",
      title: "Browser",
      minWidth: 1000,
      minHeight: 600,
      isDocked: true,
      dockPos: 0,
      icon: <BsGlobe2 className="w-8 h-8 text-white drop-shadow-md" />,
      bg: `bg-gradient-to-br from-[#3a7bd5] via-[#3a6073] to-[#16222A] border border-white/30 shadow-lg`,
      app: <Browser />,
    },
    {
      id: generateRandomIds(10000, 99999),
      name: "Terminal",
      title: "Terminal",
      minWidth: 420,
      minHeight: 300,
      isDocked: true,
      dockPos: 1,
      icon: <BsTerminalFill className="w-8 h-8 fill-lime-400" />,
      bg: `bg-gradient-to-br from-[#1a1a1a] to-[#333333] border-2 border-lime-400`,
    },
    {
      id: generateRandomIds(10000, 99999),
      name: "Projects",
      title: "Projects",
      minWidth: 450,
      minHeight: 300,
      isDocked: true,
      dockPos: 2,
      icon: <BsFolderFill className="w-8 h-8 fill-yellow-400" />,
      bg: `bg-gradient-to-br from-[#f8d64e] to-[#fcb900] border-2 border-white`,
    },
    {
      id: generateRandomIds(10000, 99999),
      name: "Code Editor",
      title: "VSCode",
      minWidth: 450,
      minHeight: 300,
      isDocked: true,
      dockPos: 3,
      icon: <FaFileCode className="w-8 h-8 fill-sky-400" />,
      bg: `bg-gradient-to-br from-[#1e3c72] to-[#2a5298] border-2 border-white`,
    },
    {
      id: generateRandomIds(10000, 99999),
      name: "Music",
      title: "Music Player",
      minWidth: 420,
      minHeight: 300,
      isDocked: true,
      dockPos: 4,
      icon: <FaMusic className="w-8 h-8 fill-pink-500" />,
      bg: `bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4] border-2 border-white`,
    },
    {
      id: generateRandomIds(10000, 99999),
      name: "Gallery",
      title: "Gallery",
      minWidth: 420,
      minHeight: 300,
      isDocked: true,
      dockPos: 5,
      icon: <FaImage className="w-8 h-8 fill-purple-500" />,
      bg: `bg-gradient-to-br from-[#c471f5] to-[#fa71cd] border-2 border-white`,
    },
    {
      id: generateRandomIds(10000, 99999),
      name: "Settings",
      title: "Settings",
      minWidth: 400,
      minHeight: 300,
      isDocked: true,
      dockPos: 6,
      icon: <BsGearFill className="w-8 h-8 fill-gray-700" />,
      bg: `bg-gradient-to-br from-[#cfd9df] to-[#e2ebf0] border-2 border-white`,
    },
    {
      id: generateRandomIds(10000, 99999),
      name: "Chat",
      title: "Chat App",
      minWidth: 450,
      minHeight: 300,
      isDocked: true,
      dockPos: 7,
      icon: <FaComments className="w-8 h-8 fill-green-400" />,
      bg: `bg-gradient-to-br from-[#00b09b] to-[#96c93d] border-2 border-white`,
    },
    {
      id: generateRandomIds(10000, 99999),
      name: "Video Player",
      title: "Media Player",
      minWidth: 450,
      minHeight: 300,
      isDocked: true,
      dockPos: 8,
      icon: <FaVideo className="w-8 h-8 fill-red-500" />,
      bg: `bg-gradient-to-br from-[#f85032] to-[#e73827] border-2 border-white`,
    },
  ],
};

export const appsSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {},
});

export default appsSlice.reducer;

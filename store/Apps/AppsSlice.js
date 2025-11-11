import { createSlice } from "@reduxjs/toolkit"
import { BsBrowserSafari } from "react-icons/bs";

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
    apps: [{
        id: generateRandomIds(10000, 99999),
        name: "Browser",
        title: "Browser",
        minWidth: 100,
        minHeight: 100,
        isDocked: true,
        dockPos: 0,
        icon: <BsGlobe2 className="w-10 h-10 text-white drop-shadow-md" />,
        bg: `bg-gradient-to-br from-[#3a7bd5] via-[#3a6073] to-[#16222A] border border-white/30 shadow-lg`,

    },
    {
        id: generateRandomIds(10000, 99999),
        name: "Terminal",
        title: "Terminal",
        minWidth: 120,
        minHeight: 100,
        isDocked: true,
        dockPos: 1,
        icon: <BsTerminalFill className="w-10 h-10 fill-lime-400" />,
        bg: `bg-gradient-to-br from-[#1a1a1a] to-[#333333] border-2 border-lime-400`,
    },
    {
        id: generateRandomIds(10000, 99999),
        name: "Projects",
        title: "Projects",
        minWidth: 150,
        minHeight: 100,
        isDocked: true,
        dockPos: 2,
        icon: <BsFolderFill className="w-10 h-10 fill-yellow-400" />,
        bg: `bg-gradient-to-br from-[#f8d64e] to-[#fcb900] border-2 border-white`,
    },
    {
        id: generateRandomIds(10000, 99999),
        name: "Code Editor",
        title: "VSCode",
        minWidth: 150,
        minHeight: 100,
        isDocked: true,
        dockPos: 3,
        icon: <FaFileCode className="w-10 h-10 fill-sky-400" />,
        bg: `bg-gradient-to-br from-[#1e3c72] to-[#2a5298] border-2 border-white`,
    },
    {
        id: generateRandomIds(10000, 99999),
        name: "Music",
        title: "Music Player",
        minWidth: 120,
        minHeight: 100,
        isDocked: true,
        dockPos: 4,
        icon: <FaMusic className="w-10 h-10 fill-pink-500" />,
        bg: `bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4] border-2 border-white`,
    },
    {
        id: generateRandomIds(10000, 99999),
        name: "Gallery",
        title: "Gallery",
        minWidth: 120,
        minHeight: 100,
        isDocked: true,
        dockPos: 5,
        icon: <FaImage className="w-10 h-10 fill-purple-500" />,
        bg: `bg-gradient-to-br from-[#c471f5] to-[#fa71cd] border-2 border-white`,
    },
    {
        id: generateRandomIds(10000, 99999),
        name: "Settings",
        title: "Settings",
        minWidth: 100,
        minHeight: 100,
        isDocked: true,
        dockPos: 6,
        icon: <BsGearFill className="w-10 h-10 fill-gray-700" />,
        bg: `bg-gradient-to-br from-[#cfd9df] to-[#e2ebf0] border-2 border-white`,
    },
    {
        id: generateRandomIds(10000, 99999),
        name: "Chat",
        title: "Chat App",
        minWidth: 150,
        minHeight: 100,
        isDocked: true,
        dockPos: 7,
        icon: <FaComments className="w-10 h-10 fill-green-400" />,
        bg: `bg-gradient-to-br from-[#00b09b] to-[#96c93d] border-2 border-white`,
    },
    {
        id: generateRandomIds(10000, 99999),
        name: "Video Player",
        title: "Media Player",
        minWidth: 150,
        minHeight: 100,
        isDocked: true,
        dockPos: 8,
        icon: <FaVideo className="w-10 h-10 fill-red-500" />,
        bg: `bg-gradient-to-br from-[#f85032] to-[#e73827] border-2 border-white`,
    },
    ]
}


export const AppsSlice = createSlice({
    name: 'apps',
    initialState,
    reducers: {

    }
})
"use client";

import Dock from "@/components/OS/Dock/Dock";
import Windows from "@/components/OS/Window/Windows";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Windows />
      <Dock />
    </Provider>
  );
}

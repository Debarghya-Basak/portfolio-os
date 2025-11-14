"use client";

import Dock from "@/components/apps/Dock/Dock";
import Window from "@/components/window/Window";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Window />
      <Dock/>
    </Provider>
  );
}

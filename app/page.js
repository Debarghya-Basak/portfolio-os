"use client";

import Dock from "@/components/apps/Dock/Dock";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Dock></Dock>
    </Provider>
  );
}

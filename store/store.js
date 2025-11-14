import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/store/Theme/ThemeSlice";
import appsReducer from "@/store/Apps/AppsSlice";
import windowsReducer from "@/store/Windows/WindowsSlice"

export const store = configureStore({
  reducer: { theme: themeReducer, apps: appsReducer, windows: windowsReducer },
});

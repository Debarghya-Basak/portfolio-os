import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/store/Theme/ThemeSlice";
import appsReducer from "@/store/Apps/AppsSlice";

export const store = configureStore({
  reducer: { theme: themeReducer, apps: appsReducer },
});

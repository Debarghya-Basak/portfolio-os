import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/store/Theme/ThemeSlice";

export const store = configureStore({
  reducer: { theme: themeReducer },
});

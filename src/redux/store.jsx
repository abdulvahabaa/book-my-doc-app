import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice.jsx";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

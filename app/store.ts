import { configureStore } from "@reduxjs/toolkit";
import cursorSlice from "../features/cursorSlice";
import hamburgerSlice from "../features/hamburgerSlice";

export const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice,
    cursor: cursorSlice,
  },
});

export type rootState = ReturnType<typeof store.getState>;

export default store;

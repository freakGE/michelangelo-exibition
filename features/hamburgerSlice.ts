import { createSlice } from "@reduxjs/toolkit";
import { rootState } from "../app/store";

type Hamburger = {
  hamburgerIsOpen: boolean;
};

const initialState: Hamburger = {
  hamburgerIsOpen: false,
};

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    openHamburger: (state, action) => {
      state.hamburgerIsOpen = action.payload;
    },
  },
});

export const { openHamburger } = hamburgerSlice.actions;
export const getHamburger = (state: rootState) =>
  state.hamburger.hamburgerIsOpen;
export default hamburgerSlice.reducer;

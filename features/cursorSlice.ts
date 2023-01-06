import { createSlice } from "@reduxjs/toolkit";
import { rootState } from "../app/store";

export type variants =
  | "default"
  | "textWhite"
  | "text"
  | "textLarge"
  | "image"
  | "imageWhite";

type Cursor = {
  cursorVariant: variants;
};

const initialState: Cursor = {
  cursorVariant: "default",
};

const cursorSlice = createSlice({
  name: "cursor",
  initialState,
  reducers: {
    changeCursor: (state, action) => {
      state.cursorVariant = action.payload;
    },
  },
});

export const { changeCursor } = cursorSlice.actions;
export const getCursor = (state: rootState) => state.cursor.cursorVariant;
export default cursorSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: "light" };

const themeActions = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode(state, action) {
      console.log("called", state.mode);
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export default themeActions.reducer;
export const { toggleMode } = themeActions.actions;

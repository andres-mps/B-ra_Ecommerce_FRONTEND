import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "dropdown",
  initialState: { isOpen: false },
  reducers: {
    openDropdown(state, action) {
      return { ...state, isOpen: true };
    },
    closeDropdown(state, action) {
      return { ...state, isOpen: false };
    },
  },
});

const { actions, reducer } = userSlice;
export const { openDropdown, closeDropdown } = actions;
export default reducer;

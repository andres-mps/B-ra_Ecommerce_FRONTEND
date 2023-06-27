import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "ageGate",
  initialState: { isAge: false },
  reducers: {
    isAge(state, action) {
      return { ...state, isAge: true };
    },
    isNotAge(state, action) {
      return { ...state, isAge: false };
    },
  },
});

const { actions, reducer } = userSlice;
export const { isAge, isNotAge } = actions;
export default reducer;

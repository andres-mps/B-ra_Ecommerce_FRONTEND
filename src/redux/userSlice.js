import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setToken(state, action) {
      return action.payload;
    },
    ageGate(state, action) {
      return { ...state, ageGate: action.payload };
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, ageGate } = actions;
export default reducer;

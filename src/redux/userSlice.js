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
    logOut(state, action) {
      return (state = {});
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, ageGate, logOut } = actions;
export default reducer;

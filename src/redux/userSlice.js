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
    updateData(state, action) {
      state.userData = { ...state.userData, ...action.payload };
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, ageGate, logOut, updateData } = actions;
export default reducer;

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setToken(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const {} = actions;
export default reducer;

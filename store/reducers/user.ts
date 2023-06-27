import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    auth: false,
    user: null
  },
  reducers: {
    setAuth: (state, param) => {
      state.auth = param.payload;
    }
  }
});

export const { setAuth } = userSlice.actions;

export default userSlice.reducer;
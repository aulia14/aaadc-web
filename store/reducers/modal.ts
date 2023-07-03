import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    request_attendance: false
  },
  reducers: {
    openRequestAttendance: (state, param) => {
      state.request_attendance = param.payload;
    }
  }
});

export const {
  openRequestAttendance
} = modalSlice.actions;

export default modalSlice.reducer
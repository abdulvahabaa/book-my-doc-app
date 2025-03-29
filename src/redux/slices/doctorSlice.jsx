import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctor: null,
  isAuthenticated: false,
};

const doctorSlice = createSlice({
  name: "doctorState",
  initialState,
  reducers: {
    login: (state, action) => {
      state.doctor = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.doctor = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = doctorSlice.actions;
export default doctorSlice.reducer;

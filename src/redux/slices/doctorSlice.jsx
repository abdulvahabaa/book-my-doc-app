import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctor: null,
  token: null,
  role: null,
  isAuthenticated: false,
};

const doctorSlice = createSlice({
  name: "doctorState",
  initialState,
  reducers: {
    setDocLogin: (state, action) => {
      state.doctor = action.payload.doctor;
      state.token = action.payload.token;
      state.role = action.payload.doctor.role;
      state.isAuthenticated = true;
    },
    setDocLogout: (state) => {
      state.doctor = null;
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setDocLogin, setDocLogout } = doctorSlice.actions;
export default doctorSlice.reducer;

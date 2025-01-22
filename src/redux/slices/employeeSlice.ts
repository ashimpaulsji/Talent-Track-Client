// src/redux/slices/employeeSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getEmployeeProfile, updateEmployeeProfile } from "../api/employeeApi";

interface EmployeeState {
  profile: any;
  loading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  profile: null,
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployeeProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEmployeeProfile.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getEmployeeProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch profile";
      })
      .addCase(updateEmployeeProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateEmployeeProfile.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(updateEmployeeProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update profile";
      });
  },
});

export default employeeSlice.reducer;
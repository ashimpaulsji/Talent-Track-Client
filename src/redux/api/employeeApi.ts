import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from "@/src/lib/network";
import {
  UPDATE_EMPLOYEE_PROFILE_API,
  GET_EMPLOYEE_PROFILE_API,
} from "@/src/constants/api-constant";

export const getEmployeeProfile = createAsyncThunk(
  "employee/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response: { data: any } = await get(GET_EMPLOYEE_PROFILE_API(), true);
      return response?.data;
    } catch (error) {
      return rejectWithValue((error as any).response.data);
    }
  }
);

export const updateEmployeeProfile = createAsyncThunk(
  "employee/updateProfile",
  async (profileData: any, { rejectWithValue }) => {
    try {
      const response = await post(
        UPDATE_EMPLOYEE_PROFILE_API(),
        profileData,
        true
      );
      return response;
    } catch (error) {
      return rejectWithValue((error as any).response.data);
    }
  }
);

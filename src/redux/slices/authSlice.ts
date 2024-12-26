import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, register } from "../api/authApi";

export interface IAuthState {
  authState: boolean;
  userID: any;
  userName: string;
  email: string;
  number: string;
  gender?: string;
  city?: string;
  interestedCourse?: string;
}

const initialState: IAuthState = {
  authState: false,
  userID: null,
  userName: "",
  email: "",
  number: "",
  gender: "",
  city: "",
  interestedCourse: "",
};

let clearSessionTimer: NodeJS.Timeout | null = null;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<IAuthState>) => {
      Object.assign(state, action.payload);
      if (clearSessionTimer) {
        clearTimeout(clearSessionTimer);
      }
      clearSessionTimer = setTimeout(() => {
        clearSession();
      }, 60 * 60 * 1000);
    },
    clearAuthState: (state) => {
      Object.assign(state, initialState);
      clearSession();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
        state.authState = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
        state.authState = true;
      });
  },
});

export const { setAuthState, clearAuthState } = authSlice.actions;

const clearSession = () => {
  localStorage.removeItem('persist:auth');
  localStorage.clear();
  clearSessionTimer = null;
};

export default authSlice.reducer;
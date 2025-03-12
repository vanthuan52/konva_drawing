import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
    },
    handleError(state, action) {
      const error = action.payload;
      state.isLoading = false;
    },

    loginSuccess(state) {
      state.isAuthenticated = true;
      state.isLoading = false;
    },

    signupSuccess(state) {
      state.isLoading = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

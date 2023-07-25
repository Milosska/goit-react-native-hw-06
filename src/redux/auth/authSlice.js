import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { userRegister, userLogin, userLogout } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    refreshUser: (state, { payload }) => {
      state.user = payload.user;
      state.isLoggedIn = payload.isLoggedIn;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogout.fulfilled, (state) => {
        state.user = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(userRegister.fulfilled, userLogin.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.isLoggedIn = true;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(userRegister.pending, userLogin.pending, userLogout.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(userRegister.rejected, userLogin.rejected, userLogout.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.user = null;
          state.error = payload;
        }
      );
  },
});

export const { refreshUser } = authSlice.actions;
export const authReducer = authSlice.reducer;

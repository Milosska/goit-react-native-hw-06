import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { refreshUser } from "./authSlice";

export const userRegister = createAsyncThunk(
  "auth/userRegister",
  async ({ email, password, login, image }, { rejectWithValue }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(user, {
        displayName: login,
        photoURL: image,
      });

      const updatedUser = auth.currentUser;

      return {
        user: {
          displayName: updatedUser.displayName,
          email: updatedUser.email,
          id: updatedUser.uid,
          photoURL: updatedUser.photoURL,
        },
      };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      return {
        user: {
          displayName: user.displayName,
          email: user.email,
          id: user.uid,
          photoURL: user.photoURL,
        },
      };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  "auth/userLogout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      return;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const userRefresh = () => async (dispath) => {
  onAuthStateChanged(auth, (user) => {
    let currentState;
    if (user) {
      currentState = {
        user: {
          userId: user.uid,
          nickname: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        },
        isLoggedIn: true,
      };
    } else {
      currentState = {
        user: null,
        isLoggedIn: false,
      };
    }
    dispath(refreshUser(currentState));
  });
};

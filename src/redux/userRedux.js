import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const initialState = {
  isAuthenticated: false,
  user: null,
  userLinks: [],
  status: STATUSES.IDLE,
  loadingText: "",
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserLinks: (state, action) => {
      state.userLinks = action.payload;
    },
    addUserLink: (state, action) => {
      const userLink = state.userLinks.find(
        (link) => link.title === action.payload.title
      );
      if (userLink) {
        userLink.url = action.payload.url;
      } else {
        state.userLinks.push(action.payload);
      }
    },
    deleteUserLink: (state, action) => {
      state.userLinks = state.userLinks.filter(
        (link) => link.title !== action.payload
      );
    },
    setStatus: (state, action) => {
      state.loadingText = action.payload.loadingText;
      state.status = action.payload.status;
    },
  },
});

export const {
  setAuth,
  setUser,
  setUserLinks,
  addUserLink,
  deleteUserLink,
  setStatus,
  setLoadingText,
} = userSlice.actions;
export default userSlice.reducer;

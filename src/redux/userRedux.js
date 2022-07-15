import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  userLinks: [],
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
      state.userLinks.push(action.payload);
    },
    deleteUserLink: (state, action) => {
      state.userLinks = state.userLinks.filter(
        (link) => link.title !== action.payload
      );
    },
  },
});

export const { setAuth, setUser, setUserLinks, addUserLink, deleteUserLink } =
  userSlice.actions;
export default userSlice.reducer;

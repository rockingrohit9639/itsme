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
  },
});

export const { setAuth, setUser, setUserLinks, addUserLink } =
  userSlice.actions;
export default userSlice.reducer;

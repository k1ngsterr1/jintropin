import { createSlice } from "@reduxjs/toolkit";

const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = sideMenuSlice.actions;
export default sideMenuSlice.reducer;

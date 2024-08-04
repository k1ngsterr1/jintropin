import { configureStore } from "@reduxjs/toolkit";
import sideMenuSlice from "./slices/sideMenuSlice";

export const store = configureStore({
  reducer: {
    sideMenu: sideMenuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

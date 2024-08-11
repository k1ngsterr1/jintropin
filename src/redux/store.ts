import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./slices/loaderSlice";
import sideMenuSlice from "./slices/sideMenuSlice";

export const store = configureStore({
  reducer: {
    sideMenu: sideMenuSlice,
    loader: loaderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

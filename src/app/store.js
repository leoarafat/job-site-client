import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import apiSlice from "../pages/features/api/apiSlice";
import authSlice from "../pages/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

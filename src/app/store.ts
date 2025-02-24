import { configureStore } from "@reduxjs/toolkit";
import problemReducer from "../features/problemSlice";
import { apiSlice } from "../features/apiSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    problemReducer,
    authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

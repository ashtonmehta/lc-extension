import { configureStore } from "@reduxjs/toolkit";
import problemReducer from "../features/problemSlice";
import { apiSlice } from "../features/apiSlice";

export const store = configureStore({
  reducer: {
    problemReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

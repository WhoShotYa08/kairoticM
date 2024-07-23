import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import authSliceReducer from "./slices/authSlice";

const organization = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default organization;

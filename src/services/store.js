import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./reducers/authReducers";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./reducers/authReducers";
import { NscReducers } from "./reducers/nscReducers";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    connection:NscReducers,
  },
});
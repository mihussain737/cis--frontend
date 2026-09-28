import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./reducers/authReducers";
import { NscReducers } from "./reducers/nscReducers";
import { ReadingScreenReducer } from "./reducers/meterStockReducers";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    connection:NscReducers,
    readingScreen: ReadingScreenReducer,
  },
});
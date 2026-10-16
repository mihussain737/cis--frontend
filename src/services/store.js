import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./reducers/authReducers";
import { NscReducers } from "./reducers/nscReducers";
import { ReadingScreenReducer } from "./reducers/meterStockReducers";
import { billReducers } from "./reducers/billsReducers";
import { paymentReducers } from "./reducers/paymentReducers";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    connection: NscReducers,
    readingScreen: ReadingScreenReducer,
    billing: billReducers,
    payments:paymentReducers,
  },
});

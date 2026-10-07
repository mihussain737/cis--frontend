import { billingApi } from "../api";

const initialState = {
  loading: false,
  error: null,
  bills: [],
  bill: null,
};

export const billReducers = (state = initialState, action) => {
  switch (action.type) {
    case "BILLING_PROCESS_REQUEST":
      return {
        loading: true,
        error: null,
        bills: [],
        bill: null,
      };
    case "BILLING_PROCESS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        bills: [],
        bill: action.payload,
      };

    case "BILLING_PROCESS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
        bills: [],
        bill: null,
      };
    default:
      return state;
  }
};

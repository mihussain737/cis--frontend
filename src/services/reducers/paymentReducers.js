const initialState = {
  loading: false,
  error: null,
  payments: [],
  payment: null,
};

export const paymentReducers = (state = initialState, action) => {
  switch (action.type) {
    case "OUTSTANDING_AMOUNT_REQUEST":
      return {
        loading: true,
        error: null,
        payments: [],
        payment: null,
      };
    case "OUTSTANDING_AMOUNT_SUCCESS":
      return {
        loading: false,
        error: null,
        payments: [],
        payment: action.payload,
      };
    case "OUTSTANDING_AMOUNT_FAILURE":
      return {
        loading: false,
        error: action.payload,
        payments: [],
        payment: null,
      };

    default:
      return state;
  }
};

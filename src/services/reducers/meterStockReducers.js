const initialState = {
  meterStock: null,
  meterStocks: [],
  consumer:null,
  error: null,
  loading: false,
};

export const MeterStockReducers = (state = initialState, action) => {
  switch (action.type) {
    case "METER_STOCK_REQUEST":
      return {
        ...state,
        meterStock: null,
        meterStocks: [],
        error: null,
        loading: true,
      };
    case "METER_STOCK_SUCCESS":
      return {
        ...state,
        meterStock: action.payload,
        meterStocks: [],
        error: null,
        loading: false,
      };
    case "METER_STOCK_FAILURE":
      return {
        ...state,
        meterStock: null,
        meterStocks: [],
        error: action.payload,
        loading: false,
      };

    default:
      return{
        state
      };
  }
};

export const AssignedMeter = (state = initialState, action) => {
  switch (action.type) {
    case "ASSIGN_METER_REQUEST":
      return {
        ...state,
        meterStock: null,
        meterStocks: [],
        consumer:null,
        error: null,
        loading: true,
      };
    case "ASSIGN_METER_SUCCESS":
      return {
        ...state,
        consumer:action.payload,
        error: null,
        loading: false,
      };
    case "ASSIGN_METER_FAILURE":
      return {
        ...state,
        consumer: [],
        error: action.payload,
        loading: false,
      };

    default:
      return{
        state
      };
  }
};

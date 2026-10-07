const initialState = {
  meterStock: null,
  meterStocks: [],
  consumer: null,
  reading: null,
  error: null,
  loading: false,
};

// ===============================
// METER STOCK REDUCER
// ===============================
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
        error: null,
        loading: false,
      };

    case "METER_STOCK_FAILURE":
      return {
        ...state,
        meterStock: null,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

// ===============================
// ASSIGNED METER REDUCER
// ===============================
export const AssignedMeter = (state = initialState, action) => {
  switch (action.type) {
    case "ASSIGN_METER_REQUEST":
      return {
        ...state,
        consumer: null,
        error: null,
        loading: true,
      };

    case "ASSIGN_METER_SUCCESS":
      return {
        ...state,
        consumer: action.payload,
        error: null,
        loading: false,
      };

    case "ASSIGN_METER_FAILURE":
      return {
        ...state,
        consumer: null,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

// ===============================
// READING SCREEN REDUCER
// ===============================
export const ReadingScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "READING_SCREEN_REQUEST":
      return {
        ...state,
        reading: null,
        error: null,
        loading: true,
      };

    case "READING_SCREEN_SUCCESS":
      return {
        ...state,
        reading: action.payload,
        error: null,
        loading: false,
      };

    case "READING_SCREEN_FAILURE":
      return {
        ...state,
        reading: null,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const MeterReadingReducers = (state = initialState, action) => {
  switch (key) {
    case "READING_SAVE_REQUEST":
      return {
        ...state,
        reading: null,
        error: null,
        loading: true,
      };

    case "READING_SAVE_SUCCESS":
      return {
        ...state,
        reading: action.payload,
        error: null,
        loading: false,
      };

    case "READING_SAVE_FAILURE":
      return {
        ...state,
        reading: null,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

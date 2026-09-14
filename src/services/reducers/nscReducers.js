const initialState = {
  connections: [],
  connection: null,
  error: null,
  loading: false,
};

export const NscReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECTION_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "CONNECTION_SUCCESS":
      return {
        ...state,
        connection: action.payload,
        loading: false,
        error: null,
      };

    case "CONNECTION_FAILURE":
      return {
        ...state,
        connection: null,
        loading: false,
        error: action.payload,
      };

    case "CONNECTION_PENDING_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "CONNECTION_PENDING_SUCCESS":
      return {
        ...state,
        connections: action.payload,
        loading: false,
        error: null,
      };

    case "CONNECTION_PENDING_FAILURE":
      return {
        ...state,
        connections: [],
        loading: false,
        error: action.payload,
      };

    case "SEARCH_APP_NO_REQUEST":
      return {
        ...state,
        connection: null,
        loading: true,
        error: null,
      };

    case "SEARCH_APP_NO_SUCCESS":
      return {
        ...state,
        connection: action.payload,
        loading: false,
        error: null,
      };

    case "SEARCH_APP_NO_FAILURE":
      return {
        ...state,
        connection: null,
        loading: false,
        error: action.payload,
      };

    // APPROVE
    case "CONN_APPROVED_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "CONN_APPROVED_SUCCESS":
      return {
        ...state,
        connections: state.connections.filter(
          (connection) =>
            connection.customerId !== action.payload.customerId
        ),
        loading: false,
        error: null,
      };

    case "CONN_APPROVED_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // REJECT
    case "CONN_REJECT_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "CONN_REJECT_SUCCESS":
      return {
        ...state,
        connections: state.connections.filter(
          (connection) =>
            connection.customerId !== action.payload.customerId
        ),
        loading: false,
        error: null,
      };

    case "CONN_REJECT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
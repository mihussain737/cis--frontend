const initialState = {
  user: null,
  error: null,
  loading: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {

    case "POST_REGISTER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "POST_REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };

    case "POST_REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
    
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
    
    default:
      return state;
  }
};

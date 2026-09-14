import { authApi, nscApi } from "../api";

export const registerUser = (userData) => async (dispatch) => {
  dispatch({
    type: "POST_REGISTER_REQUEST",
  });

  try {
    const response = await authApi.post("/register",
      userData,
    );

    dispatch({
      type: "POST_REGISTER_SUCCESS",
      payload: response.data,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {

    dispatch({
      type: "POST_REGISTER_FAILURE",
      payload: error.response?.data?.message || "Registration failed",
    });
  }
};


export const loginUser=(loginData)=>async (dispatch)=>{
  
  dispatch({type:"LOGIN_REQUEST"})

  try {
    const response=await authApi.post("/login",loginData);
    
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response?.data?.message || "Login failed",
    });
  }
}

// nsc releated actions
export const connectionPost=(connectionData)=>async(dispatch)=>{
  dispatch({type:"CONNECTION_REQUEST"})
  try {
    const response=await nscApi.post("",connectionData);
    dispatch({
      type: "CONNECTION_SUCCESS",
      payload: response.data,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    dispatch({
      type: "CONNECTION_FAILURE",
      payload: error.response?.data?.message || "Login failed",
    });
  }
}


// get all pending approval connections
export const fetchPendingConnections=()=>async (dispatch)=>{
  dispatch({type:"CONNECTION_PENDING_REQUEST"})
  try {
    const response=await nscApi.get();
    dispatch({
      type: "CONNECTION_PENDING_SUCCESS",
      payload: response.data,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    dispatch({
      type: "CONNECTION_PENDING_FAILURE",
      payload: error.response?.data?.message || "Login failed",
    });
  }
}


// search with application Number
export const searchApplicationNumber =
  (applicationNumber) => async (dispatch) => {
    dispatch({
      type: "SEARCH_APP_NO_REQUEST",
    });

    try {
      const response = await nscApi.post(
        `/approval/search?applicationNumber=${encodeURIComponent(
          applicationNumber
        )}`
      );

      console.log("Search API response:", response.data);

      dispatch({
        type: "SEARCH_APP_NO_SUCCESS",
        payload: response.data,
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error(
        "Search application error:",
        error.response || error
      );

      const errorMessage =
        error.response?.data?.message ||
        error.response?.data ||
        "Application search failed";

      dispatch({
        type: "SEARCH_APP_NO_FAILURE",
        payload: errorMessage,
      });

      return {
        success: false,
        error: errorMessage,
      };
    }
  };

  // approved pending connections
  // Approve pending connection
export const approvedConnection = (customerId) => async (dispatch) => {
  dispatch({type: "CONN_APPROVED_REQUEST",});
  try {
    const response = await nscApi.post(`/approval/${customerId}/approved`);

    dispatch({type: "CONN_APPROVED_SUCCESS",payload: {customerId,data: response.data,},});
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error(
      "Approve connection error:",
      error.response || error
    );

    const errorMessage =
      error.response?.data?.message ||
      error.response?.data ||
      "Failed to approve connection";

    dispatch({
      type: "CONN_APPROVED_FAILURE",
      payload: errorMessage,
    });

    return {
      success: false,
      error: errorMessage,
    };
  }
};
  // connection reject
  // Reject pending connection
export const rejectConnection = (customerId) => async (dispatch) => {
  dispatch({
    type: "CONN_REJECT_REQUEST",
  });

  try {
    const response = await nscApi.post(
      `/approval/${customerId}/reject`
    );

    dispatch({
      type: "CONN_REJECT_SUCCESS",
      payload: {
        customerId,
        data: response.data,
      },
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error(
      "Reject connection error:",
      error.response || error
    );

    const errorMessage =
      error.response?.data?.message ||
      error.response?.data ||
      "Failed to reject connection";

    dispatch({
      type: "CONN_REJECT_FAILURE",
      payload: errorMessage,
    });

    return {
      success: false,
      error: errorMessage,
    };
  }
};
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
  debugger
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
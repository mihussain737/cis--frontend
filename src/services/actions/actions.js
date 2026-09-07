import { authApi } from "../api";

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
    console.log("Register Error:", error.response);

    dispatch({
      type: "POST_REGISTER_FAILURE",
      payload: error.response?.data?.message || "Registration failed",
    });
  }
};


export const loginUser=(loginData)=>async (dispatch)=>{
  console.log(loginData);
  
  dispatch({type:"LOGIN_REQUEST"})

  try {
    console.log(authApi.defaults.baseURL)
    const response=await authApi.post("/login",loginData);
    console.log("LOGIN API RESPONSE:", response.data);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.log("Register Error:", error.response);
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response?.data?.message || "Login failed",
    });
  }
}
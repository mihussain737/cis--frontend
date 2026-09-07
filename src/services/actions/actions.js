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

import { meteringApi } from "../api";

export const assignNewMeter = (data) => async (dispatch) => {
  dispatch({ type: "ASSIGN_METER_REQUEST" });
  try {
    const response = await meteringApi.post(`assign-new-meter`, data);
    dispatch({
      type: "ASSIGN_METER_SUCCESS",
      payload: {
        data: response.data,
      },
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Reject connection error:", error.response || error);

    const errorMessage =
      error.response?.data?.message ||
      error.response?.data ||
      "Failed to reject connection";

    dispatch({
      type: "ASSIGN_METER_FAILURE",
      payload: errorMessage,
    });

    return {
      success: false,
      error: errorMessage,
    };
  }
};

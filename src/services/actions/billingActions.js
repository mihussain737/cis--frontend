import { billingApi } from "../api";

export const processBill = (data) => async (dispatch) => {
  dispatch({ type: "BILL_PROCESS_REQUEST" });

  const selectedDate = data.billMonthAndYear;

  if (!selectedDate) {
    throw new Error("Reading date is required");
  }

  // Extract year and month from YYYY-MM-DD
  const [year, month] = selectedDate.split("-");
  try {
    const response = await billingApi.post(`/${data.accountNumber}`, null, {
      params: {
        rdgMonth: Number(month),
        rdgYear: Number(year),
      },
    });
    dispatch({
      type: "BILLING_PROCESS_SUCCESS",
      payload: response.data,
    });

    return {
      success: true,
      error: "",
    };
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.response?.data ||
      error.message ||
      "Failed to fetch meter reading";

    dispatch({
      type: "BILLING_PROCESS_FAILED",
      payload: errorMessage,
    });

    return {
      success: false,
      error: errorMessage,
    };
  }
};

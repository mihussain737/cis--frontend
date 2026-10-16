import { billingApi, paymentApi } from "../api";

export const outStandingAmount = (accountNo) => async (dispatch) => {
  dispatch({ type: "OUTSTANDING_AMOUNT_REQUEST" });
  try {
    console.log(billingApi.defaults.baseURL + `/account/${accountNo}`);
    const response = await billingApi.get(`/${accountNo}/outstanding`);
    console.log(response);
    dispatch({ type: "OUTSTANDING_AMOUNT_SUCCESS", payload: response.data });
    return{
        success:true,
        error:"",
    }
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

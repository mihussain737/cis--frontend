
import { meteringApi } from "../api";

// =====================================
// ASSIGN NEW METER
// =====================================
export const assignNewMeter = (data) => async (dispatch) => {
  dispatch({ type: "ASSIGN_METER_REQUEST" });

  try {
    const response = await meteringApi.post(
      "assign-new-meter",
      data
    );

    dispatch({
      type: "ASSIGN_METER_SUCCESS",
      payload: response.data,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error(
      "Assign meter error:",
      error.response || error
    );

    const errorMessage =
      error.response?.data?.message ||
      error.response?.data ||
      error.message ||
      "Failed to assign meter";

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


// =====================================
// FETCH METER READING
// =====================================
export const readingScreen = (accountData) => async (dispatch) => {
  dispatch({
    type: "READING_SCREEN_REQUEST",
  });

  try {
    const selectedDate = accountData.readingDate;

    if (!selectedDate) {
      throw new Error("Reading date is required");
    }

    // Extract year and month from YYYY-MM-DD
    const [year, month] = selectedDate.split("-");

    // Fetch reading for the selected account.
    // Pass month and year as query parameters.
    const response = await meteringApi.get(
      `/meterRdg/${accountData.accountNo}`,
      {
        params: {
          rdgMonth: Number(month),
          rdgYear: Number(year),
        },
      }
    );

    // Combine API response with selected date
    const readingData = {
      ...response.data,
      accountNo: accountData.accountNo,
      readingDate: selectedDate,
    };

    dispatch({
      type: "READING_SCREEN_SUCCESS",
      payload: readingData,
    });

    return {
      success: true,
      data: readingData,
    };
  } catch (error) {
    console.error(
      "Failed to fetch meter reading:",
      error.response || error
    );

    const errorMessage =
      error.response?.data?.message ||
      error.response?.data ||
      error.message ||
      "Failed to fetch meter reading";

    dispatch({
      type: "READING_SCREEN_FAILURE",
      payload: errorMessage,
    });

    return {
      success: false,
      error: errorMessage,
    };
  }
};


// =====================================
// SAVE NEW METER READING
// =====================================
export const saveReading = (readingData) => async (dispatch) => {
  dispatch({
    type: "READING_SAVE_REQUEST",
  });

  try {
    const selectedDate = readingData.prstRdgDate;

    if (!selectedDate) {
      throw new Error("Reading date is missing");
    }

    const [year, month] = selectedDate.split("-");

    const payload = {
      ...readingData,
      rdgMonth: Number(month),
      rdgYear: Number(year),
    };

    console.log("Final Save Payload:", payload);

    const response = await meteringApi.post(
      `/meterRdg/${readingData.accountNo}`,
      payload
    );

    dispatch({
      type: "READING_SAVE_SUCCESS",
      payload: response.data,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error(
      "Failed to save meter reading:",
      error.response || error
    );

    const errorMessage =
      error.response?.data?.message ||
      error.response?.data ||
      error.message ||
      "Failed to save meter reading";

    dispatch({
      type: "READING_SAVE_FAILURE",
      payload: errorMessage,
    });

    return {
      success: false,
      error: errorMessage,
    };
  }
};


// =====================================
// UPDATE EXISTING METER READING
// =====================================
export const updateReading = (readingData) => async (dispatch) => {
  dispatch({
    type: "READING_UPDATE_REQUEST",
  });

  try {
    const selectedDate = readingData.prstRdgDate;

    if (!selectedDate) {
      throw new Error("Reading date is missing");
    }

    const [year, month] = selectedDate.split("-");

    const payload = {
      ...readingData,
      rdgMonth: Number(month),
      rdgYear: Number(year),
    };

    console.log("Final Update Payload:", payload);

    const response = await meteringApi.put(
      `/meterRdg/${readingData.accountNo}`,
      payload
    );

    dispatch({
      type: "READING_UPDATE_SUCCESS",
      payload: response.data,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error(
      "Failed to update meter reading:",
      error.response || error
    );

    const errorMessage =
      error.response?.data?.message ||
      error.response?.data ||
      error.message ||
      "Failed to update meter reading";

    dispatch({
      type: "READING_UPDATE_FAILURE",
      payload: errorMessage,
    });

    return {
      success: false,
      error: errorMessage,
    };
  }
};
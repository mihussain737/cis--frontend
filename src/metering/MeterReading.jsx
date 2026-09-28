import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { readingScreen } from "../services/actions/meteringactions";

const MeterReading = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get loading and error from reading reducer
  const { loading, error } = useSelector(
    (state) => state.readingScreen || {}
  );

  // Today's date in local timezone (avoids UTC date mismatch)
  const now = new Date();

  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");

  // Submit account number and selected date
  const onSubmit = async (data) => {
    const accountData = {
      accountNo: data.accountNo,
      readingDate: data.readingDate,
    };

    console.log("Selected Account Data:", accountData);

    const response = await dispatch(
      readingScreen(accountData)
    );

    if (response.success) {
      navigate("/metering/meter/reading/readingScreen");
    } else {
      toast.error(
        typeof response.error === "string"
          ? response.error
          : "Failed to fetch meter reading"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <Toaster position="top-center" />

      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow">

        {/* Heading */}
        <h1 className="mb-2 text-center text-2xl font-bold text-blue-800">
          Meter Reading And Modification
        </h1>

        <p className="mb-6 text-center text-gray-600">
          Take or Update Reading
        </p>

        {/* API Error */}
        {error && (
          <div className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
            {typeof error === "string"
              ? error
              : "Failed to fetch meter reading"}
          </div>
        )}

        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >

          {/* Account Number */}
          <div>
            <label className="mb-1 block font-medium text-gray-700">
              Account No
            </label>

            <input
              type="text"
              {...register("accountNo", {
                required: "Account No is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Account No must contain only digits",
                },
              })}
              className="w-full rounded border p-2 outline-none focus:border-blue-500"
              placeholder="Enter Account No"
            />

            {errors.accountNo && (
              <p className="mt-1 text-sm text-red-600">
                {errors.accountNo.message}
              </p>
            )}
          </div>

          {/* Reading Date */}
          <div>
            <label className="mb-1 block font-medium text-gray-700">
              Reading Date
            </label>

            <input
              type="date"
              max={today}
              {...register("readingDate", {
                required: "Reading date is required",
              })}
              className="w-full rounded border p-2 outline-none focus:border-blue-500"
            />

            {errors.readingDate && (
              <p className="mt-1 text-sm text-red-600">
                {errors.readingDate.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="rounded bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-200 border-t-white" />
                  Fetching Reading...
                </div>
              ) : (
                "Meter Reading"
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default MeterReading;
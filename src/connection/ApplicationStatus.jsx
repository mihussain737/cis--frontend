import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { searchApplicationNumber } from "../services/actions/actions";

const ApplicationStatus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const { connection, loading, error } = useSelector(
    (state) => state.connection || {},
  );

  const handleSearch = async (formData) => {
    console.log("Application Number:", formData.applicationNumber);

    const response = await dispatch(
      searchApplicationNumber(formData.applicationNumber),
    );

    console.log("Search response:", response);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow">
        <h1 className="mb-6 text-2xl font-bold">Check Application Status</h1>

        <form onSubmit={handleSubmit(handleSearch)} className="space-y-4">
          <div>
            <label className="mb-2 block font-medium">Application Number</label>

            <input
              type="text"
              {...register("applicationNumber", {
                required: "Application number is required",
              })}
              className="w-full rounded border-2 border-gray-300 p-2 outline-none focus:border-blue-500"
              placeholder="Example: CONN-C9DDCCC2"
            />

            {errors.applicationNumber && (
              <p className="mt-1 text-sm text-red-500">
                {errors.applicationNumber.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {error && (
          <p className="mt-5 rounded bg-red-100 p-3 text-red-700">
            {typeof error === "string"
              ? error
              : error?.message || "Application not found"}
          </p>
        )}

        {connection && (
          <div className="mt-6 rounded-lg border bg-gray-50 p-4">
            <h2 className="mb-3 text-lg font-semibold">Application Details</h2>

            <p>
              <strong>Applicant Name:</strong> {connection.applicantName}
            </p>

            <p>
              <strong>Application Number:</strong>{" "}
              {connection.applicationNumber}
            </p>

            <p>
              <strong>Mobile Number:</strong> {connection.mobileNumber}
            </p>

            <p>
              <strong>Email:</strong> {connection.email}
            </p>

            <div className="flex items-center gap-2">
              <strong>Status:</strong>

              <span
                className={
                  connection.applicationStatus === "UNDER_REVIEW"
                    ? "font-semibold text-green-500"
                    : "font-semibold text-gray-700"
                }
              >
                {connection.applicationStatus}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationStatus;

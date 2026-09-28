import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  saveReading,
  updateReading,
} from "../services/actions/meteringactions";

const MeterReadingScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state
  const { reading, loading, error } = useSelector(
    (state) => state.readingScreen || {},
  );

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  // Determine whether selected date is an existing reading date.
  // This assumes the backend returns the existing record for that date.
  const isUpdate = !!reading && reading.readingDate === reading.prstRdgDate;

  // Populate form when reading data is loaded
  useEffect(() => {
    if (!reading) return;

    if (isUpdate) {
      setValue("currentKwh", reading.prstKwh ?? "");
      setValue("currentKvah", reading.prstKvah ?? "");
      setValue("currentKva", reading.prstKva ?? "");
      setValue("currentKw", reading.prstkw ?? "");
    } else {
      setValue("currentKwh", "");
      setValue("currentKvah", "");
      setValue("currentKva", "");
      setValue("currentKw", "");
    }
  }, [reading, isUpdate, setValue]);

  // Submit current reading
  const onSubmit = async (data) => {
    if (!reading) {
      toast.error("Please search for an account first");
      return;
    }

    // Construct payload using backend DTO property names
    const payload = {
      accountNo: reading.accountNo,
      consumerId: reading.consumerId,

      // Previous reading details
      prevRdgDate: reading.prstRdgDate,
      prevRdgKwh: Number(reading.prstKwh ?? 0),
      prevRdgKw: Number(reading.prstkw ?? 0),
      prevRdgKva: Number(reading.prstKva ?? 0),
      prevRdgKvah: Number(reading.prstKvah ?? 0),

      // Current reading details
      prstRdgDate: reading.readingDate,
      prstKwh: Number(data.currentKwh),
      prstKvah: Number(data.currentKvah),
      prstKva: Number(data.currentKva),
      prstkw: Number(data.currentKw),

      // Required by backend DTO
      rdgMonth: Number(reading.readingDate.split("-")[1]),
      rdgYear: Number(reading.readingDate.split("-")[0]),
    };

    const {
      prevRdgDate,
      prstRdgDate,
      prevRdgKwh,
      prstKwh,
      prevRdgKvah,
      prstKvah,
    } = payload;

    // Validation: new reading date must be after previous date
    if (!isUpdate && prevRdgDate && prevRdgDate >= prstRdgDate) {
      toast.error(
        "Reading date must be after previous reading date: " + prevRdgDate,
      );
      return;
    }

    // Validate KWH
    if (prstKwh < prevRdgKwh) {
      toast.error("Present KWH must be greater than or equal to previous KWH");
      return;
    }

    // Validate KVAH
    if (prstKvah < prevRdgKvah) {
      toast.error(
        "Present KVAH must be greater than or equal to previous KVAH",
      );
      return;
    }

    // Validate KWH and KVAH relationship
    if (prstKwh > prstKvah) {
      toast.error("Present KVAH must be greater than or equal to present KWH");
      return;
    }

    try {
      // Save new reading or update existing reading
      const response = isUpdate
        ? await dispatch(updateReading(payload))
        : await dispatch(saveReading(payload));

      if (response?.success) {
        toast.success(
          isUpdate
            ? "Reading updated successfully!"
            : "Reading saved successfully!",
        );

        if (!isUpdate) {
          reset();
        }
      } else {
        toast.error(response?.error || "Failed to process meter reading");
      }
    } catch (err) {
      toast.error(err?.message || "Something went wrong");
    }
  };

  // If user opens page without searching
  if (!reading) {
    return (
      <div className="min-h-screen bg-gray-200 p-6">
        <div className="mx-auto max-w-xl rounded-xl bg-white p-6 text-center shadow">
          <h2 className="text-xl font-bold text-gray-800">
            No Reading Data Found
          </h2>

          <p className="mt-2 text-gray-600">
            Please search for an account before entering a meter reading.
          </p>

          <button
            type="button"
            onClick={() => navigate("/metering/meter/reading")}
            className="mt-5 rounded bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <Toaster position="top-center" />

      <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow">
        {/* Page Heading */}
        <h1 className="mb-2 text-center text-2xl font-bold text-blue-800">
          Meter Reading And Modification
        </h1>

        <p className="mb-6 text-center text-gray-600">
          Previous reading details and current meter reading
        </p>

        {/* Error Message */}
        {error && (
          <div className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
            {typeof error === "string"
              ? error
              : "Failed to fetch meter reading"}
          </div>
        )}

        {/* Account Details */}
        <section className="mb-6 rounded-lg border border-gray-200 p-4">
          <h2 className="mb-4 border-b pb-2 text-lg font-bold text-gray-800">
            Account Details
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-gray-500">Account Number</label>

              <p className="break-all text-lg font-semibold text-gray-800">
                {reading.accountNo || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-500">Consumer ID</label>

              <p className="break-all text-lg font-semibold text-gray-800">
                {reading.consumerId || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Selected Reading Date
              </label>

              <p className="text-lg font-semibold text-gray-800">
                {reading.readingDate || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Previous Reading Date
              </label>

              <p className="text-lg font-semibold text-gray-800">
                {reading.prstRdgDate || "No previous reading"}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-500">Reading Month</label>

              <p className="text-lg font-semibold text-gray-800">
                {reading.rdgMonth ?? "N/A"}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-500">Reading Year</label>

              <p className="text-lg font-semibold text-gray-800">
                {reading.rdgYear ?? "N/A"}
              </p>
            </div>
          </div>
        </section>

        {/* Previous Reading Details */}
        <section className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
          <h2 className="mb-4 border-b border-blue-200 pb-2 text-lg font-bold text-blue-900">
            Previous Meter Reading
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-gray-600">Previous KWH</label>

              <p className="text-xl font-bold text-blue-700">
                {reading.prstKwh ?? 0}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-600">Previous KW</label>

              <p className="text-xl font-bold text-blue-700">
                {reading.prstkw ?? 0}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-600">Previous KVA</label>

              <p className="text-xl font-bold text-blue-700">
                {reading.prstKva ?? 0}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-600">Previous KVAH</label>

              <p className="text-xl font-bold text-blue-700">
                {reading.prstKvah ?? 0}
              </p>
            </div>
          </div>
        </section>

        {/* Billed Reading Details */}
        <section className="mb-6 rounded-lg border border-gray-200 p-4">
          <h2 className="mb-4 border-b pb-2 text-lg font-bold text-gray-800">
            Billed Reading Details
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-gray-500">Billed KWH</label>

              <p className="font-semibold text-gray-800">
                {reading.billedKwh ?? 0}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-500">Billed KVAH</label>

              <p className="font-semibold text-gray-800">
                {reading.billedKvah ?? 0}
              </p>
            </div>
          </div>
        </section>

        {/* Current Reading Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <h2 className="text-lg font-bold text-gray-800">
            {isUpdate
              ? "Modify Existing Meter Reading"
              : "Enter Current Meter Reading"}
          </h2>

          {/* Current KWH */}
          <div>
            <label className="mb-1 block font-medium text-gray-700">
              Current KWH Reading
            </label>

            <input
              type="number"
              step="any"
              {...register("currentKwh", {
                required: "Current KWH reading is required",
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "Reading cannot be negative",
                },
              })}
              className="w-full rounded border p-2 outline-none focus:border-blue-500"
              placeholder="Enter current KWH reading"
            />

            {errors.currentKwh && (
              <p className="mt-1 text-sm text-red-600">
                {errors.currentKwh.message}
              </p>
            )}
          </div>

          {/* Current KVAH */}
          <div>
            <label className="mb-1 block font-medium text-gray-700">
              Current KVAH Reading
            </label>

            <input
              type="number"
              step="any"
              {...register("currentKvah", {
                required: "Current KVAH reading is required",
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "Reading cannot be negative",
                },
              })}
              className="w-full rounded border p-2 outline-none focus:border-blue-500"
              placeholder="Enter current KVAH reading"
            />

            {errors.currentKvah && (
              <p className="mt-1 text-sm text-red-600">
                {errors.currentKvah.message}
              </p>
            )}
          </div>

          {/* Current KVA */}
          <div>
            <label className="mb-1 block font-medium text-gray-700">
              Current KVA Reading
            </label>

            <input
              type="number"
              step="any"
              {...register("currentKva", {
                required: "Current KVA reading is required",
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "Reading cannot be negative",
                },
              })}
              className="w-full rounded border p-2 outline-none focus:border-blue-500"
              placeholder="Enter current KVA reading"
            />

            {errors.currentKva && (
              <p className="mt-1 text-sm text-red-600">
                {errors.currentKva.message}
              </p>
            )}
          </div>

          {/* Current KW */}
          <div>
            <label className="mb-1 block font-medium text-gray-700">
              Current KW Reading
            </label>

            <input
              type="number"
              step="any"
              {...register("currentKw", {
                required: "Current KW reading is required",
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "Reading cannot be negative",
                },
              })}
              className="w-full rounded border p-2 outline-none focus:border-blue-500"
              placeholder="Enter current KW reading"
            />

            {errors.currentKw && (
              <p className="mt-1 text-sm text-red-600">
                {errors.currentKw.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate("/metering/meter/reading")}
              className="rounded border border-gray-300 px-5 py-2 font-semibold text-gray-700 hover:bg-gray-100"
            >
              Back
            </button>

            <button
              type="submit"
              disabled={loading || isSubmitting}
              className="rounded bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {loading || isSubmitting
                ? "Processing..."
                : isUpdate
                  ? "Update Reading"
                  : "Save Reading"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeterReadingScreen;

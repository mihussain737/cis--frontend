import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { saveMeter } from "../services/actions/actions";

const MeterStock = () => {
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.connection);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      meterNo: "",
      meterMake: "",
      meterPhase: "",
      meterDigit: "",
      meterCreatedDate: new Date().toISOString().split("T")[0],
      meterType: "",
      initialKwh: "",
      initialKvah: "",
    },
  });

  const handleDateChange = (newDate) => {
    setDate(newDate);

    const formattedDate = newDate.toISOString().split("T")[0];

    setValue("meterCreatedDate", formattedDate, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const onSubmit = async (meterData) => {
  const formattedMeterData = {
    meterNo: meterData.meterNo,
    meterMake: meterData.meterMake,
    meterPhase: String(meterData.meterPhase),
    meterDigit: String(meterData.meterDigit),
    meterCreatedDate:
      meterData.meterCreatedDate ||
      date.toISOString().split("T")[0],
    meterType: meterData.meterType,
    initialKwh: Number(meterData.initialKwh),
    initialKvah: Number(meterData.initialKvah),

    // Important: backend expects this int field
    recordStatus: 1,
  };

  console.log("Meter Stock Data:", formattedMeterData);
  console.log("JSON:", JSON.stringify(formattedMeterData));

  const response = await dispatch(saveMeter(formattedMeterData));

  if (response?.success) {
    toast.success("Meter Stock submitted successfully!");
    reset();
    setDate(new Date());
  } else {
    toast.error("Failed to submit meter stock!");
  }
};

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <Toaster position="top-right" />

      <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow">
        <h1 className="mb-2 text-center text-2xl font-bold">
          Meter Stock
        </h1>

        <p className="mb-6 text-center text-gray-600">
          Submit a meter stock
        </p>

        <form
          className="space-y-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <section>
            <div className="grid gap-4 md:grid-cols-2">
              {/* Meter Number */}
              <div>
                <label className="mb-1 block font-medium">
                  Meter No
                </label>

                <input
                  type="text"
                  {...register("meterNo", {
                    required: "Meter number is required",
                  })}
                  className="w-full rounded border p-2"
                  placeholder="Enter Meter No"
                />

                {errors.meterNo && (
                  <p className="text-sm text-red-500">
                    {errors.meterNo.message}
                  </p>
                )}
              </div>

              {/* Meter Make */}
              <div>
                <label className="mb-1 block font-medium">
                  Meter Make
                </label>

                <select
                  {...register("meterMake", {
                    required: "Meter make is required",
                  })}
                  className="w-full rounded border p-2"
                >
                  <option value="">Select Meter Make</option>
                  <option value="Secure">Secure</option>
                  <option value="Bentec">Bentec</option>
                  <option value="Genus">Genus</option>
                </select>

                {errors.meterMake && (
                  <p className="text-sm text-red-500">
                    {errors.meterMake.message}
                  </p>
                )}
              </div>

              {/* Meter Phase */}
              <div>
                <label className="mb-1 block font-medium">
                  Meter Phase
                </label>

                <input
                  type="number"
                  {...register("meterPhase", {
                    required: "Meter phase is required",
                    valueAsNumber: true,
                    min: {
                      value: 1,
                      message: "Meter phase must be between 1 and 3",
                    },
                    max: {
                      value: 3,
                      message: "Meter phase must be between 1 and 3",
                    },
                  })}
                  className="w-full rounded border p-2"
                  placeholder="Enter Meter Phase"
                />

                {errors.meterPhase && (
                  <p className="text-sm text-red-500">
                    {errors.meterPhase.message}
                  </p>
                )}
              </div>

              {/* Meter Digit */}
              <div>
                <label className="mb-1 block font-medium">
                  Meter Digit
                </label>

                <input
                  type="number"
                  {...register("meterDigit", {
                    required: "Meter digit is required",
                    valueAsNumber: true,
                    min: {
                      value: 6,
                      message: "Meter digit must be between 6 and 8",
                    },
                    max: {
                      value: 8,
                      message: "Meter digit must be between 6 and 8",
                    },
                  })}
                  className="w-full rounded border p-2"
                  placeholder="Enter Meter Digit"
                />

                {errors.meterDigit && (
                  <p className="text-sm text-red-500">
                    {errors.meterDigit.message}
                  </p>
                )}
              </div>

              {/* Meter Manufacture Date */}
              <div>
                <label className="mb-1 block font-medium">
                  Meter Manufacture Date
                </label>

                <Calendar
                  onChange={handleDateChange}
                  value={date}
                />

                <input
                  type="hidden"
                  {...register("meterCreatedDate", {
                    required: "Meter manufacture date is required",
                  })}
                />

                {errors.meterCreatedDate && (
                  <p className="text-sm text-red-500">
                    {errors.meterCreatedDate.message}
                  </p>
                )}
              </div>

              {/* Meter Type */}
              <div>
                <label className="mb-1 block font-medium">
                  Meter Type
                </label>

                <select
                  {...register("meterType", {
                    required: "Meter type is required",
                  })}
                  className="w-full rounded border p-2"
                >
                  <option value="">Select Meter Type</option>
                  <option value="Smart">Smart</option>
                  <option value="Postpaid">Postpaid</option>
                </select>

                {errors.meterType && (
                  <p className="text-sm text-red-500">
                    {errors.meterType.message}
                  </p>
                )}
              </div>

              {/* Initial Kwh */}
              <div>
                <label className="mb-1 block font-medium">
                  Initial Kwh
                </label>

                <input
                  type="number"
                  step="0.01"
                  {...register("initialKwh", {
                    required: "Initial Kwh is required",
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: "Initial Kwh cannot be negative",
                    },
                  })}
                  className="w-full rounded border p-2"
                  placeholder="Enter Initial Kwh"
                />

                {errors.initialKwh && (
                  <p className="text-sm text-red-500">
                    {errors.initialKwh.message}
                  </p>
                )}
              </div>

              {/* Initial Kvah */}
              <div>
                <label className="mb-1 block font-medium">
                  Initial Kvah
                </label>

                <input
                  type="number"
                  step="0.01"
                  {...register("initialKvah", {
                    required: "Initial Kvah is required",
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: "Initial Kvah cannot be negative",
                    },
                  })}
                  className="w-full rounded border p-2"
                  placeholder="Enter Initial Kvah"
                />

                {errors.initialKvah && (
                  <p className="text-sm text-red-500">
                    {errors.initialKvah.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="rounded bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div
                    className="h-5 w-5 animate-spin rounded-full border-2 border-blue-200 border-t-white"
                  />
                  Submitting...
                </div>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeterStock;
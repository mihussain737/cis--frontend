import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { assignNewMeter } from "../services/actions/meteringactions";

const AssignNewMeter = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { loading } = useSelector((state) => state.connection || {});
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const response = await dispatch(assignNewMeter(data));

    if (response?.success) {
      toast.success("Meter Assigned to consumer: " + data.accountNo);
      reset();
    } else {
      toast.error("Failed to assigned consumer");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <Toaster position="top-center" />

      <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow">
        <h1 className="mb-2 text-center text-2xl font-bold">
          Assign New Meter
        </h1>

        <p className="mb-6 text-center text-gray-600">
          Assign meter to consumer
        </p>

        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <section>
            <div className="grid gap-4 md:grid-cols-2">
              {/* Account Number */}
              <div>
                <label className="mb-1 block font-medium text-blue-700">
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
                  className="w-full rounded border p-2"
                  placeholder="Enter Account No"
                />

                {errors.accountNo && (
                  <p className="text-sm text-red-500">
                    {errors.accountNo.message}
                  </p>
                )}
              </div>

              {/* Meter Number */}
              <div>
                <label className="mb-1 block font-medium text-blue-700">
                  Meter No
                </label>

                <input
                  type="text"
                  {...register("meterNo", {
                    required: "Meter No is required",
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

              {/* Meter Multiplier */}
              <div>
                <label className="mb-1 block font-medium text-blue-700">
                  MF
                </label>

                <input
                  type="number"
                  step="any"
                  {...register("mf", {
                    required: "MF is required",
                    valueAsNumber: true,
                    min: {
                      value: 0.01,
                      message: "MF must be greater than 0",
                    },
                  })}
                  className="w-full rounded border p-2"
                  placeholder="Enter MF"
                />

                {errors.mf && (
                  <p className="text-sm text-red-500">{errors.mf.message}</p>
                )}
              </div>

              {/* Initial KWH */}
              <div>
                <label className="mb-1 block font-medium text-blue-700">
                  Initial KWH
                </label>

                <input
                  type="number"
                  step="any"
                  {...register("initialKwh", {
                    required: "Initial KWH is required",
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: "Initial KWH cannot be negative",
                    },
                  })}
                  className="w-full rounded border p-2"
                  placeholder="Enter Initial KWH"
                />

                {errors.initialKwh && (
                  <p className="text-sm text-red-500">
                    {errors.initialKwh.message}
                  </p>
                )}
              </div>

              {/* Initial KVA */}
              <div>
                <label className="mb-1 block font-medium text-blue-700">
                  Initial KVA
                </label>

                <input
                  type="number"
                  step="any"
                  {...register("initialKva", {
                    required: "Initial KVA is required",
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: "Initial KVA cannot be negative",
                    },
                  })}
                  className="w-full rounded border p-2"
                  placeholder="Enter Initial KVA"
                />

                {errors.initialKva && (
                  <p className="text-sm text-red-500">
                    {errors.initialKva.message}
                  </p>
                )}
              </div>

              {/* Initial KVAH */}
              <div>
                <label className="mb-1 block font-medium text-blue-700">
                  Initial KVAH
                </label>

                <input
                  type="number"
                  step="any"
                  {...register("initialKvah", {
                    required: "Initial KVAH is required",
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: "Initial KVAH cannot be negative",
                    },
                  })}
                  className="w-full rounded border p-2"
                  placeholder="Enter Initial KVAH"
                />

                {errors.initialKvah && (
                  <p className="text-sm text-red-500">
                    {errors.initialKvah.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="rounded bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-200 border-t-white" />
                  Assigning...
                </div>
              ) : (
                "Assign Meter"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignNewMeter;

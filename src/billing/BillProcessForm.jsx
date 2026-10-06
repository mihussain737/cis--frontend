import React from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";

const BillProcessForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    const [year, month] = data.billMonthAndYear.split("-");

    console.log("Account No:", data.accountNumber);
    console.log("Month:", Number(month));
    console.log("Year:", Number(year));

    // API call will go here
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <Toaster position="top-center" />

      <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow">

        <h1 className="mb-2 text-center text-2xl font-bold text-blue-800">
          Bill Process
        </h1>

        <p className="mb-6 text-center text-gray-600">
          Process your bill
        </p>

        <section className="mb-6 rounded-lg border border-gray-200 p-4">

          <h2 className="mb-4 border-b pb-2 text-center text-lg font-bold text-gray-800">
            Account Details
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="grid grid-cols-1 gap-4">

              {/* Account Number */}
              <div>
                <label className="mb-1 block font-medium text-gray-700">
                  Account Number
                </label>

                <input
                  type="text"
                  {...register("accountNumber", {
                    required: "Account No is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Account No must contain only digits",
                    },
                  })}
                  className="w-full rounded border p-2 outline-none focus:border-blue-500"
                  placeholder="Enter Account No"
                />

                {errors.accountNumber && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.accountNumber.message}
                  </p>
                )}
              </div>

              {/* Month and Year */}
              <div>
                <label className="mb-1 block font-medium text-gray-700">
                  Select Month And Year
                </label>

                <input
                  type="month"
                  {...register("billMonthAndYear", {
                    required: "Bill Month And Year Required",
                  })}
                  className="w-full rounded border p-2 outline-none focus:border-blue-500"
                />

                {errors.billMonthAndYear && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.billMonthAndYear.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="flex justify-end">

                <button
                  type="submit"
                  className="rounded bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700"
                >
                  Bill Process
                </button>

              </div>

            </div>

          </form>
        </section>
      </div>
    </div>
  );
};

export default BillProcessForm;
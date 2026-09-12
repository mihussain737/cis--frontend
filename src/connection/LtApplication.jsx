import React from "react";
import { useForm } from "react-hook-form";
import { connectionPost } from "../services/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const LTConnection = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.connection);

  const districts = [
    "Ranchi",
    "Sahebganj",
    "Saraikela Kharsawan",
    "Simdega",
    "West Singhbhum",
  ];

  const onSubmit = async (connectionData) => {
    console.log(connectionData);
    const response=await dispatch(connectionPost(connectionData));
    // console.log(response);
    if(response.success){
      toast.success("Connection submited successfully!")
      reset();
    }
    console.log("LT Connection Application:", connectionData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow">
        <h1 className="mb-2 text-2xl font-bold">Apply for New LT Connection</h1>

        <p className="mb-6 text-gray-600">
          Submit an application for a new low-tension electricity connection.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <section>
            <h2 className="mb-4 text-lg font-semibold">Applicant Details</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label>Applicant Name</label>
                <input
                  {...register("applicantName", {
                    required: "Applicant name is required",
                  })}
                  className="w-full rounded border p-2"
                  placeholder="Enter applicant name"
                />

                {errors.applicantName && (
                  <p className="text-sm text-red-500">
                    {errors.applicantName.message}
                  </p>
                )}
              </div>

              <div>
                <label>Mobile Number</label>
                <input
                  {...register("mobileNumber", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter a valid mobile number",
                    },
                  })}
                  className="w-full rounded border p-2"
                  placeholder="Enter mobile number"
                />

                {errors.mobileNumber && (
                  <p className="text-sm text-red-500">
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="w-full rounded border p-2"
                  placeholder="Enter email"
                />

                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label>Purpose of Connection</label>
                <select
                  {...register("purpose", {
                    required: "Purpose is required",
                  })}
                  className="w-full rounded border p-2"
                >
                  <option value="">Select purpose</option>
                  <option value="RESIDENTIAL">Residential</option>
                  <option value="COMMERCIAL">Commercial</option>
                  <option value="INDUSTRIAL">Industrial</option>
                  <option value="AGRICULTURAL">Agricultural</option>
                </select>

                {errors.purpose && (
                  <p className="text-sm text-red-500">
                    {errors.purpose.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold">Address Details</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label>House / Flat Number</label>
                <input
                  {...register("houseNumber", {
                    required: "House number is required",
                  })}
                  className="w-full rounded border p-2"
                />
              </div>

              <div>
                <label>Street</label>
                <input
                  {...register("street", {
                    required: "Street is required",
                  })}
                  className="w-full rounded border p-2"
                />
              </div>

              <div>
                <label>City / Village</label>
                <input
                  {...register("city", {
                    required: "City or village is required",
                  })}
                  className="w-full rounded border p-2"
                />
              </div>

              <div>
                {/* <label>District</label> */}
                {/* <input
                  {...register("district", {
                    required: "District is required",
                  })}
                  className="w-full rounded border p-2"
                /> */}
                <div>
                  <label>District</label>

                  <select
                    {...register("district", {
                      required: "District is required",
                    })}
                    className="w-full rounded border p-2"
                    defaultValue=""
                  >
                    <option value="">Select District</option>

                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>

                  {errors.district && (
                    <p className="text-sm text-red-500">
                      {errors.district.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label>State</label>
                <input
                  readOnly
                  {...register("state", {
                    required: "State is required",
                    value: "Jharkhand",
                  })}
                  className="w-full rounded border p-2"
                />
              </div>

              <div>
                <label>Pincode</label>
                <input
                  {...register("pincode", {
                    required: "Pincode is required",
                    pattern: {
                      value: /^\d{6}$/,
                      message: "Enter a valid 6-digit pincode",
                    },
                  })}
                  className="w-full rounded border p-2"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold">
              Connection Requirements
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label>Requested Load in kW</label>
                <input
                  type="number"
                  step="0.1"
                  {...register("requestedLoad", {
                    required: "Requested load is required",
                    min: {
                      value: 0.1,
                      message: "Load must be greater than zero",
                    },
                  })}
                  className="w-full rounded border p-2"
                  placeholder="Example: 3.5"
                />
              </div>

              <div>
                <label>Phase</label>
                <select
                  {...register("phase", {
                    required: "Phase is required",
                  })}
                  className="w-full rounded border p-2"
                >
                  <option value="">Select phase</option>
                  <option value="1">Single Phase</option>
                  <option value="3">Three Phase</option>
                </select>
              </div>

              <div>
                <label>Ownership Type</label>
                <select
                  {...register("ownershipType", {
                    required: "Ownership type is required",
                  })}
                  className="w-full rounded border p-2"
                >
                  <option value="">Select ownership type</option>
                  <option value="OWNER">Owner</option>
                  <option value="TENANT">Tenant</option>
                </select>
              </div>
            </div>
          </section>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div
                    className="w-5 h-5 border-2
                    border-blue-200
                    border-t-white
                    rounded-full
                    animate-spin"
                  />
                  Submit Application...
                </div>
              ) : (
                "Submit Application"
              )}
            </button>
            <Toaster />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LTConnection;

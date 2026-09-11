import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../services/actions/actions";
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate=useNavigate();

  const { loading, error } = useSelector(
    (state) => state.auth
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (userData) => {
  const result = await dispatch(registerUser(userData));

  if (result.success) {
    toast.success("Account created successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-blue-600">
            CIS
          </h1>

          <h2 className="text-2xl font-semibold text-gray-800 mt-2">
            Create Account
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Register to access your CIS account
          </p>

        </div>

        {/* Backend Error */}
        {error && (
          <div className="mb-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3">
            <p className="text-sm text-red-600 text-center">
              {error}
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          {/* Username */}
          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              {...register("username", {
                required: "Username is required",

                minLength: {
                  value: 3,
                  message:
                    "Username must be at least 3 characters",
                },

                maxLength: {
                  value: 20,
                  message:
                    "Username cannot exceed 20 characters",
                },

                pattern: {
                  value: /^[a-zA-Z0-9_]+$/,
                  message:
                    "Username can contain only letters, numbers and underscore",
                },
              })}
              className={`w-full px-4 py-2.5 rounded-lg border outline-none transition
                ${
                  errors.username
                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                }`}
            />

            {errors.username && (
              <p className="text-red-500 text-xs mt-1">
                {errors.username.message}
              </p>
            )}

          </div>

          {/* Email */}
          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required",

                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message:
                    "Enter a valid email address",
                },
              })}
              className={`w-full px-4 py-2.5 rounded-lg border outline-none transition
                ${
                  errors.email
                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                }`}
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}

          </div>

          {/* Mobile Number */}
          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Mobile Number
            </label>

            <input
              type="text"
              inputMode="numeric"
              maxLength={10}
              placeholder="Enter 10 digit mobile number"
              {...register("mobileNumber", {
                required:
                  "Mobile number is required",

                pattern: {
                  value: /^[6-9][0-9]{9}$/,
                  message:
                    "Mobile number must be a valid 10 digit number",
                },
              })}
              className={`w-full px-4 py-2.5 rounded-lg border outline-none transition
                ${
                  errors.mobileNumber
                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                }`}
            />

            {errors.mobileNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.mobileNumber.message}
              </p>
            )}

          </div>

          {/* Password */}
          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter password"
                {...register("password", {
                  required:
                    "Password is required",

                  minLength: {
                    value: 4,
                    message:
                      "Password must be at least 4 characters",
                  },

                  pattern: {
                     value: /^[a-zA-Z0-9_]+$/,
                    message:
                      "Password must contain character and digit"
                  },
                })}
                className={`w-full px-4 py-2.5 pr-12 rounded-lg border outline-none transition
                  ${
                    errors.password
                      ? "border-red-500 focus:ring-2 focus:ring-red-200"
                      : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  }`}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}

          </div>

          {/* Confirm Password */}
          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Confirm Password
            </label>

            <div className="relative">

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm password"
                {...register("confirmPassword", {
                  required:
                    "Please confirm your password",

                  validate: (value) =>
                    value === password ||
                    "Passwords do not match",
                })}
                className={`w-full px-4 py-2.5 pr-12 rounded-lg border outline-none transition
                  ${
                    errors.confirmPassword
                      ? "border-red-500 focus:ring-2 focus:ring-red-200"
                      : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  }`}
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700
                       disabled:bg-blue-400
                       disabled:cursor-not-allowed
                       text-white font-semibold py-3
                       rounded-lg transition duration-200
                       shadow-md"
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

                Creating Account...

              </div>
            ) : (
              "Create Account"
            )}

          </button>

        </form>

        {/* Login Link */}
        <div className="text-center mt-6 text-sm text-gray-500">

          Already have an account?

          <a
            href="/login"
            className="text-blue-600 font-semibold ml-1 hover:underline"
          >
            Login
          </a>

        </div>

      </div>

    </div>
  );
};

export default Signup;
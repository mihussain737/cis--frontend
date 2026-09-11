import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../services/actions/actions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit =async (data) => {
    const result =await dispatch(loginUser(data));
    
    if (result.success) {
      toast.success("Logged In successfully!");
      const user = result.data;

    localStorage.setItem("token", user.token);
    localStorage.setItem("username", user.username);
    localStorage.setItem("email", user.email);
    localStorage.setItem("role", user.role.roleName);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">CIS</h1>

          <h2 className="text-2xl font-semibold text-gray-800 mt-2">
            Login Account
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Login to access your CIS account
          </p>
        </div>

        {/* Backend Error */}
        {error && (
          <div className="mb-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3">
            <p className="text-sm text-red-600 text-center">{error}</p>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                  message: "Username must be at least 3 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Username cannot exceed 20 characters",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_]+$/,
                  message:
                    "Username can contain only letters, digits and underscore",
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

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "Password must be at least 4 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password cannot exceed 20 characters",
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
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
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
                Login...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

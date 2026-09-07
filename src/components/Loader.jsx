import React from "react";
const Loader = ({ size = "md", text = "Loading..." }) => {
  const sizes = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-4",
    lg: "w-12 h-12 border-4",
  };
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {" "}
      <div
        className={` ${sizes[size]} border-blue-200 border-t-blue-600 rounded-full animate-spin `}
      />{" "}
      {text && <p className="text-sm text-gray-500"> {text} </p>}{" "}
    </div>
  );
};
export default Loader;

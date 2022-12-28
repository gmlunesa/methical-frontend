import React from "react";

const Button = ({ handleClick, isLoading }) => {
  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="rounded-lg text-center text-gray-700 py-2 px-4 bg-gray-200 border-2 border-purple-500 p-0.5 shadow transition duration-200 hover:border-orange-400"
    >
      Generate profile
    </button>
  );
};

export default Button;

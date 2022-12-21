import React from "react";

const Button = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="rounded-lg text-center text-gray-700 py-2 px-4 bg-gradient-to-br from-orange-200 via-red-200  to-purple-300 p-0.5 shadow-xl transition duration-500 hover:bg-gradient-to-tr hover:shadow-sm"
    >
      Generate profile
    </button>
  );
};

export default Button;

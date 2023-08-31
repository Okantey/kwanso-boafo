import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-primary text-white px-8 py-2 rounded-md text-base font-bold">
      {title}
    </button>
  );
};

export default Button;

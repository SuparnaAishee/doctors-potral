import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-blue-500">
      {children}
    </button>
  );
};

export default PrimaryButton;

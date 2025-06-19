import React from "react";

export const Button = ({ children, onClick = () => {} }) => {
  return (
    <button className="customButton" onClick={onClick}>
      {children}
    </button>
  );
};

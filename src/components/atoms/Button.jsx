import React from "react";
import "./Button.css";
export const Button = ({ children, onClick = () => {} }) => {
  return (
    <button className="customButton" onClick={onClick}>
      {children}
    </button>
  );
};

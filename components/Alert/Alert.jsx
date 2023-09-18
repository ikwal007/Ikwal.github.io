import React from "react";
import { SlClose } from "react-icons/sl";

const Alert = ({ message, setErrors, className= null }) => {
  return (
    <div className={`alert alert-error text-white ${className}`}>
      <SlClose className="w-5 h-5 cursor-pointer" onClick={() => setErrors('')} />
      <span>{message}</span>
    </div>
  );
};

export default Alert;

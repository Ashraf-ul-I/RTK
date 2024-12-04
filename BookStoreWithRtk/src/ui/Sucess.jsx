import React from "react";

const Sucess = ({ message }) => {
  return (
    <div className="success-container">
      <div className="success-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p className="success-text">{message || "Action was successful!"}</p>
    </div>
  );
};

export default Sucess;

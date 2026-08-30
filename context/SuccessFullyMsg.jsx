"use client";
import React, { createContext, useState, useContext } from "react";

export const NotificationContext = createContext();

export const SuccessFullyMsg = ({ children }) => {
  const [message, setMessage] = useState(false);
  const [apiError, setApiError] = useState("");

  const showSuccess = () => {
    setMessage(true);
    setTimeout(() => setMessage(), 3000); // Auto-hide after 3 seconds
  };

  const showApiError = (erreMsg) => {
    setApiError(erreMsg);
    setTimeout(() => {
      setApiError("");
    }, 2000);
  };
  return (
    <NotificationContext.Provider
      value={{ message, showSuccess, apiError, showApiError }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

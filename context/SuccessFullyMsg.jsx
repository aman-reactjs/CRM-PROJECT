"use client";
import React, { createContext, useState, useContext } from "react";

export const NotificationContext = createContext();

export const SuccessFullyMsg = ({ children }) => {
  const [message, setMessage] = useState(false);

  const showSuccess = () => {
    setMessage(true);
    setTimeout(() => setMessage(), 3000); // Auto-hide after 3 seconds
  };

  return (
    <NotificationContext.Provider value={{ message, showSuccess }}>
      {children}
    </NotificationContext.Provider>
  );
};

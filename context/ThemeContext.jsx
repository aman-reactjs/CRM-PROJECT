"use client"
import React, { createContext,useState } from 'react'



export const toggleContext = createContext();



export const ThemeContext = ({children}) => {
  const [theme, setTheme] = useState("light");

   const switchTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <toggleContext.Provider value={{ theme, switchTheme }}>
      {children}
    </toggleContext.Provider>
  )
}


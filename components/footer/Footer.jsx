"use client";
import { Link } from "lucide-react";
import React, { useContext } from "react";
import Image from "next/image";
import { toggleContext } from "@/context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(toggleContext);
  return (
    <>
      <div
        className={`w-full h-12 ${theme === "light" ? "bg-gray-50 text-black" : "bg-gray-800 text-white border-none"} hidden md:flex items-center justify-between px-3 border`}
      >
        <div className="w-full min-w-24 flex items-center justify-center">
          <p className="font-sans flex absolute left-11 md:relative md:left-20">
            Mini CRM <span>- Customer Relationship Management</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

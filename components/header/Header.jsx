"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  List,
  Moon,
  // NotepadText,
  // Settings,
  Sun,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { toggleContext } from "@/context/ThemeContext";

const Header = () => {
  const pathname = usePathname();
  const { theme, switchTheme } = useContext(toggleContext);
  const sidebar = [
    { name: "Leads Form", icon: List, path: "/leadsform" },
    { name: "Deshboard", icon: LayoutDashboard, path: "/dashboard" },
    // { name: "Reports", icon: NotepadText, path: "/reports" },
    // { name: "Settings", icon: Settings, path: "/settings" }
  ];

  return (
    <>
      <div
        className={`w-full h-12 ${theme === "light" ? "bg-gray-50 text-black" : "bg-gray-800 text-white border-none"} flex items-center justify-between px-3 border `}
      >
        <div className="w-full min-w-24 flex items-center">
          <Link href="/dashboard">
            <Image
              src="/assets/logos/mini_CRM_logo.png"
              alt="Mini CRM"
              width={50}
              height={50}
              className="block md:hidden w-15 relative right-4 cursor-pointer"
            />
          </Link>
          <p className="font-sans flex absolute left-11 md:relative md:left-20">
            Mini CRM{" "}
            <span className="hidden md:block">
              - Customer Relationship Management
            </span>
          </p>
        </div>
        <div className="md:w-full max-w-24   flex items-center gap-1 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p
            className={`hidden md:block ${theme === "light" ? "text-gray-600" : "text-gray-300"} text-[12px] font-bold`}
          >
            Sales Team
          </p>
        </div>
      </div>

      <aside
        className={`fixed bottom-0 h-14 w-full md:top-0 md:left-0 md:h-full md:w-20 border ${theme === "light" ? "bg-gray-50 text-black" : "bg-gray-800 text-white border-none"}`}
      >
        <div className="flex md:flex-col justify-center items-center gap-10">
          <div className="hidden md:flex w-16 h-12 items-center justify-center ">
            <Link href={"/dashboard"}>
              <Image
                src="/assets/logos/mini_CRM_logo.png"
                alt=""
                width={100}
                height={100}
                className="w-16"
              />
            </Link>
          </div>

          {/* Sidebar Items */}
          <ul className="flex w-full justify-around md:w-auto md:flex-col gap-0 md:gap-7 ">
            {sidebar.map((item, ind) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;

              return (
                <li key={ind}>
                  <Link
                    href={item.path}
                    className={`flex flex-col items-center gap-1 text-[10px] p-1 rounded-lg ${
                      isActive
                        ? theme === "light"
                          ? "text-blue-600 bg-blue-100 "
                          : "text-blue-300 bg-gray-700 "
                        : theme === "light"
                          ? "text-gray-600 "
                          : "text-gray-300"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
            <button
              onClick={switchTheme}
              className={`flex flex-col items-center justify-center text-[12px] ${
                theme === "light" ? "text-gray-600 " : "text-gray-300"
              }`}
            >
              {theme === "light" ? <Sun /> : <Moon />}
            </button>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Header;

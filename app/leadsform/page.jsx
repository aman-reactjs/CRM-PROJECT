"use client";

import { NotificationContext } from "@/context/SuccessFullyMsg";
import { toggleContext } from "@/context/ThemeContext";
import useform from "@/customHook/useForm";
import React, { useContext, useState } from "react";

const LeadsFrom = () => {
  const fromLead = {
    name: "",
    email: "",
    phone: "",
    company: "",
    source: "",
    status: "",
    notes: "",
  };

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    source: "",
    status: "",
    notes: "",
  });

  const { form, handleSubmit, handleChange } = useform(fromLead);
  const { theme } = useContext(toggleContext);
  const { message } = useContext(NotificationContext);

  const validate = () => {
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      company: "",
      source: "",
      status: "",
      notes: "",
    };

    let isValid = true;

    if (!form.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // else if (form.name.length <= 3) {
    //   newErrors.name = "Enter your full name";
    //   isValid = false;
    // }

    if (!form.phone) {
      newErrors.phone = "Mobile No. is required";
      isValid = false;
    } else if (form.phone.length !== 10) {
      newErrors.phone = "Mobile No. must be 10 digits";
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!form.email) {
      newErrors.email = "Email is required ";
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid Gmail address";
      isValid = false;
    }

    if (!form.company) {
      newErrors.company = "company is required ";
      isValid = false;
    }

    if (!form.source) {
      newErrors.source = "Select source ";
      isValid = false;
    }

    if (!form.status) {
      newErrors.status = " Select status ";
      isValid = false;
    }

    if (!form.notes) {
      newErrors.notes = "note is required ";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div
      className={`min-h-screen pt-1 md:pl-16 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {message && (
        <div className=" fixed top-12 md:top-10 left-[30%] md:left-[45%] z-20">
          <p
            className="p-2 rounded-lg border border-emerald-200
         bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800
           shadow-lg"
          >
            Successfully created lead
          </p>
        </div>
      )}

      <div className="w-full min-h-[calc(100vh-3rem)] p-5 pb-5 md:pb-0 md:p-8">
        {/* Heading */}
        <h1 className={`text-2xl font-semibold mb-6 `}>Add New Lead</h1>

        {/* form */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 md:gap-5"
          onSubmit={(e) => {
            e.preventDefault();

            if (validate()) {
              handleSubmit(e);
            }
          }}
        >
          {/* Lead Name */}
          <div>
            <label className="block text-sm font-medium  mb-1">Lead Name</label>

            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Enter lead name"
              className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500"
              onChange={handleChange}
              onFocus={() =>
                setErrors((prev) => ({
                  ...prev,
                  name: " ",
                }))
              }
            />
            <div className="h-5">
              {errors.name && (
                <p className=" w-64 md:w-80 text-left font-mono text-red-500 text-[12px] lg:text-sm">
                  {errors.name}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium  mb-1">Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Enter email"
              className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500"
              onChange={handleChange}
              onFocus={() =>
                setErrors((prev) => ({
                  ...prev,
                  email: " ",
                }))
              }
            />
            <div className="h-5">
              {errors.email && (
                <p className=" w-64 md:w-80 text-left font-mono text-red-500 text-[12px] lg:text-sm">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium  mb-1">
              Phone Number
            </label>

            <input
              type="tel"
              maxLength={10}
              name="phone"
              value={form.phone}
              placeholder="+(91) 010-XXXX "
              className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500"
              onChange={handleChange}
              onFocus={() =>
                setErrors((prev) => ({
                  ...prev,
                  phone: " ",
                }))
              }
            />
            <div className="h-5">
              {errors.phone && (
                <p className=" w-64 md:w-80 text-left font-mono text-red-500 text-[12px] lg:text-sm">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium  mb-1">
              Company Name
            </label>

            <input
              type="text"
              name="company"
              value={form.company}
              placeholder="Enter company name"
              className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500"
              onChange={handleChange}
              onFocus={() =>
                setErrors((prev) => ({
                  ...prev,
                  company: " ",
                }))
              }
            />
            <div className="h-5">
              {errors.company && (
                <p className=" w-64 md:w-80 text-left font-mono text-red-500 text-[12px] lg:text-sm">
                  {errors.company}
                </p>
              )}
            </div>
          </div>

          {/* Lead Source */}
          <div>
            <label className="block text-sm font-medium = mb-1">
              Lead Source
            </label>

            <select
              className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500"
              name="source"
              value={form.source}
              onChange={handleChange}
              onFocus={() =>
                setErrors((prev) => ({
                  ...prev,
                  source: " ",
                }))
              }
            >
              <option value="">Select lead source</option>
              <option value="website">Website</option>
              <option value="referral">Referral</option>
              <option value="linkedin">LinkedIn</option>
              <option value="other">Other</option>
            </select>

            <div className="h-5">
              {errors.source && (
                <p className=" w-64 md:w-80 text-left font-mono text-red-500 text-[12px] lg:text-sm">
                  {errors.source}
                </p>
              )}
            </div>
          </div>

          {/* Lead Status */}
          <div>
            <label className="block text-sm font-medium  mb-1">
              Lead Status
            </label>

            <select
              className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500"
              name="status"
              value={form.status}
              onChange={handleChange}
              onFocus={() =>
                setErrors((prev) => ({
                  ...prev,
                  status: " ",
                }))
              }
            >
              <option value="">Select lead status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="follow-up">Follow-up</option>
              <option value="converted">Converted</option>
              <option value="lost">Lost</option>
            </select>
            <div className="h-5">
              {errors.status && (
                <p className=" w-64 md:w-80 text-left font-mono text-red-500 text-[12px] lg:text-sm">
                  {errors.status}
                </p>
              )}
            </div>
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium  mb-1">Notes</label>

            <textarea
              rows="4"
              placeholder="Enter notes"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none resize-none focus:border-blue-500"
              name="notes"
              value={form.notes}
              onChange={handleChange}
            />
            <div className="h-5">
              {errors.notes && (
                <p className=" w-64 md:w-80 text-left font-mono text-red-500 text-[12px] lg:text-sm">
                  {errors.notes}
                </p>
              )}
            </div>
          </div>

          {/* Add Lead Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full md:w-auto px-6 h-10 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              Add Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadsFrom;

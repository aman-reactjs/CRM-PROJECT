import { NotificationContext } from "@/context/SuccessFullyMsg";
import axios from "axios";
import React, { useContext, useState } from "react";

const useform = (initialValue) => {
  const [form, setForm] = useState(initialValue);
  const { showSuccess, showApiError } = useContext(NotificationContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let valueData = value;
    if (name === "phone") {
      valueData = valueData.replace(/[^0-9]/g, "");
    }
    setForm((prev) => ({
      ...prev,
      [name]: valueData,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        form,
      );
      // console.log(res.data)
      // Existing leads localStorage se nikalo
      const oldLeads = JSON.parse(localStorage.getItem("leads")) || [];
      // console.log(oldLeads)
      // New lead ko existing leads ke saath add karo
      const newLead = {
        ...res.data,
        id: Date.now(),
      };

      const updatedLeads = [newLead, ...oldLeads];

      //  Updated leads ko localStorage mein save karo
      localStorage.setItem("leads", JSON.stringify(updatedLeads));
      showSuccess();
    } catch (error) {
      showApiError(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      );
    }
    setForm(initialValue);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`); // here we are sending deleting request to api

      const savedData = JSON.parse(localStorage.getItem("leads")) || []; // here we are getting all lead from the storage

      //  console.log(savedData)
      const updateData = savedData.filter((lead) => lead.id !== id); // here lead.id taken by local storage and id which is right hand side is taken by the onclick event from dashboard page

      localStorage.setItem("leads", JSON.stringify(updateData));

      return updateData;
    } catch (error) {
      showApiError(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      );
    }
  };

  const handleEdit = async (id) => {
    try {
      await axios.patch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        form,
      );
      const gettingData = JSON.parse(localStorage.getItem("leads")) || [];
      const editData = gettingData.map((lead) => {
        if (lead.id === id) {
          return {
            ...lead,
            ...form,
          };
        }

        return lead;
      });

      localStorage.setItem("leads", JSON.stringify(editData));

      return editData;
    } catch (error) {
      showApiError(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      );
    }
  };

  return {
    form,
    handleSubmit,
    handleChange,
    handleDelete,
    handleEdit,
    setForm,
  };
};

export default useform;

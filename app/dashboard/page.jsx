"use client";

import { toggleContext } from "@/context/ThemeContext";
import useForm from "@/customHook/useForm";
import { Edit, Trash2 } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

const Dashboard = (initialValue) => {
  const { form, handleDelete, handleEdit, setForm, handleChange } =
    useForm(initialValue); //  this is custom hooks

  const { theme } = useContext(toggleContext); /////// we import it from context api for theme changing
  const [users, setUsers] = useState([]); //// this is for showing data on the screen
  const [deleteMsg, setDeleteMsg] = useState(false); ///// this is for showing pop up msg when msg deleted
  const [editUser, setEditUser] = useState(null); // this is for edit or update leads

  useEffect(() => {
    let getSavedLeadsData = localStorage.getItem("leads");
    if (getSavedLeadsData) {
      setUsers(JSON.parse(getSavedLeadsData));
    } else {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/users",
          );
          // console.log(res)
          const savedLeadsData = res.data.map((user) => ({
            ...user,
            notes: "",
            status: "",
          }));
          localStorage.setItem("leads", JSON.stringify(savedLeadsData));
          setUsers(savedLeadsData);
        } catch (error) {
          console.log("Error fetch data");
        }
      };
      fetchData();
    }
  }, []);

  const handleDeleteMsg = () => {
    setDeleteMsg(true);
    setTimeout(() => {
      setDeleteMsg(false);
    }, 1000);
  };

  return (
    <main
      className={`min-h-screen p-5 md:p-8 md:pl-24 ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div className=" mb-6 flex flex-col md:flex-row justify-between gap-5 md:items-center">
        {deleteMsg && (
          <div className=" fixed top-12 md:top-10 left-[30%] md:left-[45%] z-20">
            <p className="p-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 shadow-lg">
              Lead has been Deleted
            </p>
          </div>
        )}
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>

          <p className={theme === "light" ? "text-gray-500" : "text-gray-400"}>
            All Created Leads
          </p>
        </div>
      </div>

      {/* Table Container */}
      <div className="w-full overflow-x-auto rounded-lg border">
        <table className="w-full min-w-[1100px] text-sm">
          <thead className={theme === "light" ? "bg-gray-100" : "bg-gray-800"}>
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Company</th>
              <th className="px-4 py-3 text-left">Source</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Notes</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className={`border-t ${
                  theme === "light"
                    ? "hover:bg-gray-50"
                    : "border-gray-700 hover:bg-gray-800"
                }`}
              >
                <td className="px-4 py-3 font-medium">{user.name}</td>

                <td className="px-4 py-3">{user.email}</td>

                <td className="px-4 py-3">{user.phone}</td>

                <td className="px-4 py-3">
                  {typeof user.company === "object"
                    ? user.company.name
                    : user.company}
                </td>

                <td className="px-4 py-3">{user.source}</td>

                <td className="px-4 py-3">
                  <span className="rounded-full py-1 text-xs text-green-600">
                    {user.status}
                  </span>
                </td>

                <td className="max-w-[200px] truncate px-4 py-3">
                  {user.notes}
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    {/* this is a edit buttun  */}

                    <button
                      onClick={() => {
                        setEditUser(user);
                        setForm(user);
                      }}
                      className="rounded-md p-2 text-blue-600 hover:bg-blue-100"
                      title="Edit"
                    >
                      <Edit size={17} />
                    </button>

                    {/* this is a delete button */}
                    <button
                      onClick={async () => {
                        const updateData = await handleDelete(user.id);
                        if (updateData) {
                          setUsers(updateData);
                          handleDeleteMsg();
                        }
                      }}
                      className="rounded-md p-2 text-red-600 hover:bg-red-100"
                      title="Delete"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Dashboard;

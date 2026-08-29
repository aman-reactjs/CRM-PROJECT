import React from "react";

const searchFilter = ({ filter, search, setSearch, setFilter }) => {
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by Name/Company"
        className="w-auto min-w-44 md:min-w-64 h-10 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500"
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-auto min-w-32 h-10 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-500 mx-2"
      >
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="follow-up">Follow-up</option>
        <option value="converted">Converted</option>
        <option value="lost">Lost</option>
      </select>
    </>
  );
};

export default searchFilter;

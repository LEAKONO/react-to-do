import React from "react";

function Search({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Item"
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
  );
}

export default Search;

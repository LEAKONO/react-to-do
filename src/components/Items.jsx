import React from "react";

function Items({ filteredItems, onDelete }) {
  return (
    <ul className="space-y-2 mt-4">
      {filteredItems.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center p-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm"
        >
          <span className="font-medium">{item.name} - {item.description} ({item.category})</span>
          <button
            onClick={() => onDelete(item.id)}
            className="ml-4 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Items;

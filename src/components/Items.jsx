import React from "react";

function Items({ filteredItems, onDelete }) {
  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item.id}>
          {item.name} - {item.description} ({item.category}) 
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}



export default Items;

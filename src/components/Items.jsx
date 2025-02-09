import React from "react";
import PropTypes from "prop-types";

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

Items.propTypes = {
  filteredItems: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Items;

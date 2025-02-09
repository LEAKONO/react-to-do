import React, { useState } from "react";
import PropTypes from "prop-types";

const ItemForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const newItem = {
      id: Date.now(), 
      name: formData.name,
      description: formData.description,
      category: formData.category,
    };

    onAdd(newItem);
    setFormData({ name: "", description: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={handleChange} />
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
};

// ✅ Added PropTypes validation
ItemForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ItemForm;

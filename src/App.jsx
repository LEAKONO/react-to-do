import { useState } from "react";
import Item from "./components/Items";
import Search from "./components/Search";
import ItemForm from "./components/ItemForm";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  const handleAdd = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDelete = (id) => {
    const toDelete = items.filter((item) => item.id !== id);
    setItems(toDelete);
  };

  // ✅ FIXED: Added missing parentheses for `toLowerCase()`
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Item List</h1>
      <Search search={search} setSearch={setSearch} />
      <ItemForm onAdd={handleAdd} />
      <Item filteredItems={filteredItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;

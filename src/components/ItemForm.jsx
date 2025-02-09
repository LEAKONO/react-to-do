import { useState } from "react";
import Item from "./components/Items";
import Search from "./components/Search";
import ItemForm from "./components/ItemForm";

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

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Item List
      </h1>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <Search search={search} setSearch={setSearch} />
        <ItemForm onAdd={handleAdd} />
        <Item filteredItems={filteredItems} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
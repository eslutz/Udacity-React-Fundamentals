import logo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";
import CreateNewItem from "./components/CreateNewItem";
import ItemList from "./components/ItemList";
import DeleteLastItem from "./components/DeleteLastItem";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  const noItemsFound = () => items.length === 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Controlled Components: Part 2</h1>
      </header>
      <h2>Shopping List</h2>
      <CreateNewItem onAddItem={handleAddItem} />
      <DeleteLastItem onDeleteLastItem={handleDeleteLastItem} buttonDisabled={noItemsFound()} />
      <ItemList items={items} />
    </div>
  );
};

export default App;

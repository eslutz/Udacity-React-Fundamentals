import { useState } from "react";
import logo from "./assets/react.svg";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Controlled Components: Part 1</h1>
      </header>
      <div className="container">
        <input type="text" placeholder="Say Something" value={value} onChange={handleChange} />
        <p className="echo">Echo:</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default App;

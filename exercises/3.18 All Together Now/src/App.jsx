import logo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const createUser = (user) => {
    user.numGamesPlayed = 0;
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">All Together Now</h1>
      </header>
      <AddUser users={users} onAddUser={createUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;

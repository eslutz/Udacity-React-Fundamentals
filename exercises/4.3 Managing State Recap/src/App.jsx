import logo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";
import ChatWindow from "./components/ChatWindow";

const users = [{ username: "Dwight" }, { username: "Future Dwight" }];

const App = () => {
  // `messages` is an array of objects (e.g., { usermame: 'Amy', text: 'a' })
  const [messages, setMessages] = useState([]);

  const onMessage = (username, message) => {
    const newMessage = {
      username: username,
      text: message,
    };

    setMessages(messages.concat([newMessage]));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Managing State Recap</h1>
      </header>
      <div className="container">
        {users.map((user) => (
          <ChatWindow key={user.username} user={user} messages={messages} onMessage={onMessage} />
        ))}
      </div>
    </div>
  );
};

export default App;

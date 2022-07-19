import { useState } from "react";
import "./App.css";
import { Message, MessageLocal } from "./Message";

function App() {
  const [text, setText] = useState("");

  const setMessage = (text) => {
    setText(text);
  };

  return (
    <div className="App">
      <MessageLocal setMessage={setMessage} />
      <hr />
      <Message text={text} />
    </div>
  );
}

export default App;

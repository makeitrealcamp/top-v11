import { useState } from "react";
import { connect } from "react-redux";

import { Message, MessageLocal } from "./components/Message";
import { Pokemons } from "./components/Pokemons";
import { updateMessage } from "./redux/actions/messsageAction";

function App({ message, updateMessage }) {
  //const [text, setText] = useState("");

  const setMessage = (text) => {
    //setText(text);
    updateMessage(text);
  };

  return (
    <div className="App">
      <MessageLocal setMessage={setMessage} />
      <hr />
      <Message text={message} />
      <Pokemons />
    </div>
  );
}

const mapStateToProps = ({ messageReducer }) => ({
  message: messageReducer.message,
});

const mapDispathToProps = {
  updateMessage,
};

//export default App;
export default connect(mapStateToProps, mapDispathToProps)(App);

import React, { useState } from "react";

const MessageLocal = ({ setMessage }) => {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    const { target } = e || {};
    const { value } = target || {};

    setText(value);
    setMessage(value);
  };

  return (
    <>
      <input type="text" onChange={handleChangeText} value={text} />
      <h1>{text}</h1>
    </>
  );
};

export default MessageLocal;

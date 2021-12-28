import React, { useState } from 'react';

const GroupInput = () => {

  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  return <div>
    <input onChange={(e) => {
      setInputText(e.target.value);
      setHistoryList([...historyList, e.target.value]);
    }} placeholder='Enter Some Text'/>
    <p>Group Member: { inputText }</p>
    <hr></hr>
    <ul>
      {historyList.map((rec) => {
        return <li>{rec}</li>
      })}
    </ul>
  </div>
}

export default GroupInput;
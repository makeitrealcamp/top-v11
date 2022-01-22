import React, { useState, useEffect, useRef } from "react";
import "./style.scss";

const Clock = () => {
  const [time,setTime] = useState(new Date().toLocaleTimeString());
  const savedCallback=useRef();
  
  useEffect(() => {
    savedCallback.current= setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(savedCallback.current);
    };
  }, []);

  const tick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  const stopInterval = () => {
    clearInterval(savedCallback.current);
  };

  const restartInterval = () => {
    savedCallback.current = setInterval(() => tick(), 1000);
  };


  return (
    <div className="clock">
      <p>{time}</p>
      <button className="btn" onClick={stopInterval}>
        STOP!
      </button>
      <button className="btn" onClick={restartInterval}>
        MOVE!
      </button>
    </div>
  );
};

export default Clock;

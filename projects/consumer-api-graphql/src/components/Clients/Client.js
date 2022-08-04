import React from "react";

import "./style.css";

const Client = ({ id, name, phone }) => {
  return (
    <div className="client-container">
      <h1>{name}</h1>
      <span>
        <strong>Phone:</strong> {phone}
      </span>
    </div>
  );
};

export default Client;

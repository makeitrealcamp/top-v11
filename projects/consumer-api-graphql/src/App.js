import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";

import { ClientList } from "./components/Clients";
import { ADD_CLIENT } from "./graphql/queries";
import { client } from "./graphql/apolloClient";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [addClient, { loading, error, data }] = useMutation(ADD_CLIENT);

  const showFormCreate = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      phone: e.target[1].value,
    };

    addClient({ variables: data });
    await client.refetchQueries({
      include: "active",
    });
  };

  return (
    <div>
      <button onClick={showFormCreate}>Crear cliente</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text"></input>
          <label>Phone:</label>
          <input type="numer"></input>
          <input type="submit" value="Create" />
        </form>
      )}

      <ClientList />
    </div>
  );
}

export default App;

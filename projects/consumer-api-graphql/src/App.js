import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import { GET_ALL_CLIENTS } from "./graphql/queries";

function App() {
  const { loading, error, data } = useQuery(GET_ALL_CLIENTS);

  useEffect(() => {}, []);

  console.log("loading", loading, "error", error, "data", data);

  if (loading) return <h1>Loading.....</h1>;
  if (error) return <h1>Error....</h1>;

  return <div className="App">Apollo client</div>;
}

export default App;

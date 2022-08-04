import React from "react";
import { useQuery } from "@apollo/client";

import { GET_ALL_CLIENTS } from "../../graphql/queries";
import Client from "./Client";

const ClientList = () => {
  const { loading, error, data } = useQuery(GET_ALL_CLIENTS);

  console.log("loading", loading, "error", error, "data", data?.clients);

  if (loading) return <h1>Loading.....</h1>;
  if (error) return <h1>Error....</h1>;

  return (
    <div className="">
      {data?.clients.map(({ id, name, phone }) => (
        <Client key={id} id={id} name={name} phone={phone} />
      ))}
    </div>
  );
};

export default ClientList;

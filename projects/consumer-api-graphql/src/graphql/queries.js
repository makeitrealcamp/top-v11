import { gql } from "@apollo/client";

export const GET_ALL_CLIENTS = gql`
  {
    clients {
      id
      name
      phone
    }
  }
`;

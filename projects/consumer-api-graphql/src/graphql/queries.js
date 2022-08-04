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

export const ADD_CLIENT = gql`
  mutation addClient($name: String, $phone: String) {
    addClient(name: $name, phone: $phone) {
      id
      name
      phone
    }
  }
`;

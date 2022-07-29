import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import cors from "cors";

const app = express();

app.use(cors());

// Routes

app.get("/api/users", (req, res) => {
  res.send("Users");
});

// Schema
const schema = buildSchema(`
  type Client {
    id: Int,
    name: String,
    phone: String
  }

  type Query {
    clients: [Client]
    client(id: Int): Client
  }

  type Mutation {
    addClient(name: String, phone: String) : Client
  }
`);

// Controllers = Root graphql
const clients = [];
let counterId = 0;

const root = {
  clients: () => clients,
  client: async ({ id }) => {
    const currentUser = await clients.find(
      ({ id: currentId }) => id === currentId
    );
    return currentUser;
  },
  addClient: (data) => {
    const { name, phone } = data;
    counterId += 1;
    const newClient = { id: counterId, name, phone };
    clients.push(newClient);
    return newClient;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root,
  })
);

app.listen(4000);

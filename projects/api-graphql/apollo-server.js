import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

const typeDefs = gql`
  type Client {
    id: Int
    name: String
    phone: String
  }

  type Query {
    clients: [Client]
    client(id: Int): Client
  }

  type Mutation {
    addClient(name: String, phone: String): Client
  }
`;

const clients = [];
let counterId = 0;

const resolvers = {
  Query: {
    clients: () => clients,
    client: async ({ id }) => {
      const currentUser = await clients.find(
        ({ id: currentId }) => id === currentId
      );
      return currentUser;
    },
  },

  Mutation: {
    addClient: async (_, data) => {
      const { name, phone } = data;
      counterId += 1;
      const newClient = { id: counterId, name, phone };
      clients.push(newClient);
      return newClient;
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  /**
   * What's up with this embed: true option?
   * These are our recommended settings for using AS;
   * they aren't the defaults in AS3 for backwards-compatibility reasons but
   * will be the defaults in AS4. For production environments, use
   * ApolloServerPluginLandingPageProductionDefault instead.
   **/
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

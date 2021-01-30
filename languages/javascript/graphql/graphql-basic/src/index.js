import { GraphQLServer } from "graphql-yoga";

//Five scalar value for graphql. string, Resolver, int, float, ID
// Types definition
const typeDefs = `
   type Query {
    me: User!
   }

   type User {
     id: ID!
     name: String!
     email: String!
     age: Int
   }
`;

// applicaiton schema
// Resolver
const resolvers = {
  Query: {
    me() {
      return {
        id: "instinst",
        name: "Edwin",
        email: "edwin@test.com",
        age: 56,
      };
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("The server is up!");
});

import { GraphQLServer } from "graphql-yoga";
import db from "./db";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import User from "./resolvers/User";
import Post from "./resolvers/Post";
import Comment from "./resolvers/Comment";

//Five scalar value for graphql. string, Resolver, int, float, ID
// Types definition
const server = new GraphQLServer({
  typeDefs: `src/schema.graphql`,
  resolvers: {
    Query,
    Mutation,
    User,
    Post,
    Comment,
  },
  context: {
    db,
  },
});

server.start(({ port }) => {
  console.log(`The server in up at ${port}`);
});

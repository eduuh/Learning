### THE GRAPHQL Bootcamp

Writing Code is Key. Monkey see Monkey Do.

#### Client - server Architecture.

GRAPHQL ql > we will Use Graph Query Language for any Language. Any database.
GraphQl is super flexicble.

## Advantages

1. fast.
2. Flexible.
3. Simple to use and simple to maitain.

### Using Graphql Apis

Graphql exposes only a single url(route).
beut instead we use a grapql Query to request the data we want. The graphql query lets the client
determine what data it needs. Unlike a rest api which determine what data you want instead.

This inversion of contol makes it flexible and fast since we can avoid some rest api problem of
overfetching or underfetching(requres multiple requests).

#### Mobile

1. Small screen real estate.
2. Slower hardware.
3. Slow down the application since we are overfetching data form the api.

Desktop and Mobile appliation both have different needs.

## Summary

Grapql creates fast and flexible Apis, giving clients complet control to ask for just the data they
need. Fewer HTTP requests, flexidle data querying, and small code base to maintain.

### Requirement

1. NodeJs
2. Visual Studio Code.
   - Babel ES
   - Docker
   - Duplicate Files
   - npm and intellisence

### Grapql Basic: Schema and Query

### What is a graph

The way to think about data and there relationships.
Query object is not a javascript object

Grapql Api are self documenting throung introspection.

The query is how we ask for data form a graphql Api.

```graphql
query {
  hello
  courseInstructor
  course
}
```

The above query returns simple strings.

#### Lets query back data types

```graphql
query {
  hello
  courseInstructor
  course
  me {
    name
    email
  }
}
```

#### Query on Collection

```graphql
query {
  users {
    name
    email
  }
}
```

### Setting up Graphql and NodeJs

Using graphql playground is tempolary step for testing our setup.
Graphql is a specification. It is not an implementations.
There my be multiple clients for graphql or servers available that implements
the specification.

```json
npm i grapql-yoga
```

```js
const typeDefs = `
   type Query {
     hello: String!
     name: String!
     location: String!
     time: String!
     bio: String!
   }
`;

// applicaiton schema
// Resolver
const resolvers = {
  Query: {
    hello() {
      return "this is  my first query";
    },
    name() {
      return "Edwin Muraya";
    },
    location() {
      return "Nyeri Kenya";
    },
    time() {
      return Date.now();
    },
    bio: () => {
      return "Edwin is A student Learning graphql";
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
```

```bash
import { GraphQLServer } from "graphql-yoga";

//Five scalar value for graphql. string, Resolver, int, float, ID
// Types definition
const typeDefs = `
   type Query {
    id: ID!
    name: String!
    age: Int!
    employees: Boolean!
    gpa: Float
    title: String!
    rating: Int!
    inStock: Boolean!
   }
`;

// applicaiton schema
// Resolver
const resolvers = {
  Query: {
    id() {
      return "abc5454";
    },
    name() {
      return "Edwin Muraya";
    },
    age() {
      return 56;
    },
    employees() {
      return true;
    },
    gpa() {
      return null;
    },
    title: () => {
      return "Dell Laptop";
    },
    rating: () => {
      return 8;
    },
    inStock: () => {
      return true;
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
```

#### Live reload for our application.

Installing nodemon and making changes to the start script.

#### Working with Custom Types.

Our application usually have custome types. A set of fields. Example of creating custom types for a
blogiing application you could have **\*users** , **comments\*** , **posts.\***

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

#### Working with Arrays

```graphql
type Query {
  grades: [Int]!
}


// The resolvers
grades(parent, args, ctx,info) {
  return [5, 55, 58, 55];
},
```

The code that show how to get in some values from client to the server.

```graphql
import { GraphQLServer } from "graphql-yoga";

//Five scalar value for graphql. string, Resolver, int, float, ID
// Types definition
const typeDefs = `
   type Query {
    me: User!
    post: Post!
    grades: [Int]!
    greeting(name: String, position: String): String!
    sum(numbers: [Float]!): Float!
   }

   type User {
     id: ID!
     name: String!
     email: String!
     age: Int
   }

   type Post {
     id: ID!
     title: String!
     body: String!
     published: Boolean!
   }
`;

// applicaiton schema
// Resolver
const resolvers = {
  Query: {
    sum(parent, args, ctx, info) {
      if (args.numbers.length === 0) {
        return 0;
      }

      return args.numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
    },
    greeting(parent, args, ctx, info) {
      if (args.name) {
        return `hello ${args.name}`;
      } else {
        return `Hello`;
      }
    },
    grades(parent, args, ctx, info) {
      return [5, 55, 58, 55];
    },
    me() {
      return {
        id: "instinst",
        name: "Edwin",
        email: "edwin@test.com",
        age: 56,
      };
    },
    post: () => {
      return {
        id: "isntian",
        title: "The Awakening of Evil",
        body: "Evil is not a good thing",
        published: true,
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
```

returning a arrow of custom types.

```graphql
import { GraphQLServer } from "graphql-yoga";

//Five scalar value for graphql. string, Resolver, int, float, ID
// Types definition

const users = [
  {
    id: "8",
    name: "Kdotn",
    email: "kdotn@test.com",
  },

  {
    id: "5",
    name: "Eduuh",
    email: "eduuh@test.com",
  },

  {
    id: "5",
    name: "Kamau",
    email: "kamau@test.com",
  },

  {
    id: "6",
    name: "Musaya",
    email: "musaya@test.com",
  },
];

const posts = [
  {
    id: "isn4",
    title: "The Next leve code of Evil",
    body: "Evil is not a good code, its honourable in KENYA",
    published: true,
  },
  {
    id: "isn56",
    title: "The Depend Hansle",
    body: "Evil is not a good thing, its Hansle",
    published: true,
  },
  {
    id: "isn6",
    title: "The Awakening of Evil",
    body: "Evil is not a good thing",
    published: true,
  },
  {
    id: "isn54n",
    title: "The last Man on Earth",
    body: "Amazing things on earth",
    published: true,
  },
];

const typeDefs = `
   type Query {
    me: User!
    post: Post!
    users(query: String): [User]!
    posts(query: String): [Post]!
   }

   type User {
     id: ID!
     name: String!
     email: String!
     age: Int
   }

   type Post {
     id: ID!
     title: String!
     body: String!
     published: Boolean!
   }
`;

// applicaiton schema
// Resolver
const resolvers = {
  Query: {
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }

      return posts.filter((p, i) => {
        const isTitleMatch = p.title.toLowerCase().includes(args.query.toLowerCase())
        const isBodyMatch = p.body.toLowerCase().includes(args.query.toLowerCase())
        return isTitleMatch || isBodyMatch;
      });
    },
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }

      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    me() {
      return {
        id: "instinst",
        name: "Edwin",
        email: "edwin@test.com",
        age: 56,
      };
    },
    post: () => {
      return {
        id: "isntian",
        title: "The Awakening of Evil",
        body: "Evil is not a good thing",
        published: true,
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
```

#### Relational Data

This allow use to setup relationship to our custom type.
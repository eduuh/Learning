### THE GRAPHQL Bootcamp

Writing Code is Key. Monkey see Monkey Do.

#### Client - server Architecture

GRAPHQL ql > we will Use Graph Query Language for any Language. Any database.
GraphQl is super flexicble.

## Advantages

1. Fast.
2. Flexible.
3. Simple to use and simple to maitain.

### Using Graphql Apis

Graphql exposes only a single url(route). Instead we use a grapql Query to request the data we want.
The graphql query lets the client determine what data it needs.
Unlike a rest api which determine what data you want instead.

This inversion of contol makes it flexible and fast since we can avoid some rest api problem of
overfetching or underfetching(requres multiple requests).

#### Mobile

1. Small screen real estate.
2. Slower hardware.
3. Slow down the application since we are overfetching data form the api.

Desktop and Mobile appliation both have different needs.

## Summary

Grapql creates fast and flexible Apis, giving clients complete control to ask for just the data they
need. Fewer HTTP requests, flexible data querying, and small code base to maintain.

### Requirement

1. NodeJs
2. Visual Studio Code.
   - Babel ES
   - Docker
   - Duplicate Files: TODO duplicate files in vim
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

```graphql
import { GraphQLServer } from "graphql-yoga";

//Five scalar value for graphql. string, Resolver, int, float, ID
// Types definition

const comments = [
  {
    id: "5",
    text: "The first comment",
    author: "8",
    posts: "isn54n",
  },
  {
    id: "6",
    text: "The Second comment",
    author: "4",
    posts: "isn6",
  },
  {
    id: "7",
    text: "The Third comment",
    author: "5",
    post: "isn54n",
  },
];

const users = [
  {
    id: "8",
    name: "Kdotn",
    email: "kdotn@test.com",
    posts: "isn54n",
  },
  {
    id: "4",
    name: "Eduuh",
    email: "eduuh@test.com",
    posts: "isn6",
  },
  {
    id: "5",
    name: "Kamau",
    email: "kamau@test.com",
    post: "isn56",
  },
  {
    id: "6",
    name: "Musaya",
    email: "musaya@test.com",
    post: "isn4",
  },
];

const posts = [
  {
    id: "isn4",
    title: "The Next leve code of Evil",
    body: "Evil is not a good code, its honourable in KENYA",
    published: true,
    author: "6",
  },
  {
    id: "isn56",
    title: "The Depend Hansle",
    body: "Evil is not a good thing, its Hansle",
    published: true,
    author: "5",
  },
  {
    id: "isn6",
    title: "The Awakening of Evil",
    body: "Evil is not a good thing",
    published: true,
    author: "4",
  },
  {
    id: "isn54n",
    title: "The last Man on Earth",
    body: "Amazing things on earth",
    published: true,
    author: "8",
  },
];

const typeDefs = `
   type Query {
    me: User!
    post: Post!
    users(query: String): [User]!
    posts(query: String): [Post]!
    comments(query: String): [Comment!]
   }

   type Comment {
    id: ID!,
    text: String!
    author: User!
    post: Post
   }

   type User {
     id: ID!
     name: String!
     email: String!
     age: Int
     post: [Post!]
     comments: [Comment!]!
   }

   type Post {
     id: ID!
     title: String!
     body: String!
     published: Boolean!
     author: User!
     comments: [Comment]!
   }
`;

// applicaiton schema
// Resolver
const resolvers = {
  Query: {
    comments(parent, args, ctx, info) {
      if (!args.query) {
        return comments;
      }
      return comments.filter((comment) => {
        return comment.text.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }
      return posts.filter((p, i) => {
        const isTitleMatch = p.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = p.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
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
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id == parent.author;
      });
    },

    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.post == parent.id;
      });
    },
  },

  User: {
    post(parent, args, ctx, info) {
      return posts.filter((post) => {
        return post.id == parent.post;
      });
    },

    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.author == parent.id;
      });
    },
  },
  Comment: {
    post(parent, args, ctx, info) {
      return posts.find((post) => {
        return post.id == parent.post;
      });
    },

    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id == parent.author;
      });
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

### Mutation

Mutation is a way to change, data in the database. They are exactly the same as querys.

```bash
import { GraphQLServer } from "graphql-yoga";
import uuidV4 from "uuid/v4";

//Five scalar value for graphql. string, Resolver, int, float, ID
// Types definition

const comments = [
  {
    id: "5",
    text: "The first comment",
    author: "8",
    posts: "isn54n",
  },
  {
    id: "6",
    text: "The Second comment",
    author: "4",
    posts: "isn6",
  },
  {
    id: "7",
    text: "The Third comment",
    author: "5",
    post: "isn54n",
  },
];

const users = [
  {
    id: "8",
    name: "Kdotn",
    email: "kdotn@test.com",
    posts: "isn54n",
  },
  {
    id: "4",
    name: "Eduuh",
    email: "eduuh@test.com",
    posts: "isn6",
  },
  {
    id: "5",
    name: "Kamau",
    email: "kamau@test.com",
    post: "isn56",
  },
  {
    id: "6",
    name: "Musaya",
    email: "musaya@test.com",
    post: "isn4",
  },
];

const posts = [
  {
    id: "isn4",
    title: "The Next leve code of Evil",
    body: "Evil is not a good code, its honourable in KENYA",
    published: true,
    author: "6",
  },
  {
    id: "isn56",
    title: "The Depend Hansle",
    body: "Evil is not a good thing, its Hansle",
    published: true,
    author: "5",
  },
  {
    id: "isn6",
    title: "The Awakening of Evil",
    body: "Evil is not a good thing",
    published: true,
    author: "4",
  },
  {
    id: "isn54n",
    title: "The last Man on Earth",
    body: "Amazing things on earth",
    published: true,
    author: "8",
  },
];

const typeDefs = `
   type Query {
    me: User!
    post: Post!
    users(query: String): [User]!
    posts(query: String): [Post]!
    comments(query: String): [Comment!]
   }

   type Mutation {
    createUser(name: String, email: String, age: Int): User!
    createPost(title: String!, body: String! published: Boolean!, author: ID!): Post!
    createComment(text: String!, author: ID!, post: ID!): Comment!
   }

   type Comment {
    id: ID!,
    text: String!
    author: User!
    post: Post
   }

   type User {
     id: ID!
     name: String!
     email: String!
     age: Int
     post: [Post!]
     comments: [Comment!]!
   }

   type Post {
     id: ID!
     title: String!
     body: String!
     published: Boolean!
     author: User!
     comments: [Comment]!
   }
`;

// applicaiton schema
// Resolver
const resolvers = {
  Query: {
    comments(parent, args, ctx, info) {
      if (!args.query) {
        return comments;
      }
      return comments.filter((comment) => {
        return comment.text.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }
      return posts.filter((p, i) => {
        const isTitleMatch = p.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = p.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
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
  Mutation: {
    createComment(parent, args, ctx, info) {
      const userExist = users.some((user) => user.id == args.author);
      const postExist = posts.some((post) => {
        return post.id == args.post && post.published === true;
      });

      if (!userExist || !postExist) {
        throw new Error("Unable to find user and post");
      }

      const comment = {
        id: uuidV4(),
        text: args.text,
        author: args.author,
        post: args.post,
      };

      comments.push(comment);
      return comment;
    },
    createPost(parent, args, ctx, infor) {
      const userExist = users.some((user) => user.id === args.author);
      const titleToken = posts.some((post) => post.title == args.title);

      if (!userExist) {
        throw new Error("User not found");
      }

      if (titleToken) {
        throw new Error("Title Taken");
      }

      const post = {
        id: uuidV4(),
        title: args.title,
        body: args.body,
        published: args.published,
      };

      posts.push(post);
      return post;
    },
    createUser(parent, args, ctx, infor) {
      const emailToken = users.some((user) => user.email == args.email);

      if (emailToken) {
        throw new Error("Email taken");
      }

      const user = {
        id: uuidV4(),
        name: args.name,
        email: args.email,
        age: args.age,
      };

      users.push(user);

      return user;
    },
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id == parent.author;
      });
    },

    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.post == parent.id;
      });
    },
  },

  User: {
    post(parent, args, ctx, info) {
      return posts.filter((post) => {
        return post.id == parent.post;
      });
    },

    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.author == parent.id;
      });
    },
  },
  Comment: {
    post(parent, args, ctx, info) {
      return posts.find((post) => {
        return post.id == parent.post;
      });
    },

    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id == parent.author;
      });
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

console.log(server);

server.start((enst) => {
  const { port } = enst;
  console.log(`The server in up at ${port}`);
});
```

### configuring babel to compile rest spread

Lets install **babel-plugin-transform-object-rest-spread**

add the plugin to the **.babelrc**.

### refactoring the code to allow input types.

### A better organization of code.

The graphql server object has some, **context** object that is used to pass in, commond object to all
of the resolvers. This is the bestplace to pass the database context.

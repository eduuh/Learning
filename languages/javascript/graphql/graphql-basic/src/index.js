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

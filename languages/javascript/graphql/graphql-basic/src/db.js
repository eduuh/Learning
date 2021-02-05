const comments = [
  {
    id: "1",
    text: "The first comment",
    author: "1",
    post: "1",
  },
  {
    id: "2",
    text: "The Second comment",
    author: "2",
    post: "2",
  },
  {
    id: "3",
    text: "The Third comment",
    author: "3",
    post: "3",
  },
];
const users = [
  {
    id: "1",
    name: "Jackson Maina",
    email: "jackson@test.com",
  },
  {
    id: "2",
    name: "Eduuh",
    email: "eduuh@test.com",
  },
  {
    id: "3",
    name: "Kamau",
    email: "kamau@test.com",
  },
];

const posts = [
  {
    id: "1",
    title: "The Next leve code of Evil",
    body: "Evil is not a good code, its honourable in KENYA",
    published: true,
    author: "1",
  },
  {
    id: "2",
    title: "The Depend Hansle",
    body: "Evil is not a good thing, its Hansle",
    published: true,
    author: "2",
  },
  {
    id: "3",
    title: "The Awakening of Evil",
    body: "Evil is not a good thing",
    published: true,
    author: "3",
  },
  {
    id: "4",
    title: "The last Man on Earth",
    body: "Amazing things on earth",
    published: true,
    author: "3",
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };

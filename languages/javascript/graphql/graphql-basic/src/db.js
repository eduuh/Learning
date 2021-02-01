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

const db = {
  users,
  posts,
  comments,
};

export { db as default };

const Query = {
  comments(parent, args, { db }, info) {
    if (!args.query) {
      return db.comments;
    }
    return db.comments.filter((comment) => {
      return db.comment.text.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter((p, i) => {
      const isTitleMatch = p.title
        .toLowerCase()
        .includes(args.query.toLowerCase());
      const isBodyMatch = p.body
        .toLowerCase()
        .includes(args.query.toLowerCase());
      return isTitleMatch || isBodyMatch;
    });
  },
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter((user) => {
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
};

export { Query as default };

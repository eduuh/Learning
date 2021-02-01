const User = {
  post(parent, args, { db }, info) {
    return db.posts.filter((post) => {
      return post.id == parent.post;
    });
  },

  comments(parent, args, { db }, info) {
    return db.comments.filter((comment) => {
      return comment.author == parent.id;
    });
  },
};

export { User as default };

import uuidV4 from "uuid/v4";

const Mutation = {
  createComment(parent, args, { db }, info) {
    const userExist = db.users.some((user) => user.id == args.data.author);
    const postExist = db.posts.some(
      (post) => post.id == args.data.post && post.published == true
    );

    if (!userExist || !postExist) {
      throw new Error("Unable to find user and post");
    }

    const comment = {
      id: uuidV4(),
      ...args.data,
    };

    db.comments.push(comment);
    return db.comment;
  },

  deleteComment(parent, args, { db }, info) {
    const commentId = db.comments.findIndex(
      (comment) => comment.id === args.id
    );
    if (commentId === -1) {
      throw new Error("Comment does not exist");
    }
    const deletcomment = db.comments.splice(commentId, 1);
    return deletcomment[0];
  },
  createPost(parent, args, { db }, infor) {
    const userExist = db.users.some((user) => user.id === args.data.author);
    const titleToken = db.posts.some((post) => post.title == args.data.title);

    if (!userExist) {
      throw new Error("User not found");
    }

    if (titleToken) {
      throw new Error("Title Taken");
    }

    const post = {
      id: uuidV4(),
      ...args.data,
    };

    db.posts.push(post);
    return post;
  },

  deletePost(parent, args, { db }, info) {
    const postindex = db.posts.findIndex((post) => post.id == args.id);
    if (postindex === -1) {
      throw new Error("Post doe not exist");
    }
    const deletepost = db.posts.splice(postindex, 1);
    comments = comments.filter((comment) => comment.post !== args.id);
    return deletepost[0];
  },

  createUser(parent, args, { db }, infor) {
    const emailToken = db.users.some((user) => user.email == args.email);

    if (emailToken) {
      throw new Error("Email taken");
    }

    const user = {
      id: uuidV4(),
      ...args,
    };

    db.users.push(user);

    return user;
  },

  deleteUser(parent, args, { db }, info) {
    const userIndex = db.users.findIndex((user) => user.id === args.i);
    if (userIndex == -1) {
      throw new Error("User not found");
    }

    const deleteUser = db.users.splice(userIndex, 1);
    posts = db.posts.filter((post) => {
      const match = post.author === args.id;

      if (match) {
        comments = comments.filter((comment) => {
          return comment.post !== post.id;
        });
      }
      return !match;
    });

    db.comments = db.comments.filter((comment) => comment.author !== post.id);

    return deleteUser[0];
  },
  updateUser(parent, args, { db }, info) {
    const user = db.users.find((user) => user.id === args.id);
    if (!user) {
      throw new Error("User does not exist");
    }

    if (typeof args.data.email === "String") {
      const emailTaken = db.users.some((user) => user.email === data.email);

      if (emailTaken) {
        throw new Error("Email taken");
      }

      user.email = args.data.email;
    }

    if (typeof args.data.name === "staring") {
      user.name = args.data.name;
    }

    if (typeof args.data.age !== "undefined") {
      user.age = args.data.name;
    }

    return user;
  },
};

export { Mutation as default };

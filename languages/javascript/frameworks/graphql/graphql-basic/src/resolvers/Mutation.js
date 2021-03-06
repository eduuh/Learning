import uuidV4 from "uuid/v4";

const Mutation = {
  createComment(parent, args, { db, pubSub }, info) {
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
    pubSub.publish(`comment ${args.data.post}`, {
      comment: {
        mutation: "CREATED",
        data: comment,
      },
    });

    return comment;
  },

  deleteComment(parent, args, { db, pubSub }, info) {
    const commentId = db.comments.findIndex(
      (comment) => comment.id === args.id
    );
    if (commentId === -1) {
      throw new Error("Comment does not exist");
    }
    const [deletcomment] = db.comments.splice(commentId, 1);

    pubSub.publish("comment", {
      comment: {
        mutation: "DELETED",
        data: deletcomment,
      },
    });
    return deletcomment;
  },
  createPost(parent, args, { pubSub, db }, infor) {
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
    if (args.data.published) {
      pubSub.publish("post", {
        post: {
          mutation: "CREATED",
          data: post,
        },
      });
    }
    return post;
  },

  deletePost(parent, args, { db, pubSub }, info) {
    const postindex = db.posts.findIndex((post) => post.id == args.id);
    if (postindex === -1) {
      throw new Error("Post doe not exist");
    }
    const [post] = db.posts.splice(postindex, 1);
    db.comments = db.comments.filter((comment) => comment.post !== args.id);

    if (post.published) {
      pubSub.publish("post", {
        post: {
          mutation: "DELETED",
          data: post,
        },
      });
    }

    return post;
  },

  createUser(parent, args, { db, pubSub }, infor) {
    const emailToken = db.users.some((user) => user.email == args.email);

    if (emailToken) {
      throw new Error("Email taken");
    }

    const user = {
      id: uuidV4(),
      ...args,
    };

    db.users.push(user);

    pubSub.publish("user", {
      user: {
        Mutation: "CREATED",
        data: user,
      },
    });

    return user;
  },

  deleteUser(parent, args, { db, pubSub }, info) {
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
    pubSub.publish("user", {
      user: {
        Mutation: "DELETED",
        data: deleteUser[0],
      },
    });

    return deleteUser[0];
  },
  updatePost(parent, args, { db, pubSub }, infor) {
    let post = db.posts.find((post) => post.id == args.id);
    const originalPost = { ...post };
    if (!post) {
      throw new Error("Post does not exist");
    }
    if (typeof args.data.title === "string") {
      const titltaken = db.posts.some((user) => user.title == args.data.title);

      if (titltaken) {
        throw new Error("Title Taken");
      }
      post.title = args.data.title;
    }

    if (args.data.body === "string") {
      post.body = args.data.body;
    }

    if (typeof args.data.published === "boolean") {
      post.published = args.data.published;

      if (originalPost.published && !post.published) {
        //deleted,
        pubSub.publish("post", {
          post: {
            mutation: "DELETED",
            data: originalPost,
          },
        });
      } else if (!originalPost.published && post.published) {
        // created

        pubSub.publish("post", {
          post: {
            mutation: "CREATED",
            data: post,
          },
        });
      }
    } else if (post.published) {
      //updated
      pubSub.publish("post", {
        post: {
          mutation: "UPDATED",
          data: originalPost,
        },
      });
    }

    return post;
  },
  updateComment(parent, args, { db }, info) {
    let comment = db.comment.find((co) => co.id === args.id);

    comment = args.data.text;

    return comment;
  },
  updateUser(parent, args, { db, pubSub }, info) {
    let user = db.users.find((user) => user.id === args.id);
    if (!user) {
      throw new Error("User does not exist");
    }

    console.log("user:", user);
    console.log("args.data ");

    if (typeof args.data.email == "string") {
      const emailTaken = db.users.some(
        (user) => user.email === args.data.email
      );

      if (emailTaken) {
        throw new Error("Email taken");
      }

      user.email = args.data.email;
    }

    if (typeof args.data.name === "string") {
      user.name = args.data.name;
    }

    if (typeof args.data.age !== "undefined") {
      user.age = args.data.name;
    }

    pubSub.publish("user", {
      user: {
        mutation: "UPDATED",
        data: user,
      },
    });

    return user;
  },
};

export { Mutation as default };

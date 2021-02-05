const Subscription = {
  count: {
    subscribe(parent, args, { pubSub }, info) {
      let count = 0;
      setInterval(() => {
        count++;
        pubSub.publish("count", {
          count,
        });
      }, 1000);

      return pubSub.asyncIterator("count");
    },
  },

  comment: {
    subscribe(parent, { postId }, { db, pubSub }, info) {
      const post = db.posts.find(
        (post) => post.id === postId && post.published
      );

      console.log("post: ", post);

      if (!post) {
        throw new Error("Post not found");
      }
      return pubSub.asyncIterator(`comment ${postId}`);
    },
  },

  post: {
    subscribe(parent, args, { pubSub }, info) {
      return pubSub.asyncIterator(`post`);
    },
  },
};

export { Subscription as default };

// Create a subscrition of post.
// response is the post object.
// channel name post.
// Modify the mutation where the post are created.
// If published value is set to false.
// Test your work in the grapql playground.

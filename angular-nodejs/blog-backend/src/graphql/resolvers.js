const User = require("../models/User");
const Post = require("../models/Post");

const resolvers = {
  Query: {
    getAllPosts: async () => await Post.find().populate("author"),
    getPost: async (_, { id }) => await Post.findById(id).populate("author"),
    getUser: async (_, { id }) => await User.findById(id).populate("posts"),
  },

  Mutation: {
    createUser: async (_, { name, email }) => {
      const user = new User({ name, email });
      return await user.save();
    },

    createPost: async (_, { input }) => {
      const post = new Post(input);
      await post.save();
      return post.populate("author");
    },
  },
};

module.exports = resolvers;
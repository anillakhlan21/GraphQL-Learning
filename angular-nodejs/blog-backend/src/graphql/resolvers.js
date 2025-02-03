const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Post = require("../models/Post");

const resolvers = {
  Query: {
    users: async () => await User.find(),
    posts: async () => await Post.find().populate("author"),
  },

  Mutation: {
    register: async (_, { name, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      return await User.create({ name, email, password: hashedPassword });
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error("Invalid credentials");
      }
      return jwt.sign({ ...user.toObject() }, process.env.JWT_SECRET, { expiresIn: "1h" });
    },
    createPost: async (_, { title, content }, { user }) => {
      if (!user) throw new Error("Authentication required");
      const post = Post({ title, content, authorId: user._id });
      await post.save();
      return await Post.findById(post._id).populate('author');
    },
  },
};
module.exports = resolvers;
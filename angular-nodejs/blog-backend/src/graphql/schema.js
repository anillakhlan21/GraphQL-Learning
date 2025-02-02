const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]
  }

  type Query {
    getAllPosts: [Post!]
    getPost(id: ID!): Post
    getUser(id: ID!): User
  }

  input PostInput {
    title: String!
    content: String!
    authorId: ID!
  }

  type Mutation {
    createPost(input: PostInput!): Post
    createUser(name: String!, email: String!): User
  }
`;

module.exports = typeDefs;
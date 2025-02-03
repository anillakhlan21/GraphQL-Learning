const { gql } = require("apollo-server-express");
const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }
    type Post {
        id: ID!
        title: String!
        content: String!
        authorId: ID!
        author: User
    }
    type Query {
        users: [User]
        posts: [Post]
    }
    type Mutation {
        register(name: String!, email: String!, password: String!): User
        login(email: String!, password: String!): String
        createPost(title: String!, content: String!): Post
    }
`;
module.exports = typeDefs;
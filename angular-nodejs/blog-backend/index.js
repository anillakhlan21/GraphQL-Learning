const express = require('express');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require("./src/graphql/schema");
const resolvers = require("./src/graphql/resolvers");

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('connected to mongodb'))
  .catch((err) => console.log('Not able to connect to mongodb', err));

const jwt = require('jsonwebtoken');

const context = ({ req }) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.split(' ')[1]; // Extract token from "Bearer <token>"

  if (token) {
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET); // Decode user
      return { user }; // Attach user to context
    } catch (err) {
      console.log('Invalid Token');
    }
  }
  return {}; // No user attached if token is missing/invalid
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  // Start Express Server
  app.listen(4000, () => {
    console.log(`🚀 Server running at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();

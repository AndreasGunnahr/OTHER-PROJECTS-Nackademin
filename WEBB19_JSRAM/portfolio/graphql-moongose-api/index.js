require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const db = require("./middlewares/database");

const schema = require("./schemas");

const server = new ApolloServer({ schema });

const app = express();

server.applyMiddleware({ app });

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server ready at port ${process.env.PORT}`)
);

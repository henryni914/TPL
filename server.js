const express = require('express');
const cors = require('cors');
const routes = require("./routes");
const { ApolloServer, gql } = require('apollo-server-express');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};
// here for testing purposes, but import later
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
// here for testing purposes, but import later
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.use(routes);

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
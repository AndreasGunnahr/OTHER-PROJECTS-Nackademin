const { gql } = require("apollo-server-express");

module.exports = gql`
  type Skills {
    code: String
  }

  type User {
    username: String
    name: String
    skills: Skills
  }

  type Query {
    users: [User]
  }
`;

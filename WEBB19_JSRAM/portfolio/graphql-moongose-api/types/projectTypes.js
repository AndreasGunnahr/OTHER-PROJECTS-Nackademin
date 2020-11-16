const { gql } = require("apollo-server-express");

module.exports = gql`
  type Technologies {
    name: String
    link: String
  }

  input TechnologiesInput {
    name: String
    link: String
  }

  type Project {
    title: String
    description: String
    image: String
    githubLink: String
    technologies: [Technologies]
  }

  input ProjectInput {
    title: String
    description: String
    image: String
    githubLink: String
    technologies: [TechnologiesInput]
  }

  type Query {
    projects: [Project]
    projectById(id: String): Project
  }

  type Mutation {
    createProject(input: ProjectInput): Project
  }
`;

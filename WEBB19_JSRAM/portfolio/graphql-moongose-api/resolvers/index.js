const { mergeResolvers } = require("@graphql-tools/merge");

// Import of Resolvers
const UserResolver = require("./userResolver");
const ProjectResolver = require("./projectResolver");

const resolversArray = [UserResolver, ProjectResolver];

module.exports = mergeResolvers(resolversArray);

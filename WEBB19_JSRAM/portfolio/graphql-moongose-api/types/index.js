const { mergeTypeDefs } = require("@graphql-tools/merge");

// Import of types
const UserTypes = require("./userTypes");
const ProjectTypes = require("./projectTypes");

const typesArray = [UserTypes, ProjectTypes];

module.exports = mergeTypeDefs(typesArray, { all: true });

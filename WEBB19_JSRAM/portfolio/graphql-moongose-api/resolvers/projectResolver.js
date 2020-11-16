const Project = require("../models/Project");

const createProject = async (body) => {
  const project = await Project.create(body);
  console.log("här");
  return project;
};

const getProjects = async () => {
  const projects = await Project.find();
  console.log(projects);
  return projects;
};

const getProjectById = async (id) => {
  const project = await Project.findById(id);
  console.log(project);
  return project;
};

module.exports = {
  Query: {
    projects: async () => getProjects(),
    projectById: async (_, { id }) => getProjectById(id),
  },

  Mutation: {
    createProject: async (_, { input }) => createProject(input),
  },
};

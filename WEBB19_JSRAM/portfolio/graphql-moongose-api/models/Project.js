var mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    githubLink: String,
    technologies: [
      {
        name: String,
        link: String,
        symbol: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);

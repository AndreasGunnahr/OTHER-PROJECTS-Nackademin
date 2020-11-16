var mongoose = require("mongoose");

var MeSchema = new mongoose.Schema(
  {
    name: String,
    about: String,
    contact: [
      {
        name: String,
        text: String,
      },
    ],
    picture: String,
    cv: String,
    cvText: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Me", MeSchema);

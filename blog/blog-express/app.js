const express = require("express");
const cors = require("cors");

const app = express();

bodyParser = require("body-parser");

// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// IMPORT ALL ROUTES
const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment");

app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

app.listen(4000, () => {
  console.log("Listen on port 4000");
});

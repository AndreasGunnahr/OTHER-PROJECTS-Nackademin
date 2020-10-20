var Datastore = require("nedb-promise");
require("dotenv").config();

db = {};
switch (process.env.ENVIRONMENT) {
  case "development":
    db.posts = new Datastore({
      filename: __dirname + "/development/posts.db",
      autoload: true,
    });
    db.comments = new Datastore({
      filename: __dirname + "/development/comments.db",
      autoload: true,
    });
    db.users = new Datastore({
      filename: __dirname + "/development/users.db",
      autoload: true,
    });
    break;
  case "test":
    db.posts = new Datastore({
      filename: __dirname + "/test/posts.db",
      autoload: true,
    });
    db.comments = new Datastore({
      filename: __dirname + "/test/comments.db",
      autoload: true,
    });
    db.users = new Datastore({
      filename: __dirname + "/test/users.db",
      autoload: true,
    });
    break;
}

module.exports = db;

var Datastore = require("nedb-promise");

db = {};
db.posts = new Datastore({ filename: __dirname + "/posts.db" });
db.comments = new Datastore({ filename: __dirname + "/comments.db" });

// You need to load each database (here we do it asynchronously)
db.posts.loadDatabase();
db.comments.loadDatabase();

module.exports = db;

var Datastore = require("nedb-promise");

db = {};
db.posts = new Datastore({ filename: __dirname + "/posts.db" });
db.comments = new Datastore({ filename: __dirname + "/comments.db" });
db.users = new Datastore({ filename: __dirname + "/users.db" });

db.posts.loadDatabase();
db.comments.loadDatabase();
db.users.loadDatabase();

module.exports = db;

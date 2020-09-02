const chai = require("chai");
chai.should();
const Comment = require("../models/comment");

describe("Posts", () => {
  beforeEach(async () => {
    await Comment.clear();
  });

  it("Should create a new comment", async () => {
    const returnedKeys = ["_id", "message", "userId", "timestamp", "postId"];
    const comment = await Comment.createComment(
      "aidseRcuS3OhMI8J",
      "Slave",
      "soJxQEPBfoZHoQmV"
    );
    comment.should.be.a("object");
    comment.should.have.keys(returnedKeys);
  });

  it("Should count how many comments we have in our database", async () => {
    await await Comment.createComment(
      "aidseRcuS3OhMI8J",
      "Slave",
      "soJxQEPBfoZHoQmV"
    );
    await Comment.createComment("aidseRcuS3OhMI8J", "Bike", "soJxQEPBfoZHoQmV");
    await Comment.createComment("aidseRcuS3OhMI8J", "Food", "soJxQEPBfoZHoQmV");

    const numberOfComments = await Comment.countComments();
    numberOfComments.should.be.a("number");
    numberOfComments.should.equal(3);
  });
});

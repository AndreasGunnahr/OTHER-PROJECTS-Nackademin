const chai = require("chai");
chai.should();
const Post = require("../models/post");

describe("Posts", () => {
  beforeEach(async () => {
    await Post.clear();
  });

  it("Should count how many users we have in our database", async () => {
    await await Post.createPost(
      "aidseRcuS3OhMI8J",
      "Slave",
      "Patrik is my slave"
    );
    await Post.createPost("aidseRcuS3OhMI8J", "Bike", "Bikes is tha $hit");
    await Post.createPost("aidseRcuS3OhMI8J", "Food", "Soon lunch");

    const numberOfPosts = await Post.countPosts();
    numberOfPosts.should.be.a("number");
    numberOfPosts.should.equal(3);
  });
});

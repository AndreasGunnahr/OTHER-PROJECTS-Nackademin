const chai = require("chai");
chai.should();
const User = require("../models/user");

describe("Users", () => {
  beforeEach(async () => {
    await User.clear();
  });

  it("Should count how many users we have in our database", async () => {
    await User.createUser("andreas", "gunnahr", "admin");
    await User.createUser("Patrik", "johansson", "slave");
    await User.createUser("Kevin", "fridman", "user");

    const numberOfUsers = await User.countUsers();
    numberOfUsers.should.be.a("number");
    numberOfUsers.should.equal(3);
  });
});

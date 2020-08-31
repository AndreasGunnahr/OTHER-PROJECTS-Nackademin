const { expect } = require("chai");
const IndexModule = require("../index");

describe("Rövarspråk", () => {
  it("Should encrypt entered string - Encrypt", () => {
    const result = IndexModule.encrypt("hej");
    expect(result).to.be.equal("hohejoj");

    const result2 = IndexModule.encrypt("");
    expect(result2).to.be.equal("");

    const result3 = IndexModule.encrypt("Hej på dig din FILUR!!");
    expect(result3).to.be.equal("HOHejoj popå dodigog dodinon FOFILOLUROR!!");

    const result4 = IndexModule.encrypt("!%?#*()");
    expect(result4).to.be.equal("!%?#*()");

    const result5 = IndexModule.encrypt(1);
    expect(result5).to.be.equal(1);
  });

  it("Should decrypt entered string - Decrypt", () => {
    const result = IndexModule.decrypt("hohejoj");
    expect(result).to.be.equal("hej");

    const result2 = IndexModule.decrypt(
      "HOHejoj popå dodigog dodinon FOFILOLUROR!!"
    );
    expect(result2).to.be.equal("Hej på dig din FILUR!!");

    const result3 = IndexModule.decrypt(1);
    expect(result3).to.be.equal(1);
  });
});

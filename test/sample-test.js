const { expect } = require("chai");


describe("Dalek", function () {
  it("Should return x and update value of x", async function () {

    const x = 42;
    const Dalek = await ethers.getContractFactory("Dalek");
    const dalek = await Dalek.deploy(x);
    await dalek.deployed();

    let actual = await dalek.x()

    assert.equals(actual.toNumber(), 42);

    const y = 11;

    await dalek.changeX(y);
    actual = await dalek.x();
    assert.equals(y, actual);

  });
});

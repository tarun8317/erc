const { expect } = require("chai");

describe("HREToken", function () {
  let HREToken;
  let hreToken;
  let owner;
  let recipient;

  beforeEach(async function () {
    [owner, recipient] = await ethers.getSigners();

    HREToken = await ethers.getContractFactory("HREToken");
    hreToken = await HREToken.deploy();
    await hreToken.deployed();
  });

  it("should have the correct name and symbol", async function () {
    expect(await hreToken.name()).to.equal("HRE Token");
    expect(await hreToken.symbol()).to.equal("sad");
  });

  it("should mint initial tokens to the owner", async function () {
    const ownerBalance = await hreToken.balanceOf(owner.address);
    const totalSupply = await hreToken.totalSupply();

    expect(ownerBalance.toString()).to.equal(totalSupply.toString());
  });

  it("should allow the owner to mint more tokens", async function () {
    const amountToMint = ethers.utils.parseEther("1000");

    await hreToken.connect(owner).mint(recipient.address, amountToMint);
    const recipientBalance = await hreToken.balanceOf(recipient.address);

    expect(recipientBalance.toString()).to.equal(amountToMint.toString());
  });

  it("should allow the owner to burn tokens", async function () {
    const initialBalance = await hreToken.balanceOf(owner.address);
    const amountToBurn = ethers.utils.parseEther("500");

    await hreToken.connect(owner).burn(amountToBurn);
    const ownerBalance = await hreToken.balanceOf(owner.address);

    expect(ownerBalance.toString()).to.equal(initialBalance.sub(amountToBurn).toString());
  });
});

require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/be1e26a5d9134163b7507cb6dc0dcaf1",
      accounts:
        ["7ef69b2d31c1fceab54ce3652ee5215f64b0850b5bfd3631023a72a9f05474d3"],
    },
    // matic: {
    //   url: "https://polygon-mumbai.g.alchemy.com/v2/4zQ-GOllMHIp-eW_sarQkbGA5yB4vmwp",
    //   accounts:
    //     [""],
    // },
    // binance: {
    //   url: "https://data-seed-prebsc-1-s1.binance.org:8545",
    //   accounts:
    //     [""],
    // },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: {
      sepolia: "2WA3995HHBNABVA4T9Y2IUAEVTRFBGD5V9",
    }
  },
  // etherscan: {
  //   apiKey: {
  //    polygonMumbai:'2QGV4H1WNH1I382GESZ8ZJP6HBN23KW65C'
  //   }
  // },
  // etherscan: {
  //   apiKey: {
  //     bscTestnet: 'MKNB2U9EK9943UQGV3W3XD86RM6SBJAQWR'
  //   }
  // }
};

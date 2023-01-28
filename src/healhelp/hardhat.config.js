/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: ["fa3eb06b81f67d89a9ea3042b109560679cd73811c08045be1a20605a25897a1"],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}

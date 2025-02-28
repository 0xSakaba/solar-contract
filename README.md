# deploy

## sepolia

SolarModule#SolarNFT - 0xfb71CFed1740709BfF2aaCa12a53945169b6075A

test on opensea: https://testnets.opensea.io/assets/sepolia/0xfb71cfed1740709bff2aaca12a53945169b6075a/1

## soneium-minato

SolarModule#SolarNFT - 0x4AcC5411229Cf03b154A5604CD6F91c17B30B221

## soneium (mainnet)

SolarModule#SolarNFT - 0x9078575c9a2BEC4c8aCF81aB68eA7d4942A9c32B


# set up env

`yarn hardhat vars set ALCHEMY_API_KEY "YOUR_TOKEN_HERE"`
`yarn hardhat vars set ETHERSCAN_API_KEY "YOUR_TOKEN_HERE"`

`npx hardhat vars list`

deploy contract
```shell
npx hardhat ignition deploy ./ignition/modules/<contractName>.ts --network <network>
```

run scripts
```shell
npx hardhat run ./scripts/<scriptName>.ts --network <network>
```

contract verification
```shell
npx hardhat run ./verify/<name>.ts --network <network> <contractAddress>
```

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

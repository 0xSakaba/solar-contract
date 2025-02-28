import hre from "hardhat";
import { sepolia_verify_address } from "../const";

const arg1 =
  "ipfs://bafkreidqrufveexukrfewxlbe35aac7nsa7z6ndkvoaq5atbkglsegdcl4";
async function main() {
  await hre.run("verify:verify", {
    address: "0x9078575c9a2BEC4c8aCF81aB68eA7d4942A9c32B",
    constructorArguments: [arg1],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

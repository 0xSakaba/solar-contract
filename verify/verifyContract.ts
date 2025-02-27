import hre from "hardhat";
import { sepolia_verify_address } from "../const";

const arg1 =
  "ipfs://bafkreidqrufveexukrfewxlbe35aac7nsa7z6ndkvoaq5atbkglsegdcl4";
async function main() {
  await hre.run("verify:verify", {
    address: "0x4AcC5411229Cf03b154A5604CD6F91c17B30B221",
    constructorArguments: [arg1],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

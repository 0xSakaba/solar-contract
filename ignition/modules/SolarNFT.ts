// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const input_baseTokenURI =
  "ipfs://bafkreidqrufveexukrfewxlbe35aac7nsa7z6ndkvoaq5atbkglsegdcl4";

const SolarModule = buildModule("SolarModule", (m) => {
  const baseTokenURI = m.getParameter("baseTokenURI", input_baseTokenURI);

  const Solar = m.contract("SolarNFT", [baseTokenURI]);

  return { Solar };
});

export default SolarModule;

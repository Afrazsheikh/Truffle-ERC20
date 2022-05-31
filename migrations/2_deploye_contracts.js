const afz = artifacts.require("afz");

module.exports = function (deployer) {
  deployer.deploy(afz, 1000000);
};

const { Conflux } = require("js-conflux-sdk");
// require("dotenv").config();
const { abi, bytecode } = require("../../contract/build/contracts/NFTBase.json");
const format = require('js-conflux-sdk/src/util/format');

class NFT {
  constructor(address, privateKey) {
    this.cfx = new Conflux({
      url: 'https://test.confluxrpc.com',
      // logger: console,
      networkId:1
    });
    this.account = this.cfx.wallet.addPrivateKey(privateKey);
    console.log(this.account.address)
    this.contract = this.cfx.Contract({ address,abi });  
    
  }

  async mint(address, id) {
    return this.contract
      .safeMint(address, id)
      .sendTransaction({ from: this.account })
      .executed();
  }

  async getAssets(userAddr) {
    const number = await this.contract.balanceOf(userAddr);
    const list = [];
    for (let i = 0; i < Number(number); i++) {
      const id = await this.contract.tokenOfOwnerByIndex(userAddr, i);
      list.push(id);
    }
    return list;
  }
}

module.exports = NFT;

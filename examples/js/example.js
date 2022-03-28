const NFT = require("./NFT")
const {Message, format, sign, PersonalMessage} = require('js-conflux-sdk');
const {encode, decode} = require('@conflux-dev/conflux-address-rust');

const main = async () => {
 
  const contract_address = format.hexAddress('cfxtest:acg28tvr2y6cfjs93yw5bsxxs9hv64h9gjvbfwjk71');

  const private_key = '0xf3002aadb5a9b231b26a2b7da83b94f2116f24600977ebf6c7c7db91fd4b6764';

  const nft = new NFT(contract_address,private_key);


  //cfxtest:aamdg3c03dtwx2nahsk621wme4x6fwpwfa14ya8hdy test
  //cfxtest:aathtsjfep11dbe59csj34b985n1ag0hjep28d85rd 123
  const address = 'cfxtest:aamdg3c03dtwx2nahsk621wme4x6fwpwfa14ya8hdy';


  // const tx = await nft.mint(format.hexAddress(address), 100);
  // console.log("Mint TX hash:", tx.transactionHash);

  const list = await nft.getAssets('cfxtest:aamdg3c03dtwx2nahsk621wme4x6fwpwfa14ya8hdy');
  console.log("Assets:", list);

}

main().catch(e => console.log(e))

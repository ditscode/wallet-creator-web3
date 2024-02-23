const { Web3 } = require("web3");
const web3 = new Web3("wss://ethereum.publicnode.com");
const readline = require("readline");
const { exit } = require("process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateWallets(numWallets) {
  const wallets = [];
  for (let i = 0; i < numWallets; i++) {
    const newWallet = web3.eth.accounts.create();
    wallets.push(newWallet);
  }
  return wallets;
}

rl.question("How many wallets do you want to create? ", (numWallets) => {
  const wallets = generateWallets(parseInt(numWallets));
  wallets.forEach((wallet, index) => {
    console.log(
      `Wallet ${index + 1} - Address: ${wallet.address}, Private Key: ${
        wallet.privateKey
      }`
    );
  });
  rl.close();
  process.exit();
});

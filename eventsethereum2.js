
const Web3 = require('web3');
const abi= [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"internalType":"bool","name":"sufficient","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
const web3 =new Web3('wss://ropsten.infura.io/ws/v3/32969cb7cf4a45ba9e77877987383127');
const contractAddress = '0xf9440260Abc26E95fa55000bf879e5354876B50C';
const contract = new web3.eth.Contract(abi, contractAddress);
contract.events.Transfer()
.on('data', (event) => {
	console.log(event);
})
.on('error', console.error);


  
  




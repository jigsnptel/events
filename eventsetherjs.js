var ethers = require('ethers');
url='https://data-seed-prebsc-1-s1.binance.org:8545';
var provider = new ethers.providers.JsonRpcProvider(url);
//const abi= [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"internalType":"bool","name":"sufficient","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
const abishort=["function sendCoin(address,uint)","function getBalance(address)", "event Transfer(address indexed, address indexed, uint)"];
const contractAddress = '0xeCD79Ae3bdfd64Cc2d1F2818fb89f064101021ca';
const contract = new ethers.Contract(contractAddress,abishort, provider);


async function main()
{
    estgas=await contract.estimateGas.sendCoin('0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2',200);
    console.log('gas '+ estgas);
    filterto=contract.filters.Transfer('0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2');
    const transferEvents = await contract.queryFilter('Transfer', 21080518, 21080542)
    const transferEventsto = await contract.queryFilter(filterto, 21080518, 21080542)
    console.log(transferEvents)
    console.log(transferEventsto);
}

main();

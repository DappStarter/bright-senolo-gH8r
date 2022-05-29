require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift rifle noble social hockey kangaroo army genuine'; 
let testAccounts = [
"0x9d0bf75aa56393d4d01a39554832cd8f72dece015a97157a64dae795b7deddd2",
"0xf368929dc82fc2547076da47c26045c1edb058febd3f45efefcad98417c21450",
"0x46d2869161d7e6aac2d0b915018e6b056312ce5db4f1407089ea73105d614ead",
"0xa44f1d0eb21b581ede61745180afe371d06ce7f627495401a5bd619ba637db2b",
"0x39417ba7648027cbf7233161bb3b34ef484ea74a6a8eaa0a5b45e0d0e0db5d0b",
"0x1dc747fe703eeabe4987c6721ce114fbc667517ceaf6bacf0b1676cde814dac4",
"0x569f25e8cce42cae2be309b6a881c0946e3b4bee02f5d486fc718ae8328a071f",
"0x21cb367130234fca226a2858ba9ddba1f80ed18cc367dcd95bd45961f0ee2bb7",
"0x2f8851f2293396a43d05588767ca4abfdd3c2c7e2fce797348ba380d175f08d6",
"0xbf8343e8f1cdf9ae50ac9f7f0b18cde0050656c30cded79c65f4e692a2abb74d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture stock rice sad unaware hidden knife army gas'; 
let testAccounts = [
"0x9f8ec03f5b6e0c571fba48dd9b24ecfe2b8dddef83509851329471e174efead4",
"0x6e8525064e0c47e45c41bbc2d99534649b836c45ad903f75dbb6948e60b4a6df",
"0x309863e81602755eac01675d0fb37b25b686d03e9d49e70006b1b4a7826010f7",
"0xb8dabfa398707e5ebaae8c6b3887ab19b69fb8b1eda885700f008ab428174231",
"0xad8716dee3a54bc530ec35e8cd0f9401916fc90cc2fc78dc461e40462830761b",
"0x126b2b0dd36123226a8580f19fec0bbd37a24a3028fe63a1a8c9c9dc16a9cf0a",
"0x7231942c08d64ffa9c98798e15cc5275b14f429e0467e75487a9ac2bc1536381",
"0xa282d7f96f14ff20ca3da8e3c524efc832baf67a57521c6a0a7208b7a6382452",
"0x649fafe737ad642c7e53676602f754ad0d0ab1864b6a2014d6fb93251bd81174",
"0x1402249706ac59f48faa1739def7591596ad3ed15bc3106e2a1d8d745abadcc4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


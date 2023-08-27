//const tokenaddress = "0x5BDB2727F0977669C5d30a71B852F7f1F61699C2"; //BSC

////////////////////////////// G-Force ////////////////////////////////////////

////const tokenaddress = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";//"0x797629b257Dce72878a16a511627Af11E9EF8400"; //Polygoan
////const tokenmatrixAbi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint64", "name": "membcode", "type": "uint64" }, { "indexed": false, "internalType": "uint64", "name": "rcode", "type": "uint64" }, { "indexed": false, "internalType": "uint64", "name": "ptype", "type": "uint64" }], "name": "Multireceivers", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint64", "name": "membcode", "type": "uint64" }, { "indexed": false, "internalType": "uint64", "name": "rcode", "type": "uint64" }, { "indexed": false, "internalType": "uint64", "name": "ptype", "type": "uint64" }], "name": "Multisended", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "LPBMTIGERLocked_Exchange", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "values", "type": "uint256" }], "name": "LPBMTIGERLocked_Token", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_senderads", "type": "address" }, { "internalType": "uint256", "name": "_amttoken", "type": "uint256" }, { "internalType": "uint64", "name": "membcode", "type": "uint64" }, { "internalType": "uint64", "name": "rcode", "type": "uint64" }, { "internalType": "uint64", "name": "plan", "type": "uint64" }], "name": "StakingWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "TokenPrices", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aAmt", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aEBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aSBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aTot", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_sSBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_sEBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_sChunk", "type": "uint256" }, { "internalType": "uint256", "name": "_sPrice", "type": "uint256" }, { "internalType": "uint256", "name": "_sCap", "type": "uint256" }, { "internalType": "uint256", "name": "_srefeper", "type": "uint256" }, { "internalType": "uint256", "name": "_sburnper", "type": "uint256" }, { "internalType": "uint256", "name": "_srefertoken", "type": "uint256" }], "name": "beginBuy", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_aSBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_aEBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_aAmt", "type": "uint256" }, { "internalType": "uint256", "name": "_aCap", "type": "uint256" }], "name": "beginClaim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tliquidity", "type": "uint256" }, { "internalType": "uint256", "name": "_tdecimal", "type": "uint256" }, { "internalType": "uint256", "name": "_tburningratio", "type": "uint256" }, { "internalType": "uint256", "name": "_tburningbuyratio", "type": "uint256" }, { "internalType": "uint256", "name": "_tburningsellratio", "type": "uint256" }, { "internalType": "bool", "name": "_tsafegardbuy", "type": "bool" }, { "internalType": "bool", "name": "_tsafegardsell", "type": "bool" }], "name": "beginsetting", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_bool", "type": "uint256" }], "name": "burnStart", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "buyPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_refer", "type": "address" }], "name": "buyToken", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "buyTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_refer", "type": "address" }], "name": "claimAirdrop", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sChunk", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sEBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sSBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sTot", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sburnper", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sellPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "sellTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newSellPrice", "type": "uint256" }, { "internalType": "uint256", "name": "newBuyPrice", "type": "uint256" }], "name": "setPrices", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "srefeper", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "srefertoken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tburningbuyratio", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tburningratio", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tburningsellratio", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tdecimal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tliquidity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "tsafegardbuy", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tsafegardsell", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "viewAirdrop", "outputs": [{ "internalType": "uint256", "name": "StartBlock", "type": "uint256" }, { "internalType": "uint256", "name": "EndBlock", "type": "uint256" }, { "internalType": "uint256", "name": "DropCap", "type": "uint256" }, { "internalType": "uint256", "name": "DropCount", "type": "uint256" }, { "internalType": "uint256", "name": "DropAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "viewSale", "outputs": [{ "internalType": "uint256", "name": "StartBlock", "type": "uint256" }, { "internalType": "uint256", "name": "EndBlock", "type": "uint256" }, { "internalType": "uint256", "name": "SaleCap", "type": "uint256" }, { "internalType": "uint256", "name": "SaleCount", "type": "uint256" }, { "internalType": "uint256", "name": "ChunkSize", "type": "uint256" }, { "internalType": "uint256", "name": "SalePrice", "type": "uint256" }, { "internalType": "uint256", "name": "Referpercent", "type": "uint256" }, { "internalType": "uint256", "name": "Burnpercent", "type": "uint256" }, { "internalType": "uint256", "name": "Refertoken", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];

////////////////////////////// G-Force END ////////////////////////////////////////

const tokenaddress = "0x702Fd1830BC11e6B09D400f8e13a06F1f161E503";
const tokenmatrixAbi = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint64",
        "name": "membcode",
        "type": "uint64"
    }, {
        "indexed": false,
        "internalType": "uint64",
        "name": "rcode",
        "type": "uint64"
    }, {
        "indexed": false,
        "internalType": "uint64",
        "name": "ptype",
        "type": "uint64"
    }],
    "name": "Multireceivers",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint64",
        "name": "membcode",
        "type": "uint64"
    }, {
        "indexed": false,
        "internalType": "uint64",
        "name": "rcode",
        "type": "uint64"
    }, {
        "indexed": false,
        "internalType": "uint64",
        "name": "ptype",
        "type": "uint64"
    }],
    "name": "Multisended",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "LPBMTIGERLocked_Exchange",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "contract IERC20",
        "name": "token",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "values",
        "type": "uint256"
    }],
    "name": "LPBMTIGERLocked_Token",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_senderads",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_amttoken",
        "type": "uint256"
    }, {
        "internalType": "uint64",
        "name": "membcode",
        "type": "uint64"
    }, {
        "internalType": "uint64",
        "name": "rcode",
        "type": "uint64"
    }, {
        "internalType": "uint64",
        "name": "plan",
        "type": "uint64"
    }],
    "name": "StakingWallet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "TokenPrices",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "aAmt",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "aCap",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "aEBlock",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "aSBlock",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "aTot",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_sSBlock",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_sEBlock",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_sChunk",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_sPrice",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_sCap",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_srefeper",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_sburnper",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_srefertoken",
        "type": "uint256"
    }],
    "name": "beginBuy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_aSBlock",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_aEBlock",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_aAmt",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_aCap",
        "type": "uint256"
    }],
    "name": "beginClaim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_tliquidity",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_tdecimal",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_tburningratio",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_tburningbuyratio",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_tburningsellratio",
        "type": "uint256"
    }, {
        "internalType": "bool",
        "name": "_tsafegardbuy",
        "type": "bool"
    }, {
        "internalType": "bool",
        "name": "_tsafegardsell",
        "type": "bool"
    }],
    "name": "beginsetting",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_bool",
        "type": "uint256"
    }],
    "name": "burnStart",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "buyPrice",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_refer",
        "type": "address"
    }],
    "name": "buyToken",
    "outputs": [{
        "internalType": "bool",
        "name": "success",
        "type": "bool"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "buyTokens",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_refer",
        "type": "address"
    }],
    "name": "claimAirdrop",
    "outputs": [{
        "internalType": "bool",
        "name": "success",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
    }],
    "name": "decreaseAllowance",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
    }],
    "name": "increaseAllowance",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "sCap",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "sChunk",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "sEBlock",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "sPrice",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "sSBlock",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "sTot",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "sburnper",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "sellPrice",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "sellTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "newSellPrice",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "newBuyPrice",
        "type": "uint256"
    }],
    "name": "setPrices",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "srefeper",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "srefertoken",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "tburningbuyratio",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "tburningratio",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "tburningsellratio",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "tdecimal",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "tliquidity",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "recipient",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "sender",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "tsafegardbuy",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "tsafegardsell",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "viewAirdrop",
    "outputs": [{
        "internalType": "uint256",
        "name": "StartBlock",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "EndBlock",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "DropCap",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "DropCount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "DropAmount",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "viewSale",
    "outputs": [{
        "internalType": "uint256",
        "name": "StartBlock",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "EndBlock",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "SaleCap",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "SaleCount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "ChunkSize",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "SalePrice",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "Referpercent",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "Burnpercent",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "Refertoken",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "stateMutability": "payable",
    "type": "receive"
}];


const tokenBUSDaddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";

//const tokenPlanaddress = "0x97152Dbb4855B3C0E54777f88339fe461B687037"; //BSC
const tokenPlanaddress = "0xe099AdFBbaE0Abaf888d3bd66868Dc757b56508b"; //POLYGOAN
const tokenPlanAbi = [{
    "inputs": [{
        "internalType": "address payable",
        "name": "ownerAddress",
        "type": "address"
    }, {
        "internalType": "address payable",
        "name": "ID1address",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_token",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "uint256",
        "name": "timeNow",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "paidTo",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "paidForLevel",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "paidAmount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "paidAgainst",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint32",
        "name": "laps",
        "type": "uint32"
    }],
    "name": "autoPoolPayEv",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "_user",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_level",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_time",
        "type": "uint256"
    }],
    "name": "levelBuyEv",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "_user",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "_referral",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_level",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_time",
        "type": "uint256"
    }],
    "name": "lostForLevelEv",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "onOwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "_user",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "_referral",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_level",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_time",
        "type": "uint256"
    }],
    "name": "paidForLevelEv",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "ref",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amt",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "timeNow",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "levelno",
        "type": "uint256"
    }],
    "name": "payForLevelOneEv",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "_userWallet",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "uint256",
        "name": "_userID",
        "type": "uint256"
    }, {
        "indexed": true,
        "internalType": "uint256",
        "name": "_referrerID",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_time",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "_refererWallet",
        "type": "address"
    }],
    "name": "regLevelEv",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "uint256",
        "name": "timeNow",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "autoPoolLevelIndex",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "userIndexInAutoPool",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
    }],
    "name": "updateAutoPoolEv",
    "type": "event"
}, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "AutopoolIncome",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "LevelIncome",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
    }],
    "name": "Team_ReEntry",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "referreraddress",
        "type": "address"
    }],
    "name": "Team_registrationExt",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "TotalUserautopool",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "autoPoolDist",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "autoPoolIndex",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "autoPoolLevel",
    "outputs": [{
        "internalType": "uint256",
        "name": "userID",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "autoPoolParent",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "autoPoolSubDist",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "defaultRefID",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "distForLevel",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "lastIDCount",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "lastReJoinTime",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "levelLifeTime",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "maxDownLimit",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "netTotalUserWithdrawable",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "nextMemberFillBox",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "nextMemberFillIndex",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "poolAddress",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "priceOfLevel",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "priceOfMatrix",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "reJoinAutoPool",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "internalType": "uint256",
        "name": "_referrerID",
        "type": "uint256"
    }],
    "name": "regUser",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "internalType": "address",
        "name": "_token",
        "type": "address"
    }],
    "name": "setTokenAddress",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "address",
        "name": "_user",
        "type": "address"
    }],
    "name": "timeRemains",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "tokenDai",
    "outputs": [{
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "tokenTokenAddress",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "userAddressByID",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "userInfos",
    "outputs": [{
        "internalType": "bool",
        "name": "joined",
        "type": "bool"
    }, {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "referrerID",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "address",
        "name": "_user",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_level",
        "type": "uint256"
    }],
    "name": "viewUserLevelExpired",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "address",
        "name": "_user",
        "type": "address"
    }],
    "name": "viewUserReferral",
    "outputs": [{
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];

var balance_MAIN = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
var bnbrate = 0;


$(document).ready(async function() {
    console.log("ready!");
    $("#btndash").hide();
    $("#btnconnect").show();
    debugger
    if (window.ethereum) {
        console.log("mahi1");
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            console.log(web3);

            var networkid = await web3.eth.net.getId()
            console.log("networkid " + networkid);
            if (networkid !== 137) {
                alert('Connect to BSC Mainnet Network');
                //initApp_token();
                // $('#tknapprove1').hide();
                //  $('#regnbtn1').hide();
                $("#btndash").hide();
                $("#btnconnect").show();
            } else {
                connect();
                getdashboard1();
                CoinBalance();
                token_allowance();
                //usdtobnb();

            }


            // Acccounts now exposed
            web3.eth.sendTransaction({ /* ... */ });
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // console.log(web3);

        // Acccounts always exposed
        web3.eth.sendTransaction({ /* ... */ });
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        alert('Requires ETH purse to interact smart contract You should consider trying MetaMask!');
        //requiredMetamask();
    }
});


async function connect() {

    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.request({
                method: 'eth_requestAccounts'
            });
            //getAccount();
        } catch (error) {
            alert("User Rejected Permission");
            console.log('user rejected permission');
        }
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        console.log('all ok');
    } else {
        console.log('No web3 provider detected');
        alert("Metamask / Trust Wallet Not Connected");
    }
}

window.onload = function() {
    function querySt(ji) {
        hu = window.location.search.substring(1);
        gy = hu.split("&");
        for (i = 0; i < gy.length; i++) {
            ft = gy[i].split("=");
            if (ft[0] == ji) {
                return ft[1];
            }
        }
    }
    var ref = querySt("sp");
    console.log('ref is ' + ref);
    var referaladdd;
    if (ref == null) {
        //$('#referral_link1').val(1);
        //document.getElementById('refaddress').value = '0xb43fcb62104c3f7af1df7707026822a00e2f92ab';
        // document.getElementById('refaddress').value = '0x92a77552B012db74CA344C55B547Cd78F57C8ffF';

    } else {

        document.getElementById('refaddress').value = ref;
        referaladdd = document.getElementById('refaddress').value
        console.log('ref is referaladdd' + referaladdd);
    }
    console.log('ref is referaladdd1 ' + referaladdd);
}


async function getdashboard1() {
    debugger
    const account = await getCurrentAccount();

    hiddenconnecwallet = web3.eth.accounts[0];
    if (account !== '') {
        var maindt = {
            "ADDRESS1": account
        };

        $("#btnconnect").hide();
        var fpart = account.substring(0, 5);
        var spart = account.substring(38, 44);
        $("#addressconnect").html(fpart + '...' + spart);

        $("#btndash").show();
        $("#btnconnect").hide();

        $("#wallet_address").html(account);
        $("#copy-me").val(account);
        $("#copybox15").val(account);

        getuser(account);
        Userinfo();
    }


}

window.ethereum.on('accountsChanged', async () => {
    location.href = "/";
});


async function getCurrentAccount() {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

async function getuser(account) {
    //var rlink = 'https://tycooncoin.online/Home/Contact?sp=' + account;

    window.MetaPowercontract = await new window.web3.eth.Contract(tokenPlanAbi, tokenPlanaddress);
    //const Userinfoo1 = await window.MetaPowercontract.methods.userInfos(account, 0).call({ from: account });

    var userInfos_Invest = await window.MetaPowercontract.methods.userInfos(account).call({
        from: account
    });
    debugger
    if (userInfos_Invest.id > 0) {
        //var rlink = 'https://localhost:44385/Home/Contact?sp=' + account;
        var rlink = 'https://games.meta-gforce.space/reg.asp?sp=' + account;
        $("#referrallink").html(rlink);
        $("#myInput").val(rlink);
    }


}


async function token_allowance() {
    const account = await getCurrentAccount();
    debugger

    window.mxgfcontract = await new window.web3.eth.Contract(tokenmatrixAbi, tokenaddress);

    var balance = await window.mxgfcontract.methods.allowance(account, tokenPlanaddress).call({
        from: account
    });
    debugger
    // alert("Allowance : " + balance);
    //var mxgfrate = await window.mxgfcontract.methods.TokenPrices().call();
    if (balance) {
        if (balance > 1) {
            alert('Wallet approve successfully')
            $('#tknapprove1').hide();
            $('#regnbtn1').show();

        } else {
            alert('First approve wallet')
            $('#tknapprove1').show();
            $('#regnbtn1').hide();
        }

    }

}




async function tokenApproval() {
    const account = await getCurrentAccount();
    debugger

    window.mxgfcontract = await new window.web3.eth.Contract(tokenmatrixAbi, tokenaddress);

    const gasEstimated = await window.mxgfcontract.methods.approve(tokenPlanaddress, BigInt(balance_MAIN)).estimateGas({
        from: account
    });

    const gas = await calcGas(gasEstimated);

    $.get('https://gasstation-mainnet.matic.network/v2', async function(result) {
        gas.maxFeePerGas = parse(result.fast.maxFee);
        gas.maxPriorityFeePerGas = parse(result.fast.maxPriorityFee);
        //alert(gas);
        var balance = await window.mxgfcontract.methods.approve(tokenPlanaddress, BigInt(balance_MAIN)).send({
            from: account,
            gasLimit: gasEstimated,
            maxPriorityFeePerGas: gas.maxPriorityFeePerGas,
            maxFeePerGas: gas.maxFeePerGas,
        });

        //var mxgfrate = await window.mxgfcontract.methods.TokenPrices().call();
        if (balance.transactionHash) {
            if (balance.transactionHash) {
                alert('Wallet approve successfully')
                $('#tknapprove1').hide();
                $('#regnbtn1').show();
            } else {
                alert('Wallet approve Failed')
                $('#tknapprove1').show();
                $('#regnbtn1').hide();
            }

        }

    });
}




async function CoinBalance() {
    const account = await getCurrentAccount();
    debugger
    window.pvccontract = await new window.web3.eth.Contract(tokenmatrixAbi, tokenaddress);
    var balance = await window.pvccontract.methods.balanceOf(account).call({
        from: account
    });
    debugger
    if (balance) {

        if (balance > 0) {
            balance = balance / 1000000000000000000
            $("#tokenbalance").html(balance.toFixed(6));

        } else {
            $("#tokenbalance").html(0.00);

        }
    }
    //console.log('BNB balance = : ', await web3.eth.getBalance(account));
    const bnbbalance = await web3.eth.getBalance(account);
    if (bnbbalance > 0) {
        var bnbbalance1 = bnbbalance / 1000000000000000000
        $("#Netivtokenbalance").html(bnbbalance1.toFixed(6));

    } else {
        $("#Netivtokenbalance").html(0.00);
    }

    //window.busdcontract = await new window.web3.eth.Contract(tokenmatrixAbi, tokenBUSDaddress);
    //var busdbalance = await window.busdcontract.methods.balanceOf(account).call({ from: account });

    //if (busdbalance) {

    //	if (busdbalance > 0) {
    //		busdbalance = busdbalance / 1000000000000000000
    //		$("#busdbalance").html(busdbalance.toFixed(6));
    //		$("#busd1").html(busdbalance.toFixed(6));

    //	}
    //	else {
    //		$("#busdbalance").html(0.00);
    //		$("#busd1").html(0.00);
    //	}
    //}
}

async function usdtobnb() {
    // alert("mahi rate");
    $.get('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BNB', function(result) {
        var bnbAmount = result.BNB;
        bnbrate = bnbAmount;
        //alert("bnbrate : " + bnbrate);
    });
}

async function RegistrationInvestment() {
    const account = await getCurrentAccount();
    window.GPowercontract = await new window.web3.eth.Contract(tokenPlanAbi, tokenPlanaddress);
    //var Investamount = $("#Investamount").val();
    var Referaladdress = $("#refaddress").val();
    // var paidAmount = Investamount * 1000000000000000000;
    var checking = 0;
    //try {
    //    alert('First Call0');
    const userInfos_Invest = await window.GPowercontract.methods.userInfos(account).call({
        from: account
    });

    //    checking = 2;
    //    alert('First Call1');
    //} catch (e) {
    //    checking = 1;
    //    alert('First Call2');
    //}

    // alert(checking);
    //var userInfos_Invest = await window.GPowercontract.methods.investIndexCount(account).call({ from: account });
    if (userInfos_Invest.joined == false) {
        const userInfos_ref = await window.GPowercontract.methods.userInfos(Referaladdress).call({
            from: account
        });
        var Referalid = userInfos_ref.id;
        // alert('First Call');
        const gasEstimated = await window.GPowercontract.methods.regUser(Referalid).estimateGas({
            from: account
        });

        const gas = await calcGas(gasEstimated);

        $.get('https://gasstation-mainnet.matic.network/v2', async function(result) {
            gas.maxFeePerGas = parse(result.fast.maxFee);
            gas.maxPriorityFeePerGas = parse(result.fast.maxPriorityFee);

            var Logintrasfer = await window.GPowercontract.methods.regUser(Referalid).send({
                from: account,
                gasLimit: gasEstimated,
                maxPriorityFeePerGas: gas.maxPriorityFeePerGas,
                maxFeePerGas: gas.maxFeePerGas,
                //gas: 90000,
                //value: paidAmount
                //gasLimit: 52742,
                //gas: 52742,
                //maxPriorityFeePerGas: 5000000000,
                //maxFeePerGas: 5200000000,
            });


            //if (stakingtrasfer.transactionHash) {
            if (Logintrasfer.transactionHash) {
                alert("Registration Success..!");
                var url = "reg.asp";
                window.location.href = url;
                console.log("success " + JSON.stringify(Logintrasfer.transactionHash));
                localStorage.setItem("loginaddress", account);
            }

        });

    } else {

        const gasEstimated = await window.GPowercontract.methods.reJoinAutoPool().estimateGas({
            from: account
        });

        const gas = await calcGas(gasEstimated);

        $.get('https://gasstation-mainnet.matic.network/v2', async function(result) {
            gas.maxFeePerGas = parse(result.fast.maxFee);
            gas.maxPriorityFeePerGas = parse(result.fast.maxPriorityFee);

            var Logintrasfer = await window.GPowercontract.methods.reJoinAutoPool().send({
                from: account,
                gasLimit: gasEstimated,
                maxPriorityFeePerGas: gas.maxPriorityFeePerGas,
                maxFeePerGas: gas.maxFeePerGas,

            });


            //if (stakingtrasfer.transactionHash) {
            if (Logintrasfer.transactionHash) {
                alert("Re-Join Success..!");
                var url = "index.asp";
                window.location.href = url;
                console.log("success " + JSON.stringify(Logintrasfer.transactionHash));
                localStorage.setItem("loginaddress", account);
            }

        });

    }


    //});

}

async function TeamRegistrations() {
    const account = await getCurrentAccount();
    window.MetaPowercontract = await new window.web3.eth.Contract(tokenPlanAbi, tokenPlanaddress);
    var ref_address = $("#ref_address").val();
    var useraddress = $("#useraddress").val();

    const gasEstimated = await window.MetaPowercontract.methods.Team_registrationExt(ref_address, useraddress).estimateGas({
        from: account
    });
    const gas = await calcGas(gasEstimated);

    $.get('https://gasstation-mainnet.matic.network/v2', async function(result) {
        gas.maxFeePerGas = parse(result.fast.maxFee);
        gas.maxPriorityFeePerGas = parse(result.fast.maxPriorityFee);

        var Withtrasfer = await window.MetaPowercontract.methods.Team_registrationExt(ref_address, useraddress).send({
            from: account,
            gasLimit: gasEstimated,
            maxPriorityFeePerGas: gas.maxPriorityFeePerGas,
            maxFeePerGas: gas.maxFeePerGas,

        });


        //if (stakingtrasfer.transactionHash) {
        if (Withtrasfer.transactionHash) {
            alert("Team Registration Success..!");
            var url = "team.asp";
            window.location.href = url;
            console.log("success " + JSON.stringify(Withtrasfer.transactionHash));
            localStorage.setItem("Withaddress", account);
        }
    });

}

async function Team_Reentry() {
    const account = await getCurrentAccount();
    window.MetaPowercontract = await new window.web3.eth.Contract(tokenPlanAbi, tokenPlanaddress);

    var useraddress = $("#useraddress").val();

    const gasEstimated = await window.MetaPowercontract.methods.Team_ReEntry(useraddress).estimateGas({
        from: account
    });
    const gas = await calcGas(gasEstimated);

    $.get('https://gasstation-mainnet.matic.network/v2', async function(result) {
        gas.maxFeePerGas = parse(result.fast.maxFee);
        gas.maxPriorityFeePerGas = parse(result.fast.maxPriorityFee);

        var claimRewardBonus = await window.MetaPowercontract.methods.Team_ReEntry(useraddress).send({
            from: account,
            gasLimit: gasEstimated,
            maxPriorityFeePerGas: gas.maxPriorityFeePerGas,
            maxFeePerGas: gas.maxFeePerGas,
        });


        //if (stakingtrasfer.transactionHash) {
        if (claimRewardBonus.transactionHash) {
            alert("Bonus Claim Success..!");
            var url = "team-re.asp";
            window.location.href = url;
            console.log("success " + JSON.stringify(claimRewardBonus.transactionHash));
            localStorage.setItem("claimRewardBonus", account);
        }
    });

}

async function Userinfo() {
    const account = await getCurrentAccount();
    debugger
    //alert("HI..");
    window.MetaPowercontract = await new window.web3.eth.Contract(tokenPlanAbi, tokenPlanaddress);

    // const Userinfoo = await window.MetaPowercontract.methods.userInfos(account, 0).call({ from: account });
    // debugger
    // if (Userinfoo.joinTime > 0) {
    // $('#divrefaddress').hide();
    // $("#airtoken").html('100');
    // var myDate = new Date(Userinfoo.joinTime * 1000);
    // $("#firstinvestdt").html(myDate.toLocaleString());
    // $("#firstinvest").html(Userinfoo.investedAmount / 1000000000000000000);
    // $("#BoosterROIPer").html(Userinfoo.returnPercent/100);
    // }

    // $("#returnPercent").val(Userinfoo.joinTime);
    // $("#upline").html(Userinfoo.referrer);

    const totalInvest = await window.MetaPowercontract.methods.AutopoolIncome(account).call({
        from: account
    });
    $("#autopoolincome").html(totalInvest / 1000000000000000000);
    //const totalBusinessFrom = await window.MetaPowercontract.methods.totalBusinessFrom(account).call({ from: account });
    const totalBusinessFrom = await window.MetaPowercontract.methods.LevelIncome(account).call({
        from: account
    });
    $("#Levelincome").html(totalBusinessFrom / 10);

    // let totalROI = await window.MetaPowercontract.methods.totalROI(account).call({ from: account });
    //let viewMyRoi = await window.MetaPowercontract.methods.viewMyRoi(account).call({ from: account });

    let totroi = (parseInt(totalInvest) / 1000000000000000000) + (parseInt(totalBusinessFrom) / 10);
    // alert(totroi);
    $("#totalincome").html(totroi);




    // const totalTeam = await window.MetaPowercontract.methods.totalTeam(account).call({ from: account });
    // $("#totteam").html(totalTeam);

    // const totalDirect = await window.MetaPowercontract.methods.totalDirect(account).call({ from: account });
    // $("#totdirect").html(totalDirect);

    // const totalReferralWithdraw = await window.MetaPowercontract.methods.totalReferralWithdraw(account).call({ from: account });
    // const referralWithdraw = await window.MetaPowercontract.methods.referralWithdraw(account).call({ from: account });
    // $("#earning").html(totalReferralWithdraw / 1000000000000000000);

    // const totalMentorGain = await window.MetaPowercontract.methods.totalMentorGain(account).call({ from: account });
    // $("#Total_Binary_Income").html(totalMentorGain / 1000000000000000000);

    // const totalPaid = await window.MetaPowercontract.methods.totalPaid(account).call({ from: account });
    // $("#totalWith").html(totalPaid / 1000000000000000000);

    // const viewMyBonus = await window.MetaPowercontract.methods.viewMyBonus(account).call({ from: account });
    // $("#Matching_Wallet").html(viewMyBonus / 1000000000000000000);

    // const mentorGain = await window.MetaPowercontract.methods.mentorGain(account).call({ from: account });
    // let totavl_balance = parseInt(viewMyRoi) + parseInt(viewMyBonus) + parseInt(referralWithdraw) + parseInt(mentorGain);
    // //alert(totavl_balance)
    // $("#totalincome").html(totavl_balance / 1000000000000000000);




    //for (var i = 0; i < 11; i++) {

    //}

    //$("#returnPercent").val(Userinfoo.returnPercent/100);
    //$("#returnPercent").val(Userinfoo.returnPercent);
    //$("#returnPercent").val(Userinfoo.returnPercent);
    //var joinTime = Userinfoo.joinTime;
    //var referrer = Userinfoo.referrer;
    //var investedAmount = Userinfoo.investedAmount;   
    //var returnPercent = $("#returnPercent").val();   
    //var lastWithdrawTime = $("#lastWithdrawTime").val();   
    //var totalPaidROI = $("#totalPaidROI").val();   
    //var totalBusiness = $("#totalBusiness").val();   
    //alert(Userinfoo.joinTime);



}


async function goPin_Login() {
    const account = await getCurrentAccount();
    var url = "/Home/Pin_Login?address=" + account;
    window.location.href = url;
}
async function goPin_Create_autho_user() {
    const account = await getCurrentAccount();
    var url = "/Home/Pin_Create_autho_user?address=" + account;
    window.location.href = url;
}

async function goPin_Reset() {
    const account = await getCurrentAccount();
    var url = "/Home/Pin_Reset?address=" + account;
    window.location.href = url;
}


async function Stakingpvc() {
    const account = await getCurrentAccount();
    debugger
    var stakingadd = $("#stakingaddress").val();
    var stakeamount = $("#stakeamount").val();
    //alert('staking address : '+stakingadd);
    if (stakeamount >= 1) {
        stakeamount = stakeamount * 1000000000;
    } else {
        alert("Enter PVC Token greater than zero...!");
        return;
    }

    window.pvccontract = await new window.web3.eth.Contract(tokenmatrixAbi, tokenaddress);

    var balance = await window.pvccontract.methods.balanceOf(account).call({
        from: account
    });
    if (balance < stakeamount) {
        alert("PVC Balance is low of your stake amount...!");
        return;
    }
    var stakeamountt = stakeamount / 1000000000;
    alert('Stake PVC amount : ' + stakeamountt);
    var stakingtrasfer = await window.pvccontract.methods.transfer(stakingadd, stakeamount).send({
        from: account,
        gasLimit: 52742,
        gas: 52742,
        //maxPriorityFeePerGas: 5000000000,
        //maxFeePerGas: 5200000000,
    });

    //if (stakingtrasfer.transactionHash) {
    if (stakingtrasfer.transactionHash) {
        alert('Wallet Staking Successfully');
        stakingsuccess(account, stakingtrasfer.transactionHash, stakeamount / 1000000000);
    } else {
        alert('Wallet Staking Failed')
        // $('#tknapprove1').show();
        // $('#regnbtn1').hide();
        //document.getElementById("HideBuypackage").style.display = "none";
    }

    // }

}


function parse(data) {
    debugger
    return ethers.utils.parseUnits(Math.ceil(data) + '', 'gwei');
}

async function calcGas(gasEstimated) {
    let gas = {
        gasLimit: gasEstimated, //.mul(110).div(100)
        maxFeePerGas: ethers.BigNumber.from(50000000000),
        maxPriorityFeePerGas: ethers.BigNumber.from(60000000000)
    };
    //try {
    //    $.get('https://gasstation-mainnet.matic.network/v2', function (result) {
    //        gas.maxFeePerGas = parse(result.fast.maxFee);
    //        gas.maxPriorityFeePerGas = parse(result.fast.maxPriorityFee);

    //    });

    //} catch (error) {
    //    console(error);
    //}
    return gas;
}
import { Images } from "../Images";


export const HomeTabs = [
    {
        id: 1,
        tabLogo: Images.receiveTab,
    },
    {
        id: 2,
        tabLogo: Images.sendTab,
    },
    {
        id: 3,
        tabLogo: Images.swapTab,
    },
    {
        id: 4,
        tabLogo: Images.buyTab,
    },

]

export const tokensData = [
    {
        id: 1,
        tokenLogo: Images.solana,
        tokenName: 'Solana',
        tokenSymbol: 'SOL',
        tokenPrice: '15,000',
        dollarPrice: '$14,987.50'
    }
]

export const historyData = [
    {
        date: "October 10, 2025",
        transactions: [
            {
                id: 1,
                statusLogo: Images.receiveGreenArrow,
                status: "Token Received",
                amount: "+0.045873 SOL",
                usdValue: "+$4,687.20",
                address: "TTB..aLp7p",
                time: "21:45"
            },
            {
                id: 2,
                statusLogo: Images.sentRedArrow,
                status: "Token Sent",
                amount: "-0.032410 SOL",
                usdValue: "-$3,210.50",
                address: "TTB..aLp7p",
                time: "21:45"
            }
        ]
    },
    {
        date: "October 8, 2025",
        transactions: [
            {
                id: 3,
                statusLogo: Images.receiveGreenArrow,
                status: "Token Received",
                amount: "+0.058573 SOL",
                usdValue: "+$5,987.50",
                address: "TTB..kGlp5",
                time: "19:12"
            },
            {
                id: 4,
                statusLogo: Images.sentRedArrow,
                status: "Token Sent",
                amount: "-0.058573 SOL",
                usdValue: "-$5,987.50",
                address: "TTB..kGlp5",
                time: "19:12"
            }
        ]
    },
    {
        date: "October 3, 2025",
        transactions: [
            {
                id: 5,
                statusLogo: Images.sentRedArrow,
                status: "Token Sent",
                amount: "-0.025000 SOL",
                usdValue: "-$2,548.00",
                address: "TTB..vCj45",
                time: "14:02"
            },
            {
                id: 6,
                statusLogo: Images.receiveGreenArrow,
                status: "Token Received",
                amount: "+0.025000 SOL",
                usdValue: "+$2,548.00",
                address: "TTB..vCj45",
                time: "14:02"
            }
        ]
    },

]

export const tokenDetailsData = [
    {
        id: 1,
        title: "Date",
        desc: "October 10, 2025"
    },
    {
        id: 2,
        title: "Amount",
        desc: "+0.045873 SOL"
    },
    {
        id: 3,
        title: "Network",
        desc: "Solana"
    },
    {
        id: 4,
        title: "Status",
        desc: "Token Received"
    },
    {
        id: 5,
        title: "Cashback",
        desc: "+$4,687.20"
    },
    {
        id: 6,
        title: "Receiver",
        desc: "TTB..aLp7p"
    },
    {
        id: 7,
        title: "Time",
        desc: "21:45"
    }
]

export const rewardsData = [
    {
        id: 1,
        statusLogo: Images.receiveGreenArrow,
        cryptoAmount: "+0.058573 SOL",
        title: "Token Received",
        dollarAmont: "+$10",
        desc: "Cashback",
    },
    {
        id: 2,
        statusLogo: Images.sentRedArrow,
        title: "Token Sent",
        cryptoAmount: "+0.058573 SOL",
        dollarAmont: "+$10",
        desc: "Cashback",
    },
    {
        id: 3,
        statusLogo: Images.receiveGreenArrow,
        title: "Token Received",
        cryptoAmount: "+0.058573 SOL",
        dollarAmont: "+$10",
        desc: "Cashback",
    },
    {
        id: 4,
        statusLogo: Images.sentRedArrow,
        title: "Token Sent",
        cryptoAmount: "+0.058573 SOL",
        dollarAmont: "+$10",
        desc: "Cashback",
    },
]

export const rewardsDetailsData = [
    {
        id: 1,
        title: "Date",
        desc: "October 10, 2025"
    },
    {
        id: 2,
        title: "Received Amount",
        desc: "10,000 SOL"
    },
    {
        id: 3,
        title: "Network",
        desc: "Solana"
    },
    {
        id: 4,
        title: "Status",
        desc: "Received"
    },

]

export const settingListData = [
    {
        id: 1,
        logo: Images.security,
        title: "Security",
    },

    {
        id: 2,
        logo: Images.walletConnect,
        title: "Wallet Connect",
    },
    {
        id: 3,
        logo: Images.terms,
        title: "Terms of Service",
    },
    {
        id: 4,
        logo: Images.headPhones,
        title: "Help & Support",
    },
    {
        id: 5,
        logo: Images.delete,
        title: "Delete Account",
    },
]

export const customTokenList = [
    {
        id: 1,
        title: 'Name',
        desc: 'TRUMP'
    },
    {
        id: 2,
        title: 'Symbol',
        desc: 'TRUMP'
    },
    {
        id: 3,
        title: 'Balance',
        desc: '0 TRUMP'
    },
]

export const sendConfirmDetailsData = [
    {
        id: 1,
        title: "From",
        desc: "1FfmbHfn...sN455paPH"
    },
    {
        id: 2,
        title: "To",
        desc: "1Ay8vMC7R...iQHSAbg"
    },
    {
        id: 3,
        title: "Network",
        desc: "Solana"
    },
]

export const tokenDetailsInfoData = [
    {
        id: 1,
        title: "Contract Address",
        desc: "1FfmbHfn...sN455paPH"
    },
    {
        id: 2,
        title: "Market Cap",
        desc: "$2.31T"
    },
    {
        id: 3,
        title: "Total Supply",
        desc: "19.92M"
    },
    {
        id: 4,
        title: "Circulating Supply",
        desc: "19.92M"
    }
]

// New Dummy Data       
export const createWalletDataList = [
    {
        id: 1,
        logo: Images.seamLessSetup,
        title: "Seamless setup",
        desc: "Create a wallet using a Google or Apple account and start exploring web3 with ease"
    },
    {
        id: 2,
        logo: Images.greenLock,
        title: "Enhanced security",
        desc: "Your wallet is stored securely and decentralized across multiple factors"
    },
    {
        id: 3,
        logo: Images.heart,
        title: "Easy recovery",
        desc: "Recover access to your wallet with your Google or Apple account and a 4-digit PIN"
    }
]

export const networkListData = [
    {
        id: 1,
        logo: Images.tokenLogo,
        title: "Solana",
    },
    {
        id: 2,
        logo: Images.ethereum,
        title: "Ethereum",
    },
    {
        id: 3,
        logo: Images.base,
        title: "Base",
    },
    {
        id: 4,
        logo: Images.sui,
        title: "Sui",
    },
    {
        id: 5,
        logo: Images.polygon,
        title: "Polygon",
    },
    {
        id: 6,
        logo: Images.bitcoin,
        title: "Bitcoin",
    },
]

export const HorizontalSrcollList = [
    {
        id: 1,
        tokenLogo: Images.tokenLogo,
        title: 'Earn up to 8% APY by staking your SOL',
    },
    {
        id: 2,
        tokenLogo: Images.tokenLogo,
        title: 'Earn up to 8% APY by staking your SOL',
    },
    {
        id: 3,
        tokenLogo: Images.tokenLogo,
        title: 'Earn up to 8% APY by staking your SOL',
    },
]
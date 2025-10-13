export interface Chain {
  tokenName: string;
  symbol: string;
  decimals: number;
  chainName: string;
  rpcUrl: string;
  rpcUrlname: string;
  isEvm: number;
  orderno: number;
  isactive: number;
  type: "chain" | "token";
  tokenAddress: string | number;
  tokenImage: string;
  chainId: number;
}

export const chainsArray: Chain[] = [
  {
    tokenName: "Solana",
    symbol: "SOL",
    decimals: 9,
    chainName: "Solana",
    rpcUrl: "https://api.mainnet-beta.solana.com",
    rpcUrlname: "solana-mainnet",
    isEvm: 0,
    orderno: 14,
    isactive: 1,
    type: "chain",
    tokenAddress: 0,
    tokenImage: "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1696504757",
    chainId: 101, // custom internal reference ID (Solana doesn't use EVM-style chainId)
  },

  // 🔹 USDT Token on Solana
  {
    tokenName: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    chainName: "Solana",
    rpcUrl: "https://api.mainnet-beta.solana.com",
    rpcUrlname: "solana-mainnet",
    isEvm: 0,
    orderno: 15,
    isactive: 1,
    type: "token",
    tokenAddress: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", // USDT SPL Token Mint Address
    tokenImage: "https://assets.coingecko.com/coins/images/325/standard/Tether-logo.png?1696501661",
    chainId: 101,
  },
];

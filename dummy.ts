import { Chain } from './src/constants/chains';

export const chainsArray: Chain[] = [
  {
    tokenName: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    isactive: 1,
    chainName: 'Ethereum',
    rpcUrl:
      'https://restless-wandering-paper.quiknode.pro/fb4c4ed77bcf896cb65e2f7dd33a6d2f5e41c5cd/',
    rpcUrlname: 'ethereum',
    isEvm: 1,
    orderno: 3,
    type: 'chain',
    tokenAddress: 0,
    tokenImage:
      'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    chainId: 1,
  },

  {
    tokenName: 'Tether USD',
    symbol: 'USDT',
    decimals: 6,
    chainName: 'Ethereum',
    rpcUrl:
      'https://restless-wandering-paper.quiknode.pro/fb4c4ed77bcf896cb65e2f7dd33a6d2f5e41c5cd/',
    rpcUrlname: 'tether',
    isEvm: 1,
    orderno: 9,
    isactive: 1,
    type: 'token',
    tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    tokenImage:
      'https://assets.coingecko.com/coins/images/325/small/Tether.png?1668148663',
    chainId: 1,
  },
];

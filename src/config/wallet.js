// src/config/wallet.js
import { createConfig, http } from '@wagmi/core'
import { mainnet, bsc, polygon } from '@wagmi/core/chains'
import { metaMask, walletConnect, coinbaseWallet, injected } from '@wagmi/connectors'

const projectId = 'c26277adc54648ced95891f69c02079b' // 去 https://cloud.walletconnect.com 获取

export const wagmiConfig = createConfig({
  autoConnect: true, // ✅ 进入页面自动连接
//   chains: [mainnet, bsc, polygon],
  chains: [mainnet, bsc],
  transports: {
    [mainnet.id]: http(),
    [bsc.id]: http(),
    // [polygon.id]: http(),
  },
  connectors: [
    metaMask(),
    coinbaseWallet({ appName: 'SuperFund' }),
    walletConnect({ projectId }),
     injected({ name: 'Binance Wallet' }),
    injected({ name: 'OKX Wallet' }),
    injected({ name: 'Bybit Wallet' }),
    injected({ name: 'Gate Wallet' }),
    injected({ name: 'KuCoin Wallet' }),
    injected({ name: 'Huobi Wallet' }),
    injected({ name: 'MEXC Wallet' }),
  ],
})
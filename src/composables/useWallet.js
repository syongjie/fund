// src/composables/useWallet.js
import { ref } from 'vue'
import { ethers } from 'ethers'

const walletList = [
  { name: 'MetaMask',       key: 'ethereum' },
  { name: 'Binance Web3',   key: 'binanceChain' },
  { name: 'OKX Wallet',     key: 'okxwallet' },
  { name: 'Bybit Wallet',   key: 'bybitWallet' },
  { name: 'TokenPocket',    key: 'tokenpocket' },
  { name: 'KuCoin Wallet',  key: 'kucoin' },
  { name: 'Coinbase Wallet',key: 'coinbaseWalletExtension' },
  { name: 'Huobi Wallet',   key: 'huobiWallet' },
  { name: 'Gate.io Wallet', key: 'gatewallet' },
  { name: 'Unisat',         key: 'unisat', btc: true }
]

export async function connectWallet() {
  const found = walletList.find(w => window[w.key])
  if (!found) throw new Error('未检测到任何支持的钱包')

  if (found.btc) {
    const accounts = await window.unisat.requestAccounts()
    return { address: accounts[0], chainId: null, walletName: found.name, provider: null }
  }

  const p = new ethers.providers.Web3Provider(window[found.key])
  await p.send('eth_requestAccounts', [])
  const signer = p.getSigner()
  return {
    address : await signer.getAddress(),
    chainId : (await p.getNetwork()).chainId,
    walletName: found.name,
    provider: p
  }
}
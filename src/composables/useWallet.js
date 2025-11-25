// src/composables/useWallet.js
import { ref } from 'vue'
import Web3 from 'web3'

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

// 获取所有已安装的钱包
export function getInstalledWallets() {
  return walletList.filter(wallet => window[wallet.key])
}

// 根据钱包key连接指定钱包
export async function connectWallet(walletKey) {
  // 如果没有指定钱包key，则返回第一个找到的钱包（保持原有行为的兼容性）
  if (!walletKey) {
    const found = walletList.find(w => window[w.key])
    if (!found) throw new Error('未检测到任何支持的钱包')
    return connectWalletByKey(found.key)
  }
  
  return connectWalletByKey(walletKey)
}

// 内部函数：根据钱包key连接钱包
async function connectWalletByKey(walletKey) {
  const found = walletList.find(w => w.key === walletKey)
  if (!found || !window[found.key]) {
    throw new Error('未检测到指定的钱包')
  }

  if (found.btc) {
    const accounts = await window.unisat.requestAccounts()
    return { address: accounts[0], chainId: null, walletName: found.name, provider: null }
  }

  // 创建Web3实例
  const web3 = new Web3(window[found.key])
  
  // 请求账户连接
  try {
    const accounts = await web3.eth.requestAccounts()
    if (!accounts || accounts.length === 0) {
      throw new Error('未获取到账户')
    }
    
    // 获取链ID
    const chainId = await web3.eth.getChainId()
    
    return {
      address: accounts[0],
      chainId: chainId,
      walletName: found.name,
      provider: web3 // 返回web3实例作为provider
    }
  } catch (error) {
    console.error('连接钱包失败:', error)
    throw error
  }
}
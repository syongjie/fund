// src/stores/wallet.js
import { defineStore } from 'pinia'
import { connectWallet } from '@/composables/useWallet'

export const useWalletStore = defineStore('wallet', {
  state: () => ({
    address: '',
    chainId: null,
    walletName: '',
    isLogin: false
  }),

  persist: {          // pinia-plugin-persistedstate
    key: 'wallet',
    paths: ['address', 'chainId', 'walletName', 'isLogin']
  },

  actions: {
    async login() {
      const { address, chainId, walletName } = await connectWallet()
      this.address = address
      this.chainId = chainId
      this.walletName = walletName
      this.isLogin = true
    },

    logout() {
      this.$reset()
    }
  }
})
<template>
  <header class="header">
    <div class="logo">
        <img class="logo-icon" src="@/assets/私募页面_slices/Frame2121453994@3x.png" alt="">
      <span class="logo-text">Intelligent Chain Nebula</span>
    </div>
    <div class="nav-actions">
      <div class="wallet-selector-wrapper">
        <button class="nav-button" aria-label="连接钱包" @click="showWalletSelector">
          <img v-if="!connectedWallet" src="@/assets/私募页面_slices/Frame2121453977@3x.png" alt="连接钱包">
          <span v-else>{{ walletAddress }}</span>
          <!-- {{ connectedWallet ? walletAddress : '连接' }} -->
        </button>
        <div 
          class="wallet-selector" 
          v-show="showWalletDropdown"
          @click.stop
        >
          <button 
            v-for="wallet in installedWallets" 
            :key="wallet.key"
            class="wallet-option"
            @click="selectAndConnectWallet(wallet.key)"
          >
            {{ wallet.name }}
          </button>
          <div v-if="installedWallets.length === 0" class="no-wallet-message">
            未检测到任何支持的钱包
          </div>
        </div>
      </div>
      <div class="language-selector-wrapper">
        <button 
          class="nav-button" 
          aria-label="全局" 
          @click="toggleLanguageSelector"
          ref="languageButton"
        >
          <img src="@/assets/私募页面_slices/Frame2121453976@3x.png" alt="">
        </button>
        <div 
          class="language-selector" 
          v-show="showLanguageSelector"
          @click.stop
        >
          <button 
            v-for="lang in languages" 
            :key="lang.code"
            class="language-option"
            :class="{ active: currentLanguage === lang.code }"
            @click="changeLanguage(lang.code)"
          >
            {{ lang.name }}
          </button>
        </div>
      </div>
      <button class="nav-button" aria-label="菜单">
        <img src="@/assets/私募页面_slices/Frame2121453975@3x.png" alt="">
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { connectWallet, getInstalledWallets } from '@/composables/useWallet.js'

const { locale } = useI18n()
const showLanguageSelector = ref(false)
const languageButton = ref(null)
const connectedWallet = ref(false)
const walletAddress = ref('')
const showWalletDropdown = ref(false)
const installedWallets = ref([])

// 支持的语言列表
const languages = [
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'English' },
  { code: 'zh-TW', name: '繁體中文' }
]

// 当前语言
const currentLanguage = computed(() => locale.value)

// 切换语言选择框显示/隐藏
const toggleLanguageSelector = () => {
  showLanguageSelector.value = !showLanguageSelector.value
  // 关闭钱包选择框
  showWalletDropdown.value = false
}

// 切换语言
const changeLanguage = (langCode) => {
  locale.value = langCode
  localStorage.setItem('longe-vity-locale', langCode)
  showLanguageSelector.value = false
}

// 显示钱包选择框
const showWalletSelector = () => {
  // 获取已安装的钱包列表，只显示支持BSC链的钱包
  installedWallets.value = getInstalledWallets({ chain: 'bsc' })
  // 切换钱包选择框显示状态
  showWalletDropdown.value = !showWalletDropdown.value
  // 关闭语言选择框
  showLanguageSelector.value = false
}

// 选择并连接指定钱包
const selectAndConnectWallet = async (walletKey) => {
  try {
    showWalletDropdown.value = false
    const result = await connectWallet(walletKey)
    connectedWallet.value = true
    // 显示钱包地址的前6位和后4位
    walletAddress.value = result.address.slice(0, 1) + '...' + result.address.slice(-2)
    console.log('钱包连接成功:', result)
  } catch (error) {
    console.error('钱包连接失败:', error)
    alert('钱包连接失败: ' + error.message)
  }
}

// 点击外部关闭下拉框
const handleClickOutside = (event) => {
  // 关闭语言选择框
  if (languageButton.value && !languageButton.value.contains(event.target) &&
      !event.target.closest('.language-selector')) {
    showLanguageSelector.value = false
  }
  
  // 关闭钱包选择框
  if (!event.target.closest('.wallet-selector-wrapper')) {
    showWalletDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #1a1a1a;
  border-bottom: 1px solid #2a2a2a;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  position: relative;
}

.logo-text {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  font-family: 'Arial', sans-serif;
}

.nav-actions {
  display: flex;
  gap: 15px;
  align-items: center;
}
.nav-actions img {
    width: 35px;
}

.nav-button {
  min-width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid #3a3a3a;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  gap: 8px;
  padding: 0 10px;
  color: #fff;
  font-size: 14px;
}

.nav-button:hover {
  background: #2a2a2a;
  border-color: #4a4a4a;
}

.icon {
  width: 18px;
  height: 18px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.file-icon {
  background-color: #666;
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'%3E%3C/path%3E%3Cpolyline points='14 2 14 8 20 8'%3E%3C/polyline%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'%3E%3C/path%3E%3Cpolyline points='14 2 14 8 20 8'%3E%3C/polyline%3E%3C/svg%3E");
}

.globe-icon {
  background-color: #666;
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='2' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='2' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'%3E%3C/path%3E%3C/svg%3E");
}

.menu-icon {
  background-color: #666;
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='3' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='21' y2='18'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='3' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='21' y2='18'%3E%3C/line%3E%3C/svg%3E");
}

.nav-button:hover .icon {
  background-color: #999;
}

/* 语言和钱包选择器样式 */
.language-selector-wrapper,
.wallet-selector-wrapper {
  position: relative;
}

.language-selector,
.wallet-selector {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 1000;
  min-width: 120px;
}

.language-option,
.wallet-option {
  display: block;
  width: 100%;
  padding: 10px 15px;
  background: transparent;
  border: none;
  color: #fff;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
}

.language-option:hover,
.wallet-option:hover {
  background: #3a3a3a;
}

.language-option.active {
  background: #4a4a4a;
  color: #FFAD35;
  font-weight: 500;
}

.no-wallet-message {
  padding: 16px;
  color: #999;
  text-align: center;
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header {
    padding: 12px 15px;
  }
  
  .logo-text {
    font-size: 14px;
  }
  
  .nav-button {
    width: 36px;
    height: 36px;
  }
  
  .nav-actions {
    gap: 10px;
  }
  
  .language-selector {
    min-width: 100px;
  }
  
  .language-option {
    padding: 8px 12px;
    font-size: 13px;
  }
}

/* 添加箭头指示当前是展开状态 */
.nav-button[aria-expanded="true"] {
  background: #2a2a2a;
  border-color: #4a4a4a;
}
</style>
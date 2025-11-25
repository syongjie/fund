<template>
  <div class="page">
    <!-- 顶部导航 -->
    <NavigationBar />

    <!-- 英雄区域 -->
    <section class="hero">
      <div class="hero-content">
        <div
          style="margin: 0 auto; width: 160px; height: 50px; text-align: center; line-height: 50px; border-radius: 25px; background-color: #212121;">
          <span style="color: #FFAD35;">Powered by AI</span>
        </div>
        <h1 class="hero-title">{{ t('showPage.hero.title') }}</h1>
        <p class="hero-subtitle">{{ t('showPage.hero.subtitle') }}</p>
        <button class="hero-btn primary">{{ t('showPage.hero.joinNow') }}</button>
      </div>
    </section>
    <video style="margin-top: -30px; width: 100%; height: 250px;" class="hero-video" autoplay loop muted playsinline>\n
      <source src="@/assets/video/3DAnimation07.mp4" type="video/mp4">\n <!-- 备用视频格式 -->\n
      <source src="@/assets/video/3DAnimation07.mp4" type="video/webm">\n {{ t('showPage.video.notSupported') }}\n
    </video>

    <!-- 为什么选择我们 -->
    <section id="advantages" class="section advantages">
      <h2 class="section-title">{{ t('showPage.advantages.title') }}</h2>
      <div style="text-align: center; color: #B3B3B3; margin-bottom: 20px;">
        <span>{{ t('showPage.advantages.description') }}</span>
      </div>
      <div class="advantages-scroll-container" ref="carouselContainer">
        <div class="advantages-slider" ref="carouselSlider">
          <div class="advantage-card advantage-card1">
            <h3>{{ t('showPage.advantages.card1.title') }}</h3>
            <p>{{ t('showPage.advantages.card1.description') }}</p>
          </div>
          <div class="advantage-card advantage-card2">
            <h3>{{ t('showPage.advantages.card2.title') }}</h3>
            <p>{{ t('showPage.advantages.card2.description') }}</p>
          </div>
          <div class="advantage-card advantage-card3">
            <h3>{{ t('showPage.advantages.card3.title') }}</h3>
            <p>{{ t('showPage.advantages.card3.description') }}</p>
          </div>
          <div class="advantage-card advantage-card4">
            <h3>{{ t('showPage.advantages.card4.title') }}</h3>
            <p>{{ t('showPage.advantages.card4.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能介绍 -->
    <div class="hero-content">
      <h1 class="hero-title">{{ t('showPage.architecture.title') }}</h1>
      <p class="hero-subtitle">{{ t('showPage.architecture.subtitle') }}</p>
    </div>
    <section id="features" class="section features">
      <div class="feature-item">
        <div class="feature-image">
          <img src="@/assets/私募页面_slices/icon@3x.png" alt="市场分析" />
        </div>
        <div class="feature-content">
          <h2>{{ t('showPage.features.trading.title') }}</h2>
          <p>{{ t('showPage.features.trading.description') }}</p>
        </div>
        <div style="position: relative; top: -8px;">
          <img style="width: 30px;" src="@/assets/私募页面_slices/Icon@2xa.png" alt="">
        </div>
      </div>
    </section>
    <!-- 放大版视频 -->
    <video style="margin-bottom: 20px; width: 100%; height: 300px; object-fit: cover;" class="hero-video" autoplay loop
      muted playsinline>
      <source src="@/assets/video/3DAnimation09.mp4" type="video/mp4">
      <!-- 备用视频格式 -->
      <source src="@/assets/video/3DAnimation09.mp4" type="video/webm">
      {{ t('showPage.video.notSupported') }}
    </video>
    <div style="width: 85%; margin: 20px auto  ; border-top: 0.3px solid #514949;"></div>
    <section id="features" class="section features">
      <div class="feature-item">
        <div class="feature-image">
          <img src="@/assets/私募页面_slices/icon@3x.png" alt="市场分析" />
        </div>
        <div class="feature-content">
          <h2>{{ t('showPage.features.dex.title') }}</h2>
          <p>{{ t('showPage.features.dex.description') }}</p>
        </div>
        <div style="position: relative; top: -8px;">
          <img style="width: 30px;" src="@/assets/私募页面_slices/Icon@2xa.png" alt="">
        </div>
      </div>
    </section>
    <video style="margin-bottom: 20px; width: 100%; height: 250px;" class="hero-video" autoplay loop muted
      playsinline>\n
      <source src="@/assets/video/3DAnimation02.mp4" type="video/mp4">\n <!-- 备用视频格式 -->\n
      <source src="@/assets/video/3DAnimation02.mp4" type="video/webm">\n {{ t('showPage.video.notSupported') }}\n
    </video>
    <div style="width: 85%; margin: 20px auto  ; border-top: 0.1px solid #2f2c2c;"></div>
    <section id="features" class="section features">
      <div class="feature-item">
        <div class="feature-image">
          <img src="@/assets/私募页面_slices/icon@3x.png" alt="市场分析" />
        </div>
        <div class="feature-content">
          <h2>{{ t('showPage.features.blockchain.title') }}</h2>
          <p>{{ t('showPage.features.blockchain.description') }}</p>
        </div>
        <div style="position: relative; top: -8px;">
          <img style="width: 30px;" src="@/assets/私募页面_slices/Icon@2xa.png" alt="">
        </div>
      </div>
    </section>
    <video style=" margin-bottom: 20px; width: 100%; height: 250px;" class="hero-video" autoplay loop muted
      playsinline>\n
      <source src="@/assets/video/3DAnimation03.mp4" type="video/mp4">\n <!-- 备用视频格式 -->\n
      <source src="@/assets/video/3DAnimation03.mp4" type="video/webm">
      {{ t('showPage.video.notSupported') }}\n
    </video>

    <!-- 认购区 -->
    <section class="section tech-highlights" style="padding: 0px; z-index: 2;">
      <h2 class="section-title">{{ t('showPage.investment.title') }}</h2>
      <p style="color: #B3B3B3; text-align: center; margin-bottom: 20px; padding: 0 20px;">{{ t('showPage.investment.description') }}</p>
      <div class="modes">
        <div class="mode-card">
            <div class="mode-header">
              <h3>{{ t('showPage.investment.modes.sky.title') }}</h3>
            </div>
            <div class="mode-details">
              <p>{{ t('showPage.investment.modes.sky.description1') }} 57  {{ t('showPage.investment.modes.sky.description') }}</p>
            </div>
          <div style="display: flex; gap: 20px; margin: 20px 0;">
            <div style="flex: 1; background-color: #1A1A1A; padding: 15px; border-radius: 10px; text-align: center;">
              <div style="color: #B3B3B3; font-size: 14px; margin-bottom: 10px;">{{ t('showPage.investment.modes.subscribed') }}</div>
              <div style="color: white; font-size: 24px; font-weight: bold;">12</div>
            </div>
            <div style="flex: 1; background-color: #1A1A1A; padding: 15px; border-radius: 10px; text-align: center;">
              <div style="color: #B3B3B3; font-size: 14px; margin-bottom: 10px;">{{ t('showPage.investment.modes.remaining') }}</div>
              <div style="color: #FFAD35; font-size: 24px; font-weight: bold;">45</div>
            </div>
          </div>
          <div
            style="height: 8px; background-color: #1A1A1A; border-radius: 4px; position: relative; margin-bottom: 20px;">
            <div :style="{ height: '100%', width: calculatePercentage('sky') + '%', backgroundColor: '#FFAD35', borderRadius: '4px' }"></div>
            <div style="position: absolute; right: 0; top: -20px; color: #B3B3B3; font-size: 14px;">{{ calculatePercentage('sky') }}%</div>
          </div>
          <div
            style="background-color: #1A1A1A; border: 1px solid #2f2c2c; padding: 10px; border-radius: 10px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="color: white; font-size: 20px; font-weight: bold;">10000</div>
              <div style="color: #B3B3B3; font-size: 16px;">USDT</div>
            </div>
          </div>
          <button
            style="width: 100%; padding: 15px; background-color: #FFAD35; color: black; border: none; border-radius: 10px; font-size: 18px; font-weight: bold; cursor: pointer;"
            @click="sendTransaction('sky')">{{ t('showPage.investment.modes.buyNow') }}</button>
        </div>
        <div class="mode-card">
            <div class="mode-header">
              <h3>{{ t('showPage.investment.modes.star.title') }}</h3>
            </div>
            <div class="mode-details">
              <p>{{ t('showPage.investment.modes.star.description1') }}171{{ t('showPage.investment.modes.star.description') }}</p>
            </div>
          <div style="display: flex; gap: 20px; margin: 20px 0;">
            <div style="flex: 1; background-color: #1A1A1A; padding: 15px; border-radius: 10px; text-align: center;">
              <div style="color: #B3B3B3; font-size: 14px; margin-bottom: 10px;">{{ t('showPage.investment.modes.subscribed') }}</div>
              <div style="color: white; font-size: 24px; font-weight: bold;">71</div>
            </div>
            <div style="flex: 1; background-color: #1A1A1A; padding: 15px; border-radius: 10px; text-align: center;">
              <div style="color: #B3B3B3; font-size: 14px; margin-bottom: 10px;">{{ t('showPage.investment.modes.remaining') }}</div>
              <div style="color: #FFAD35; font-size: 24px; font-weight: bold;">100</div>
            </div>
          </div>
          <div
            style="height: 8px; background-color: #1A1A1A; border-radius: 4px; position: relative; margin-bottom: 20px;">
            <div :style="{ height: '100%', width: calculatePercentage('star') + '%', backgroundColor: '#FFAD35', borderRadius: '4px' }"></div>
            <div style="position: absolute; right: 0; top: -20px; color: #B3B3B3; font-size: 14px;">{{ calculatePercentage('star') }}%</div>
          </div>
          <div
            style="background-color: #1A1A1A; border: 1px solid #2f2c2c; padding: 10px; border-radius: 10px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="color: white; font-size: 20px; font-weight: bold;">5000</div>
              <div style="color: #B3B3B3; font-size: 16px;">USDT</div>
            </div>
          </div>
          <button
            style="width: 100%; padding: 15px; background-color: #FFAD35; color: black; border: none; border-radius: 10px; font-size: 18px; font-weight: bold; cursor: pointer;"
            @click="sendTransaction('star')">{{ t('showPage.investment.modes.buyNow') }}</button>
        </div>
        <div class="mode-card">
            <div class="mode-header">
              <h3>{{ t('showPage.investment.modes.nebulus.title') }}</h3>
            </div>
            <div class="mode-details">
              <p>{{ t('showPage.investment.modes.nebulus.description1') }}513{{ t('showPage.investment.modes.nebulus.description') }}</p>
            </div>
          <div style="display: flex; gap: 20px; margin: 20px 0;">
            <div style="flex: 1; background-color: #1A1A1A; padding: 15px; border-radius: 10px; text-align: center;">
              <div style="color: #B3B3B3; font-size: 14px; margin-bottom: 10px;">已认购</div>
              <div style="color: white; font-size: 24px; font-weight: bold;">113</div>
            </div>
            <div style="flex: 1; background-color: #1A1A1A; padding: 15px; border-radius: 10px; text-align: center;">
              <div style="color: #B3B3B3; font-size: 14px; margin-bottom: 10px;">剩余席位</div>
              <div style="color: #FFAD35; font-size: 24px; font-weight: bold;">400</div>
            </div>
          </div>
          <div
            style="height: 8px; background-color: #1A1A1A; border-radius: 4px; position: relative; margin-bottom: 20px;">
            <div :style="{ height: '100%', width: calculatePercentage('nebulus') + '%', backgroundColor: '#FFAD35', borderRadius: '4px' }"></div>
            <div style="position: absolute; right: 0; top: -20px; color: #B3B3B3; font-size: 14px;">{{ calculatePercentage('nebulus') }}%</div>
          </div>
          <div
            style="background-color: #1A1A1A; border: 1px solid #2f2c2c; padding: 10px; border-radius: 10px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="color: white; font-size: 20px; font-weight: bold;">1000</div>
              <div style="color: #B3B3B3; font-size: 16px;">USDT</div>
            </div>
          </div>
          <button
              style="width: 100%; padding: 15px; background-color: #FFAD35; color: black; border: none; border-radius: 10px; font-size: 18px; font-weight: bold; cursor: pointer;"
              @click="sendTransaction('nebulus')">立即抢购</button>
        </div>
        <div class="mode-card">
            <div class="mode-header">
              <h3>{{ t('showPage.investment.modes.stellar.title') }}</h3>
            </div>
            <div class="mode-details">
              <p>{{ t('showPage.investment.modes.stellar.description1') }}1539{{ t('showPage.investment.modes.stellar.description') }}</p>
            </div>
          <div style="display: flex; gap: 20px; margin: 20px 0;">
            <div style="flex: 1; background-color: #1A1A1A; padding: 15px; border-radius: 10px; text-align: center;">
              <div style="color: #B3B3B3; font-size: 14px; margin-bottom: 10px;">已认购</div>
              <div style="color: white; font-size: 24px; font-weight: bold;">539</div>
            </div>
            <div style="flex: 1; background-color: #1A1A1A; padding: 15px; border-radius: 10px; text-align: center;">
              <div style="color: #B3B3B3; font-size: 14px; margin-bottom: 10px;">剩余席位</div>
              <div style="color: #FFAD35; font-size: 24px; font-weight: bold;">1000</div>
            </div>
          </div>
          <div
            style="height: 8px; background-color: #1A1A1A; border-radius: 4px; position: relative; margin-bottom: 20px;">
            <div :style="{ height: '100%', width: calculatePercentage('stellar') + '%', backgroundColor: '#FFAD35', borderRadius: '4px' }"></div>
            <div style="position: absolute; right: 0; top: -20px; color: #B3B3B3; font-size: 14px;">{{ calculatePercentage('stellar') }}%</div>
          </div>
          <div
            style="background-color: #1A1A1A; border: 1px solid #2f2c2c; padding: 10px; border-radius: 10px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="color: white; font-size: 20px; font-weight: bold;">500</div>
              <div style="color: #B3B3B3; font-size: 16px;">USDT</div>
            </div>
          </div>
          <button
            style="width: 100%; padding: 15px; background-color: #FFAD35; color: black; border: none; border-radius: 10px; font-size: 18px; font-weight: bold; cursor: pointer;"
            @click="sendTransaction('stellar')">立即抢购</button>
        </div>
        <div class="mode-card">
            <div class="mode-header">
              <h3>{{ t('showPage.investment.modes.dawn.title') }}</h3>
            </div>
            <div class="mode-details">
              <p>{{ t('showPage.investment.modes.dawn.description1') }}7720{{ t('showPage.investment.modes.dawn.description') }}</p>
            </div>
          <div style="display: flex; gap: 20px; margin: 20px 0;">
            <div style="flex: 1; background-color: #1A1A1A; padding: 15px; border-radius: 10px; text-align: center;">
              <div style="color: #B3B3B3; font-size: 14px; margin-bottom: 10px;">已认购</div>
              <div style="color: white; font-size: 24px; font-weight: bold;">720</div>
            </div>
            <div style="flex: 1; background-color: #1A1A1A; padding: 15px; border-radius: 10px; text-align: center;">
              <div style="color: #B3B3B3; font-size: 14px; margin-bottom: 10px;">剩余席位</div>
              <div style="color: #FFAD35; font-size: 24px; font-weight: bold;">7000</div>
            </div>
          </div>
          <div
            style="height: 8px; background-color: #1A1A1A; border-radius: 4px; position: relative; margin-bottom: 20px;">
            <div :style="{ height: '100%', width: calculatePercentage('dawn') + '%', backgroundColor: '#FFAD35', borderRadius: '4px' }"></div>
            <div style="position: absolute; right: 0; top: -20px; color: #B3B3B3; font-size: 14px;">{{ calculatePercentage('dawn') }}%</div>
          </div>
          <div
            style="background-color: #1A1A1A; border: 1px solid #2f2c2c; padding: 10px; border-radius: 10px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="color: white; font-size: 20px; font-weight: bold;">100</div>
              <div style="color: #B3B3B3; font-size: 16px;">USDT</div>
            </div>
          </div>
          <button
            style="width: 100%; padding: 15px; background-color: #FFAD35; color: black; border: none; border-radius: 10px; font-size: 18px; font-weight: bold; cursor: pointer;"
            @click="sendTransaction('dawn')">立即抢购</button>
        </div>
      </div>
    </section>
    <video style="margin-top: -110px; margin-bottom: 20px; width: 100%; height: 250px;" class="hero-video" autoplay loop
      muted playsinline>\n
      <source src="@/assets/video/3DAnimation06.mp4" type="video/mp4">\n <!-- 备用视频格式 -->\n
      <source src="@/assets/video/3DAnimation06.mp4" type="video/webm">
      {{ t('showPage.video.notSupported') }}\n
    </video>

    <!-- 加入社区 -->
    <section class="section community">
      <div class="community-bg" style="position: relative;">
        <div style="position: absolute; left: 50%; transform: translate(-50%, 30%); z-index: 2;">
            <h2 style="margin-bottom: 10px;">{{ t('showPage.community.title') }}</h2>
            <p style="color: #B3B3B3;">{{ t('showPage.community.description') }}</p>
        </div>
        <div class="community-content">
          <div style="">
              <video style="margin-top: -60px; margin-bottom: 20px; width: 100%; height: 780px; object-fit: cover;" class="hero-video"
                autoplay loop muted playsinline>
                <source src="@/assets/video/3DAnimation12.mp4" type="video/mp4">
                <!-- 备用视频格式 -->
                <source src="@/assets/video/3DAnimation12.mp4" type="video/webm">
                {{ t('showPage.video.notSupported') }}
              </video>
              <div style="position: absolute; top: 160px; left: 40px; width: 280px; background-color: rgba(17,17,17,0.82); backdrop-filter: blur(4px); padding: 15px; border: 1px solid rgba(255,255,255,0.15); border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
                <p style="margin-bottom: 5px; color: #FFFFFF;">Drew Feig</p>
                <div style="text-align: left;">
                  <span style="font-size: 12px;">{{ t('showPage.testimonials.drewFeig') }}</span>
                </div>
              </div>
              <div style="position: absolute; top: 400px; left: 10px; background-color: rgba(17,17,17,0.82); backdrop-filter: blur(4px); width: 300px; background-color: #111111; padding: 15px; border: 1px solid #2f2c2c; border-radius: 15px;">
                <p style="margin-bottom: 5px; color: #FFFFFF;">Fernando Torres</p>
                <div style="text-align: left;">
                  <span style="font-size: 12px;">{{ t('showPage.testimonials.fernandoTorres') }}</span>
                </div>
              </div>
            </div>
          <div class="community-actions">
            <button class="community-btn">{{ t('showPage.community.joinNow') }}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo" >
          <div style="display: flex; align-items: center; margin-bottom: 15PX;">
            <img style="margin-top: -8PX; width: 35px; margin-right: 8PX;" src="@/assets/私募页面_slices/Frame2121453994@3x.png" alt="">
            <span class="logo-text">{{ t('showPage.footer.company') }}</span>
          </div>
          <p>{{ t('showPage.footer.tagline') }}</p>
        </div>
        <div class="footer-links">
          <a href="https://www.youtube.com"><img style="width: 30px;" src="@/assets/私募页面_slices/SocialIcons@3x.png" alt=""></a>
          <a href="https://discord.com"><img style="width: 30px;" src="@/assets/私募页面_slices/Frame@3x.png" alt=""></a>
          <a href="https://telegram.org"><img style="width: 30px;" src="@/assets/私募页面_slices/Frame@3x(1).png" alt=""></a>
          <a href="https://twitter.com"><img style="width: 30px;" src="@/assets/私募页面_slices/SocialIcons@3x(1).png" alt=""></a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{{ t('showPage.footer.copyright') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
/* 导入导航组件 */
import NavigationBar from '@/components/NavigationBar.vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { connectWallet, getInstalledWallets } from '@/composables/useWallet.js';
import { web3 } from '@/config/web3.js';

// 页面加载时检查是否有可用钱包
onMounted(async () => {
  console.log('页面加载，检查可用钱包');
  try {
    const wallets = getInstalledWallets();
    console.log('可用钱包列表:', wallets);
  } catch (error) {
    console.error('检查钱包失败:', error);
  }
});

// 初始化i18n
const { t } = useI18n();

// 使用从配置文件导入的web3实例

// 投资模式数据
const investmentModes = ref({
  sky: {
    limit: 57,
    subscribed: 12,
    amount: 10000, // 金额（USDT）
    contractAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E' // PancakeSwap Router地址作为示例
  },
  star: {
    limit: 171,
    subscribed: 71,
    amount: 5000, // 金额（USDT）
    contractAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E'
  },
  nebulus: {
    limit: 513,
    subscribed: 113,
    amount: 1000, // 金额（USDT）
    contractAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E'
  },
  stellar: {
    limit: 1539,
    subscribed: 539,
    amount: 500, // 金额（USDT）
    contractAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E'
  },
  dawn: {
    limit: 7720,
    subscribed: 720,
    amount: 100, // 金额（USDT）
    contractAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E'
  }
});

// 当前连接的钱包信息
const walletInfo = ref(null);
// 当前使用的钱包key
const currentWalletKey = ref(null);

// BSC链ID
const BSC_CHAIN_ID = 56;

// 计算百分比的函数
const calculatePercentage = (mode) => {
  
  if (!investmentModes.value[mode] || investmentModes.value[mode].limit === 0) {
    return 0;
  }
  const { limit, subscribed } = investmentModes.value[mode];
  const percentage = (subscribed / limit) * 100;
  return Math.min(Math.round(percentage), 100); // 确保不超过100%
};

// 检查并连接钱包
const checkAndConnectWallet = async () => {
  try {
    console.log('开始检查并连接钱包');
    
    // 如果已经有连接的钱包，直接返回
    if (walletInfo.value) {
      console.log('已有连接的钱包，直接返回');
      return walletInfo.value;
    }
    
    // 检查是否有钱包可用
    let hasWallet = false;
    const walletKeys = ['ethereum', 'binanceChain', 'okxwallet', 'bybitWallet', 'tokenpocket'];
    for (const key of walletKeys) {
      if (window[key]) {
        hasWallet = true;
        console.log('检测到钱包:', key);
        break;
      }
    }
    
    if (!hasWallet) {
      console.error('未检测到任何钱包扩展');
      alert('请先安装MetaMask、Binance Chain Wallet等钱包扩展');
      return null;
    }
    
    // 连接钱包
    console.log('尝试连接钱包...');
    // 如果已有保存的钱包key，使用该key连接
    const wallet = currentWalletKey.value ? 
      await connectWallet(currentWalletKey.value) : 
      await connectWallet();
    console.log('钱包连接成功:', wallet);
    
    if (!wallet) {
      throw new Error('获取钱包信息失败');
    }
    
    // 检查是否在BSC链 - 使用web3实例获取链ID
    let currentChainId = wallet.chainId;
    console.log('当前链ID:', currentChainId, '期望链ID:', BSC_CHAIN_ID);
    
    if (currentChainId !== BSC_CHAIN_ID) {
      console.log('当前不在BSC链上，尝试切换...');
      // 尝试切换到BSC链
      try {
        // 使用window.ethereum发送链切换请求（直接使用底层provider）
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: web3.utils.toHex(BSC_CHAIN_ID) }] // 转换为十六进制
        });
        
        // 切换后等待一小段时间，然后重新获取chainId进行验证
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // 使用web3重新获取链ID
        currentChainId = await wallet.provider.eth.getChainId();
        console.log('切换后链ID:', currentChainId);
        
        if (currentChainId !== BSC_CHAIN_ID) {
          console.error('链切换失败：链ID未更新');
          alert('链切换失败，请手动切换到BSC链后重试');
          throw new Error('需要BSC链网络');
        }
        
        console.log('成功切换到BSC链');
      } catch (switchError) {
        console.error('切换链失败:', switchError);
        // 如果切换失败，提示用户
        alert('请手动切换到BSC链后重试');
        throw new Error('需要BSC链网络');
      }
    } else {
      console.log('已经在BSC链上');
    }
    
    // 保存钱包信息
    walletInfo.value = wallet;
    // 如果钱包对象中直接包含key，则保存
    if (wallet.key) {
      currentWalletKey.value = wallet.key;
      console.log('保存当前钱包key:', wallet.key);
    } else {
      console.log('钱包对象中未找到key属性:', wallet);
    }
    return wallet;
  } catch (error) {
    console.error('钱包连接失败:', error);
    alert('钱包连接失败: ' + error.message);
    return null;
  }
};

// 发起BSC链转账
const sendTransaction = async (mode) => {
  console.log('sendTransaction函数被调用！');
  console.log('点击按钮，mode:', mode);
  console.log('this:', this);
  console.log('typeof sendTransaction:', typeof sendTransaction);
  
  try {
    console.log('investmentModes:', investmentModes.value);
    const modeData = investmentModes.value[mode];
    if (!modeData) {
      console.error('无效的投资模式:', mode);
      alert('无效的投资模式');
      return;
    }
    
    console.log('准备检查并连接钱包');
    // 检查并连接钱包
    const wallet = await checkAndConnectWallet();
    
    if (!wallet) {
      console.error('钱包连接失败，未获取到wallet对象');
      alert('钱包连接失败，请重试');
      return;
    }
    
    // 再次验证网络，防止交易过程中网络被切换
    if (web3) {
      try {
        const currentChainId = await web3.eth.getChainId();
        console.log('交易前验证网络ID:', currentChainId);
        
        if (currentChainId !== BSC_CHAIN_ID) {
          console.error('交易前检测到网络不一致');
          alert('检测到网络已切换，请确保在BSC链上进行操作');
          return;
        }
      } catch (error) {
        console.error('获取链ID失败:', error);
        alert('网络验证失败，请刷新页面重试');
        return;
      }
    } else {
      console.error('web3实例未初始化');
      alert('Web3初始化失败，请刷新页面重试');
      return;
    }
    
    // 移除对wallet.provider的直接依赖，使用web3实例
    
    console.log('钱包连接成功，准备交易参数');
    // 使用从配置文件导入的web3实例，无需额外初始化
    
    // 准备交易参数
    const txParams = {
      to: modeData.contractAddress,
      value: web3.utils.toWei((modeData.amount / 1000000).toString(), 'ether'), // 转换为BNB单位
      gasLimit: web3.utils.toHex(21000), // 标准转账gas
      chainId: web3.utils.toHex(BSC_CHAIN_ID) // BSC链ID转换为十六进制
    };
    
    console.log('准备发送交易:', txParams);
    
    try {
      // 获取当前账户
      const accounts = await web3.eth.getAccounts();
      if (!accounts || accounts.length === 0) {
        console.error('没有可用账户');
        alert('请先连接钱包');
        return;
      }
      
      // 添加from字段
      txParams.from = accounts[0];
      
      // 发送交易
      const txHash = await web3.eth.sendTransaction(txParams);
      console.log('交易已提交，等待确认:', txHash.transactionHash);
      
      // 等待交易确认
      const txReceipt = await web3.eth.getTransactionReceipt(txHash.transactionHash);
      console.log('交易已确认:', txReceipt);
      
      alert('购买成功！交易哈希: ' + txHash.transactionHash);
      
      // 这里可以添加交易成功后的逻辑，比如更新订阅数量等
      investmentModes.value[mode].subscribed += 1;
    } catch (txError) {
      console.error('交易发送失败:', txError);
      if (txError.message && txError.message.includes('用户拒绝')) {
        console.log('用户拒绝了交易');
      } else {
        alert('交易失败: ' + (txError.message || '未知错误'));
      }
    }
    
  } catch (error) {
    console.error('整个流程失败:', error);
    if (error.message && !error.message.includes('用户拒绝')) {
      alert('操作失败: ' + error.message);
    }
  }
};

// 轮播相关引用
const carouselContainer = ref(null);
const carouselSlider = ref(null);
let autoScrollTimer = null;
const scrollInterval = 3000; // 自动滚动间隔，单位毫秒

// 自动轮播函数
const startAutoScroll = () => {
  if (carouselContainer.value && carouselSlider.value) {
    const cardWidth = 260; // 卡片宽度 + 间距
    const containerWidth = carouselContainer.value.clientWidth;
    const totalWidth = carouselSlider.value.scrollWidth;
    let currentPosition = 0;

    const scroll = () => {
      // 计算下一个位置
      currentPosition += cardWidth;

      // 如果到达末尾，回到开始位置
      if (currentPosition >= totalWidth - containerWidth + cardWidth) {
        currentPosition = 0;
      }

      // 平滑滚动
      carouselContainer.value.scrollTo({
        left: currentPosition,
        behavior: 'smooth'
      });
    };

    // 启动定时器
    autoScrollTimer = setInterval(scroll, scrollInterval);
  }
};

// 停止自动轮播
const stopAutoScroll = () => {
  if (autoScrollTimer) {
    clearInterval(autoScrollTimer);
    autoScrollTimer = null;
  }
};

// 鼠标悬停时停止轮播，离开时重新开始
const handleMouseEnter = () => {
  stopAutoScroll();
};

const handleMouseLeave = () => {
  startAutoScroll();
};

// 组件挂载后开始自动轮播
onMounted(() => {
  // 添加鼠标事件监听器
  if (carouselContainer.value) {
    carouselContainer.value.addEventListener('mouseenter', handleMouseEnter);
    carouselContainer.value.addEventListener('mouseleave', handleMouseLeave);
  }

  // 启动自动轮播
  startAutoScroll();
});

// 组件卸载时清理
onUnmounted(() => {
  stopAutoScroll();
  if (carouselContainer.value) {
    carouselContainer.value.removeEventListener('mouseenter', handleMouseEnter);
    carouselContainer.value.removeEventListener('mouseleave', handleMouseLeave);
  }
});
</script>

<style scoped>
/* 基础样式 */
.page {
  background: #000000;
  color: #fff;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
}

/* 英雄区域 */
.hero {
  position: relative;
  display: flex;
  align-items: center;
  padding: 150px 20px 0;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
}

.hero-title {
  font-weight: bold;
  color: #FFFFFF;
  margin: 20px 0px 0px;
  line-height: 60px;
}

.hero-subtitle {
  font-size: 16px;
  margin-bottom: 40px;
  color: #ccc;
  line-height: 1.6;
  padding: 0 20px;
}

.hero-btn {
  padding: 15px 30px;
  border: none;
  border-radius: 15px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 10px;
  transition: transform 0.3s;
}

.hero-btn.primary {
  background-color: #FFAD35;
  color: #000;
}

.hero-btn.secondary {
  background: transparent;
  color: #FFD700;
  border: 2px solid #FFD700;
}

.hero-btn:hover {
  transform: translateY(-3px);
}

/* 通用section样式 */
.section {
  padding: 10px 20px;
  position: relative;
}

.section-title {
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #FFFFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 为什么选择我们 */
.advantages-scroll-container {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  /* Firefox */
  padding: 20px 0;
  cursor: grab;
}

.advantages-scroll-container:active {
  cursor: grabbing;
}

.advantages-scroll-container::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Edge */
}

.advantages-slider {
  display: flex;
  gap: 20px;
  padding: 0 10px;
  min-width: max-content;
  max-width: 1200px;
  margin: 0 auto;
}

.advantage-card1 {
  height: 250px;
  width: 250px;
  padding: 25px;
  background-image: url('@/assets/Frame2121453995_slices/Card@3x.png');
  background-size: 100%;
  background-position: center;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.advantage-card2 {
  height: 250px;
  width: 250px;
  padding: 25px;
  background-image: url('@/assets/Frame2121453995_slices/Card@3x(1).png');
  background-size: 100%;
  background-position: center;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.advantage-card3 {
  height: 250px;
  width: 250px;
  padding: 25px;
  background-image: url('@/assets/Frame2121453995_slices/Card@3x(2).png');
  background-size: 100%;
  background-position: center;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.advantage-card4 {
  height: 250px;
  width: 250px;
  padding: 25px;
  background-image: url('@/assets/Frame2121453995_slices/Card@3x(3).png');
  background-size: 100%;
  background-position: center;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.advantage-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #000);
  border-radius: 15px;
}

.advantage-icon img {
  width: 65px;
  height: 65px;
}

.advantage-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #FFFFFF;
  margin-top: 130px;
  text-align: left;
}

.advantage-card p {
  font-size: 14px;
  color: #B3B3B3;
  line-height: 1.6;
  text-align: left;
}

/* 功能介绍 */
.feature-item {
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  max-width: 1200px;
}

.feature-item.reverse {
  flex-direction: row-reverse;
}

.feature-image {
  flex: 1.5;
}

.feature-image img {
  width: 60px;
  max-width: 500px;
}

.feature-content {
  flex: 5;
}

.feature-content h2 {
  font-size: 20px;
  margin-bottom: 8px;
  color: #FFFFFF;
}

.feature-content p {
  font-size: 14px;
  color: #B3B3B3;
  line-height: 1.8;
}

/* 技术亮点 */
.highlights-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.highlight {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s;
}

.highlight:hover {
  transform: translateY(-5px);
}

.highlight-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.highlight-icon img {
  width: 60px;
  height: 60px;
}

.highlight h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #FFD700;
}

.highlight p {
  font-size: 14px;
  color: #ccc;
}

/* 如何开始 */
.steps {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto 60px;
}

.step {
  flex: 1;
  text-align: center;
}

.step-number {
  font-size: 48px;
  font-weight: bold;
  color: #FFD700;
  margin-bottom: 20px;
  opacity: 0.5;
}

.step h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.step p {
  font-size: 16px;
  color: #ccc;
}

.start-btn {
  display: block;
  margin: 0 auto;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: #000;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s;
}

.start-btn:hover {
  transform: translateY(-3px);
}

/* 投资模式 */
.modes {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 10px 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.modes::-webkit-scrollbar {
  display: none;
}

.mode-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 20px;
  position: relative;
  transition: transform 0.3s;
  border: 1px solid #FFAD35;
  box-shadow: inset 0 0 50px rgba(255, 173, 53, 0.5);
  width: 280px;
  min-width: 280px;
  flex-shrink: 0;
}

.recommended-badge {
  position: absolute;
  top: -15px;
  right: 30px;
  background: #FFD700;
  color: #000;
  padding: 5px 20px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 14px;
}

.mode-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.mode-header h3 {
  font-size: 24px;
  color: #FFFFFF;
}

.risk-level {
  font-size: 14px;
  padding: 3px 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
}

.mode-details {
  margin-bottom: 30px;
}

.mode-details p {
  margin-bottom: 10px;
  color: #b3b3b3;
  font-size: 16px;
}

.select-btn {
  width: 100%;
  padding: 12px;
  border: 1px solid #FFD700;
  background: transparent;
  color: #FFD700;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.select-btn:hover {
  background: rgba(255, 215, 0, 0.1);
}

.select-btn.primary {
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: #000;
  border: none;
}

/* 加入社区 */
.community {
  padding: 0;
}

.community-bg {
  border-radius: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.community-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.community-content h2 {
  font-size: 34px;
  margin-bottom: 10px;
  color: #FFFFFF;
}

.community-content p {
  font-size: 18px;
  margin-bottom: 40px;
  color: #B3B3B3;
}

.community-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: -80px;
}

.community-btn {
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: #000;
  border: none;
  padding: 15px 40px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s;
}

.community-btn:hover {
  transform: translateY(-3px);
}

.social-link {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, transform 0.3s;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.social-link img {
  width: 24px;
  height: 24px;
}

/* 底部 */
.footer {
  background: rgba(0, 0, 0, 0.5);
  margin-top: 50px;
  border-top: 1px solid #1a1a1a;
  padding-top: 50px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.footer-logo .logo-text {
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
}

.footer-logo p {
  color: #B3B3B3;
  font-size: 14px;
}

.footer-links {
  display: flex;
  gap: 30px;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #FFD700;
}

.footer-bottom {
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #999;
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* 响应式设计 */
@media (max-width: 768px) {

  .hero-title {
    font-size: 34px;
  }

  .hero-btn {
    display: block;
    margin: 10px auto;
  }

  .feature-item,
  .feature-item.reverse {
    flex-direction: column;
  }

  .highlights-container,
  .steps,
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
}
</style>

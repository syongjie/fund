<template>
  <div class="page">
    <!-- 钱包状态条 -->
    <!-- <div class="wallet-bar">
      <template v-if="store.isLogin">
        <span class="green">
          {{ store.walletName }}：{{ shorten(store.address) }}
        </span>
        <button class="disconnect" @click="store.logout()">断开</button>
      </template>
<span v-else-if="error" class="red">{{ error }}</span>
<span v-else class="gray">正在检测钱包…</span>
</div> -->

    <!-- 以下结构与原来 100% 一致 -->
    <div style="background-color:white;display:flex;align-items:center;padding:15px 0 0 0;">
      <img style="margin-left:15px;" src="@/assets/imgs/back.png" alt="" />
      <img style="margin-left:15px;" src="@/assets/imgs/弹窗关闭.png" alt="" />
    </div>

    <div class="header">
      <div style="display:flex;align-items:center;">
        <img style="width:30px;height:30px;margin-right:10px;" src="@/assets/imgs/Frame6@2x.png" alt="" />
        <img style="width:180px;height:15px;" src="@/assets/imgs/Supersurprise.png" alt="" />
      </div>
      <div style="display:flex;align-items:center;">
        <img style="width:30px;height:30px;cursor:pointer;" @click="goAssetOverview"
          src="@/assets/imgs/Group1000000841.png" alt="" />
        <p class="address" @click="handleConnectToggle">{{ store.isLogin ? shorten(store.address) : '未连接' }}</p>
      </div>
    </div>

    <!-- 以下完全沿用你原来代码 -->
    <div style="padding:16px;">
      <div style="height:300px;margin-bottom:45px;">
        <div class="hero" style="display:flex;position:relative;">
          <img style="width:250px;height:150px;z-index:1;" src="@/assets/imgs/Frame1000007645.png" alt="" />
          <img style="width:25px;height:20px;position:absolute;right:25px;top:40px;"
            src="@/assets/imgs/AssetOverview/image12.png" alt="" />
        </div>
        <div class="hero" style="display:flex;position:relative;">
          <img style="width:15px;height:15px;position:absolute;left:50px;top:0px;"
            src="@/assets/imgs/AssetOverview/Ellipse1.png" alt="" />
          <img style="width:15px;height:15px;position:absolute;left:15px;top:40px;"
            src="@/assets/imgs/AssetOverview/Ellipse1.png" alt="" />
          <img style="width:25px;height:1px;position:absolute;left:18px;top:90px;" src="@/assets/imgs/Rectangle47.png"
            alt="" />
          <img style="z-index:1;width:130px;height:18px;position:absolute;left:15px;top:100px;"
            src="@/assets/imgs/Frame1000007587.png" alt="" />
          <img style="width:250px;height:250px;position:absolute;right:5px;top:-70px;" src="@/assets/imgs/image101.png"
            alt="" />
          <img style="width:10px;height:10px;position:absolute;left:15px;top:130px;"
            src="@/assets/imgs/AssetOverview/image12.png" alt="" />
          <img style="position:absolute;top:150px;left:20px;" src="@/assets/imgs/Rectangle48.png" alt="" />
        </div>
      </div>

      <!-- 倒计时 -->
      <div class="countdownbox">
        <div style="display:flex;align-items:center;justify-content:center;margin-bottom:10px;">
          <img style="width:16px;height:16px;" src="@/assets/imgs/image17.png" alt="" />
          <span style="margin:5px;">认购倒计时</span>
          <img style="width:16px;height:16px;" src="@/assets/imgs/image17.png" alt="" />
        </div>
        <div class="countdown">
          <div class="box"><span>{{ days }}</span><img src="@/assets/imgs/day.png" alt="" /></div>
          <div class="box"><span>{{ hours }}</span><img src="@/assets/imgs/H.png" alt="" /></div>
          <div class="box"><span>{{ minutes }}</span><img src="@/assets/imgs/M.png" alt="" /></div>
          <div class="box"><span>{{ seconds }}</span><img src="@/assets/imgs/S.png" alt="" /></div>
        </div>
      </div>

      <!-- 认购进度 -->
      <div class="progress">
        <div style="display:flex;justify-content:space-around;">
          <div style="text-align:center;">
            <p style="margin-bottom:15px;">发行规模</p>
            <img src="@/assets/imgs/XXX.png" alt="" />
            <h2 style="font-size: 30px; background: linear-gradient(to bottom right, #C753FC, #574BDD); -webkit-background-clip: text;-webkit-text-fill-color: transparent;">
              123456
            </h2>
          </div>
          <div style="text-align:center;">
            <p style="margin-bottom:15px;">已认购规模</p>
            <img src="@/assets/imgs/XXX.png" alt="" />
           <h2 style="font-size: 30px; background: linear-gradient(to bottom right, #C753FC, #574BDD); -webkit-background-clip: text;-webkit-text-fill-color: transparent;">
              123456
            </h2>
          </div>
        </div>
        <div style="display:flex;align-items:center;justify-content:center;">
          <div class="bar">
            <div class="fill" :style="{ width: '61%' }"></div>
          </div>
          <p>61%</p>
        </div>
      </div>

      <!-- 核心介绍 -->
      <div class="intro">
        <div style="display:flex;align-items:center;justify-content:center;margin:10px;">
          <img style="width:16px;height:16px;" src="@/assets/imgs/image17.png" alt="" />
          <span style="margin:5px 5px;">核心介绍</span>
          <img style="width:16px;height:16px;" src="@/assets/imgs/image17.png" alt="" />
        </div>
        <p style="line-height:32px;">
          在数字资产浪潮中，BTC 与 ETH 作为区块链生态的基石，始终占据核心地位。本平台聚焦优质加密资产包认购服务，通过专业团队筛选、配比 BTC 与 ETH
          资产组合，为用户提供低门槛、高透明的入场通道。无需繁琐操作，无需深度研究，一键认购即可分享主流加密货币的长期价值增长红利，让加密投资更简单、更高效。
        </p>
      </div>

      <!-- 资产包卡片 -->
      <div class="cards">
        <div class="card">
          <div>
            <img style="width:16px;height:16px;" src="@/assets/imgs/image17.png" alt="" />
            <span style="margin:5px 5px;">认购 BTC 资产包</span>
            <img style="width:16px;height:16px;" src="@/assets/imgs/image17.png" alt="" />
          </div>
          <div>
            <span style="font-size:32px;font-weight:bold;margin-right:5px;">2000</span>
            <span style="font-weight:bold;">USDT</span>
          </div>
          <div class="card-input-box">
            <input class="card-input" v-model="price" type="text" placeholder="2000 U起步" />
          </div>
          <div style="padding:0 25px;display:flex;justify-content:space-between;margin-top:15px;">
            <button style="width:70px;" @click="price = 2000">2000U</button>
            <button style="width:70px;" @click="price = 4000">4000U</button>
            <button style="width:70px;" @click="price = 8000">8000U</button>
            <button style="width:70px;" @click="price = 10000">10000U</button>
          </div>
          <button style="margin-top:15px;">认购</button>
        </div>
      </div>
      <!-- 11111 -->
      <!-- 资产包介绍 -->
      <div class="what-is">
        <div style="display:flex;align-items:center;justify-content:center;margin-bottom:10px;">
          <img style="width:16px;height:16px;" src="@/assets/imgs/image17.png" alt="" />
          <span style="margin:5px;">什么是「加密资产包」？</span>
          <img style="width:16px;height:16px;" src="@/assets/imgs/image17.png" alt="" />
        </div>
        <div>
          <strong style="display:flex;"><img style="position:relative;top:-5px;"
              src="@/assets/imgs/Frame10000076151.png" alt="" />BTC资产包：</strong>
          <div style="width:82%;font-size:14px;line-height:30px;color:#cccccc;margin:0 auto;">
            以比特币为核心，搭配少量流动性稳定的关联资产，适合追求长期价值存储的投资者。</div>
        </div>
        <div>
          <strong style="display:flex;margin-top:15px;"><img style="position:relative;top:-5px;"
              src="@/assets/imgs/Frame10000076151 (2).png" alt="" />ETH资产包：</strong>
          <div style="width:82%;font-size:14px;line-height:30px;color:#cccccc;margin:0 auto;">
            以以太坊为核心，侧重区块链应用生态潜力，适合关注智能合约、DeFi 等领域增长的投资者。</div>
        </div>
        <div>
          <strong style="display:flex;margin-top:15px;"><img style="position:relative;top:-5px;"
              src="@/assets/imgs/Frame10000076153.png" alt="" />资产包优势：</strong>
          <div style="width:82%;font-size:14px;line-height:30px;color:#cccccc;margin:0 auto;">
            分散单一资产波动风险、降低小额资金入场门槛、由专业团队动态调优配比，让个人投资者轻松享受机构级的资产配置服务。</div>
        </div>

        <!-- 认购流程 -->
        <div class="flow">
          <div style="display:flex;align-items:center;justify-content:center;margin:15px 0 10px 0;">
            <img style="width:16px;height:16px;" src="@/assets/imgs/image17.png" alt="" />
            <span style="margin:5px;">认购流程</span>
            <img style="width:16px;height:16px;" src="@/assets/imgs/image17.png" alt="" />
          </div>
          <div class="steps" style="text-align:center;">
            <img src="@/assets/imgs/Frame1000007641.png" alt="" />
          </div>
        </div>
      </div>

      <!-- 费率 -->
      <div class="fee">
        <div style="display:flex;align-items:center;justify-content:center;margin:15px 0 10px 0;">
          <img style="width:16px;height:16px;" src="@/assets/imgs/image17.png" alt="" />
          <span style="margin:5px;">基金管理费率规则</span>
          <img style="width:16px;height:16px;" src="@/assets/imgs/image17.png" alt="" />
        </div>
        <div style="text-align:center;">
          <p style="font-size:14px;line-height:30px;color:#cccccc;">认购金额最低1万，管理费率20%</p>
          <p style="font-size:14px;line-height:30px;color:#cccccc;">认购金额累计大于3万，管理费率13%</p>
          <p style="font-size:14px;line-height:30px;color:#cccccc;">认购金额累计大于7万，管理费率8%</p>
        </div>
      </div>

      <!-- 合作平台 -->
      <div class="partners">
        <div style="display:flex;align-items:center;justify-content:center;margin:15px 0 50px 0;padding-top:15px;">
          <img style="width:16px;height:16px;" src="@/assets/imgs/image17.png" alt="" />
          <span style="margin:5px;">投資機構</span>
          <img style="width:16px;height:16px;" src="@/assets/imgs/image17.png" alt="" />
        </div>
        <div class="logos">
          <div><img src="@/assets/imgs/Frame1000007616.png" alt="" /><img src="@/assets/imgs/Frame1000007615.png"
              alt="" />
          </div>
          <div><img src="@/assets/imgs/Frame3.png" alt="" /><img src="@/assets/imgs/Frame1000007613.png" alt="" /></div>
          <div><img src="@/assets/imgs/Frame7.png" alt="" /><img src="@/assets/imgs/Frame8.png" alt="" /></div>
          <div><img src="@/assets/imgs/Frame9.png" alt="" /><img src="@/assets/imgs/Frame10.png" alt="" /></div>
          <div><img src="@/assets/imgs/Frame1000007614.png" alt="" /><img src="@/assets/imgs/Frame62.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* ==============  钱包逻辑  ============== */
import { onMounted, ref } from 'vue'
import { useWalletStore } from '@/stores/wallet'
import { useRouter } from 'vue-router'
import { useCountdown } from '@/composables/useCountdown'


const targetTime = new Date('2025-12-01 00:00:00').getTime() // 换成你的
const { days, hours, minutes, seconds, isEnd } = useCountdown(targetTime)

const store = useWalletStore()
const router = useRouter()
const error = ref('')

/* 进入页面自动登录（store 已持久化） */
onMounted(async () => {
  console.log(store);
  
  if (!store.isLogin) {
    try { await store.login() }
    catch (e) { error.value = e.message || '连接失败' }
  }
})

/* 拉起 / 断开 切换 */
async function handleConnectToggle() {
  if (store.isLogin) {
    store.logout()          // 真实断开 + 清空缓存
  } else {
    try { await store.login() }  // 拉起钱包
    catch (e) { /* 错误已在 store 里处理 */ }
  }
}

/* 工具 */
const shorten = (addr) => addr ? `${addr.slice(0, 2)}…${addr.slice(-4)}` : ''

/* 跳转 */
const price = ref('')
function goAssetOverview() {
  router.push({ path: '/AssetOverview', query: { price: price.value, t: Date.now() } })
}
</script>

<style scoped>
/* 钱包状态条 */
.wallet-bar {
  height: 36px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  gap: 12px;
}

.wallet-bar .green {
  color: #0ecf7b;
}

.wallet-bar .red {
  color: #ff5d5d;
}

.wallet-bar .gray {
  color: #aaa;
}

.wallet-bar .disconnect {
  border: 1px solid #555;
  background: transparent;
  color: #ddd;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}

.page {
  background: #0d0d0d;
  color: #fff;
  /* padding: 16px; */
  font-family: "PingFang SC", sans-serif;
}

.status-bar {
  text-align: right;
  font-size: 14px;
  margin-bottom: 8px;
}

.header {
  text-align: center;
  margin-bottom: 16px;
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #f0b90b;
}

.address {
  font-size: 12px;
  color: #aaa;
  margin-left: 10px;
  border: 1px solid #414040;
  padding: 8px;
  border-radius: 25px;
  width: 90px;
}

.hero {
  margin-bottom: 16px;
}

.countdownbox {
  background-color: #182547;
  height: 180px;
  border-radius: 12px;
  padding: 20px 0;
  margin-bottom: 16px;
}

.countdown {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.box {
  background: linear-gradient(to bottom right, #182547, #171C32);
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  height: 85px;
  width: 60px;
}

.box span {
  display: block;
  font-size: 28px;
  background: linear-gradient(to bottom right, #C753FC, #574BDD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.progress {
  margin-bottom: 16px;
  background: linear-gradient(to bottom right, #182547, #171C32);
  padding: 12px;
  border-radius: 8px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.intro {
  background: linear-gradient(to bottom right, #182547, #171C32);
  padding: 18px 30px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.bar {
  background: #222;
  height: 8px;
  width: 80%;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 5px;
}

.fill {
  background: linear-gradient(to bottom right, #C753FC, #574BDD);
  height: 100%;
}

.cards {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.card {
  flex: 1;
  background: linear-gradient(to bottom right, #182547, #171C32);
  padding: 16px;
  border-radius: 12px;
  text-align: center;
}

.card-input-box {
  margin-top: 15px;
  border-radius: 8px;
  /* 圆角 */
  background: linear-gradient(to right, #6c40ff, #9c27b0);
  /* 渐变边框色 */
  padding: 1px;
  /* 模拟边框宽度 */
  display: inline-block;
  /* 自适应输入框宽度 */
}

.card-input {
  background-color: #1a1a2e;
  /* 输入框背景 */
  color: #fff;
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 7px;
  /* 比容器小 1px（抵消容器 padding） */
  width: 300px;
  /* 可按需设置宽度 */
}

.card button {
  width: 300px;
  margin-top: 8px;
  background: linear-gradient(to right, #9c27b0, #6c40ff);
  color: #000;
  border: none;
  padding: 8px;
  border-radius: 6px;
  font-weight: bold;
}

.what-is {
  flex: 1;
  background: linear-gradient(to bottom right, #182547, #171C32);
  padding: 16px;
  border-radius: 12px;
}

.fee {
  flex: 1;
  background: linear-gradient(to bottom right, #182547, #171C32);
  padding: 16px;
  border-radius: 12px;
  margin-top: 15px;
}

.partners {
  flex: 1;
  background: linear-gradient(to bottom right, #182547, #171C32);
  border-radius: 12px;
  margin-top: 15px;
}

.logos div {
  display: flex;
  justify-content: center;
  margin-top: -40px;
}
</style>
<template>
  <div class="page">
    <div style="background-color: white; display: flex; align-items: center;padding: 15px 0 0 0;">
      <img style="margin-left: 15px;" src="@/assets/imgs/back.png" alt="">
      <img style="margin-left: 15px;" src="@/assets/imgs/弹窗关闭.png" alt="">
    </div>
    <!-- Logo + 地址 -->
    <div class="header">
      <div style="display: flex; align-items: center;">
        <img style="width: 30px; height: 30px; margin-right: 10px;" src="@/assets/imgs/Frame6@2x.png" alt="">
        <img style="width: 180px; height: 15px;" src="@/assets/imgs/Supersurprise.png" alt="">
      </div>
      <div style="display: flex; align-items: center;">
        <img style="width: 30px; height: 30px;" @click="goAssetOverview" src="@/assets/imgs/Group1000000841.png" alt="">
        <p class="address">0x...4587</p>
      </div>
    </div>

    <div style="padding: 16px;">
        <!-- 基金标题 -->
        <div class="" style="position: relative; height: 200px; margin-bottom: 20px;">
          <img style="position: absolute; left: 15px; top: 25px; width: 200px; z-index: 1;" src="@/assets/imgs/AssetOverview/XX基金.png" alt="">
          <h2 style="position: absolute; left: 15px; top: 100px; z-index: 1;" >基金资产总览</h2>
          <div class="big-usdt" style="position: absolute; left: 15px; top: 130px; z-index: 1;">XX USDT</div>
          <img style="position: absolute; right: 15px; top: 15px;" src="@/assets/imgs/AssetOverview/image12.png" alt="">
          <img style="position: absolute; right: 15px; top: 15px;" src="@/assets/imgs/AssetOverview/Group1000000842.png" alt="">
          <img style="width: 10px; position: absolute; right: 185px; top: 90px;" src="@/assets/imgs/AssetOverview/Ellipse1.png" alt="">
          <img style="position: absolute; left: 25px; top: 200px;" src="@/assets/imgs/AssetOverview/Ellipse1.png" alt="">
        </div>
    
        <!-- 持仓分布 -->
        <div class="cards">
            <p class="sub">BTC、ETH、SOL、BNB持仓</p>
            <div class="card">
                <div class="label" >999 USDT</div>
                <span>(25%)</span>
            </div>
            <p class="sub">历史收益</p>
            <div class="card">
                <div class="label" >8888</div>
                <span>USDT</span>
            </div>
            <p class="sub">其他标的持仓</p>
            <div class="card">
                <div class="label" >6666 USDT</div>
                <span>(75%)</span>
            </div>
            <p class="sub">历史收益</p>
            <div class="card">
                <div class="label" >9988</div>
                <span>USDT</span>
            </div>
            <p class="sub">现货总收益</p>
            <div class="card">
                <div class="label" >7777</div>
                <span>USDT</span>
            </div>
        </div>
    
        <!-- 个人资产 -->
        <div class="section" style="margin-top: 15px; text-align: left;">
          <h2>个人基金资产总览</h2>
          <div class="big-usdt">XXX USDT</div>
        </div>
        <div class="cards" style="margin-top: -30px; border-radius: 0 0 10px 10px; position: relative;">
            <img style="position: absolute; top: 0px; width: 360px;" src="@/assets/imgs/AssetOverview/Vector17.png" alt="">
            <p class="sub">个人基金收益</p>
            <div class="card">
                <div class="label" >777</div>
                <span>USDT</span>
            </div>
            <p class="sub">基金管理费率</p>
            <div class="card">
                <div class="label" >20%</div>
                <span></span>
            </div>
            <p class="sub">其他标的持仓</p>
            <div class="card">
                <div class="label" >劣后补损 USDT</div>
                <span>(95%)</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
// 可接接口渲染真实数据
</script>

<style scoped>
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

.section {
  margin-bottom: 20px;
  flex: 1;
  padding: 16px;
  border-radius: 12px;
  position: relative;
  background-image: url('@/assets/imgs/AssetOverview/Rectangle51.png');
  background-repeat: no-repeat;
  background-size: 100%;
}

.big-usdt {
  font-size: 32px;
  font-weight: bold;
  background: linear-gradient(to bottom right, #C753FC, #574BDD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 8px 0;
}

.sub {
  font-size: 14px;
  color: #aaa;
  margin-left: 15px;
  margin-bottom: 10px;
}

.cards {
  flex: 1;
  background: linear-gradient(to bottom right, #182547, #171C32);
  padding: 16px;
  border-radius: 12px;
  position: relative;
}

.card {
  flex: 1;
  background: #1a1a1a;
  padding: 10px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.card .label {
  font-size: 18px;
  font-weight: bold;
  color: #ccc;
}

.card .label span {
  font-size: 18px;
  font-weight: bold;
  color: #ccc;
}

.card .title {
  margin-top: 4px;
  font-size: 14px;
  color: #ccc;
}

.card .profit {
  margin-top: 8px;
  font-size: 12px;
  color: #0ecf7b;
}

.total-profit {
  background: #1a1a1a;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 20px;
}

.total-profit .label {
  font-size: 14px;
  color: #aaa;
}

.total-profit .value {
  font-size: 24px;
  font-weight: bold;
  color: #0ecf7b;
}

.footer-stats {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.item {
  flex: 1;
  background: #1a1a1a;
  padding: 12px;
  border-radius: 12px;
  text-align: center;
}

.item .label {
  font-size: 12px;
  color: #aaa;
}

.item .value {
  font-size: 18px;
  font-weight: bold;
  color: #f0b90b;
}
</style>
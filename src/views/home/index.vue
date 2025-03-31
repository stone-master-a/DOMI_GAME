<template>
  <div class="container">
    <ElCarousel :interval="5000" height="24rem">
      <ElCarouselItem v-for="item of imageBarList">
        <div class="barItem">
          <img :src="item.path" />
          <div class="innerContainer">
            <span>DG包网</span>
            <span>DOMI GAMES</span>
            <span
              >DG包网平台搭建专家，公司成立至今已经超过15年的历史，目前我们已经拥有超过1000+位客户的信赖。我们主要提供彩票包网、棋牌包网、体育包网、综合包网、及东南亚包网、国际包网平台，免押金拥有，免预缴，拥有海量游戏API接口，包网价格真正免押金免预缴。选择天成成功，定能助您迈向。</span
            >
            <div>立即开站</div>
          </div>
        </div>
      </ElCarouselItem>
    </ElCarousel>
    <div class="whatWay_container">
      <div class="notice">
        <span>DG包网提供什麼方案？</span>
        <span
          >DG集团的包网服务为新的从业合作伙伴提供全方位的技术指导及服务，为合作伙伴节约了在技术层面及公司构建层面的资金负担。因此，为客户提供一个量身定做的包网服务项目，是我们的专业强项！</span
        >
      </div>
      <div class="box">
        <div class="box_item" v-for="item of whatWayBoxList" :key="item.image">
          <img :src="item.image" />
          <span>{{ item.title }}</span>
          <span>{{ item.content }}</span>
        </div>
      </div>
    </div>
    <div class="whyChoose_container">
      <div class="notice">
        <span>{{ $t("home.whyChoose_t") }}</span>
        <span>{{ $t("home.whyChoose_c") }}</span>
      </div>
      <div class="box">
        <div
          class="box_item"
          v-for="item of wayChooseBoxList"
          :key="item.image"
        >
          <div>
            <img :src="item.image" />
          </div>
          <span>{{ item.title }}</span>
          <span>{{ item.content }}</span>
        </div>
      </div>
    </div>
    <div class="levelOfSecurity_container">
      <div class="notice">
        <span>{{ $t("home.levelOfSecurity_t") }}</span>
        <span>{{ $t("home.levelOfSecurity_c") }}</span>
      </div>
      <div class="box">
        <div
          class="box_item"
          v-for="item of levelOfSecurityBoxList"
          :key="item.image"
        >
          <div>
            <img :src="item.image" />
          </div>
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from "element-plus";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const imageBarList = ref([{ path: "/imgs/home/bar.png" }]);

const whatWayBoxList = [
  {
    image: "/imgs/home/whatWay1.png",
    title: "综合包网",
    content:
      "涵盖目前线上博弈市场中最常见的游戏总类，综合包网的游戏种类如：彩票、棋牌、真人视讯、体育、电竞、捕鱼及老虎机（又称电子游戏）涵盖目前线上博弈市场中最常见的游戏总类，综合包网的电子游戏）",
  },
  {
    image: "/imgs/home/whatWay2.png",
    title: "彩票包网",
    content:
      "涵盖目前线上博弈市场中最常见的游戏总类，综合包网的游戏种类如：彩票、棋牌、真人视讯、体育、电竞、捕鱼及老虎机（又称电子游戏）涵盖目前线上博弈市场中最常见的游戏总类，综合包网的电子游戏）",
  },
  {
    image: "/imgs/home/whatWay3.png",
    title: "彩票2.1",
    content:
      "涵盖目前线上博弈市场中最常见的游戏总类，综合包网的游戏种类如：彩票、棋牌、真人视讯、体育、电竞、捕鱼及老虎机（又称电子游戏）涵盖目前线上博弈市场中最常见的游戏总类，综合包网的电子游戏）",
  },
  {
    image: "/imgs/home/whatWay4.png",
    title: "TK商城",
    content:
      "涵盖目前线上博弈市场中最常见的游戏总类，综合包网的游戏种类如：彩票、棋牌、真人视讯、体育、电竞、捕鱼及老虎机（又称电子游戏）涵盖目前线上博弈市场中最常见的游戏总类，综合包网的电子游戏）",
  },
  {
    image: "/imgs/home/whatWay5.png",
    title: "抢单商城",
    content:
      "涵盖目前线上博弈市场中最常见的游戏总类，综合包网的游戏种类如：彩票、棋牌、真人视讯、体育、电竞、捕鱼及老虎机（又称电子游戏）涵盖目前线上博弈市场中最常见的游戏总类，综合包网的电子游戏）",
  },
  {
    image: "/imgs/home/whatWay6.png",
    title: "交易所",
    content:
      "涵盖目前线上博弈市场中最常见的游戏总类，综合包网的游戏种类如：彩票、棋牌、真人视讯、体育、电竞、捕鱼及老虎机（又称电子游戏）涵盖目前线上博弈市场中最常见的游戏总类，综合包网的电子游戏）",
  },
  {
    image: "/imgs/home/whatWay7.png",
    title: "理财",
    content:
      "涵盖目前线上博弈市场中最常见的游戏总类，综合包网的游戏种类如：彩票、棋牌、真人视讯、体育、电竞、捕鱼及老虎机（又称电子游戏）涵盖目前线上博弈市场中最常见的游戏总类，综合包网的电子游戏）",
  },
  {
    image: "/imgs/home/whatWay8.png",
    title: "质押",
    content:
      "涵盖目前线上博弈市场中最常见的游戏总类，综合包网的游戏种类如：彩票、棋牌、真人视讯、体育、电竞、捕鱼及老虎机（又称电子游戏）涵盖目前线上博弈市场中最常见的游戏总类，综合包网的电子游戏）",
  },
];

const wayChooseBoxList = [
  {
    image: "/imgs/home/whyChoose1.png",
    title: t("home.whyChoose_b_t1"),
    content: t("home.whyChoose_b_c1"),
  },
  {
    image: "/imgs/home/whyChoose2.png",
    title: t("home.whyChoose_b_t2"),
    content: t("home.whyChoose_b_c2"),
  },
  {
    image: "/imgs/home/whyChoose3.png",
    title: t("home.whyChoose_b_t3"),
    content: t("home.whyChoose_b_c3"),
  },
  {
    image: "/imgs/home/whyChoose4.png",
    title: t("home.whyChoose_b_t4"),
    content: t("home.whyChoose_b_c4"),
  },
  {
    image: "/imgs/home/whyChoose5.png",
    title: t("home.whyChoose_b_t5"),
    content: t("home.whyChoose_b_c5"),
  },
  {
    image: "/imgs/home/whyChoose6.png",
    title: t("home.whyChoose_b_t6"),
    content: t("home.whyChoose_b_c6"),
  },
  {
    image: "/imgs/home/whyChoose7.png",
    title: t("home.whyChoose_b_t7"),
    content: t("home.whyChoose_b_c7"),
  },
  {
    image: "/imgs/home/whyChoose8.png",
    title: t("home.whyChoose_b_t8"),
    content: t("home.whyChoose_b_c8"),
  },
  {
    image: "/imgs/home/whyChoose9.png",
    title: t("home.whyChoose_b_t9"),
    content: t("home.whyChoose_b_c9"),
  },
];
const levelOfSecurityBoxList = [
  {
    image: "/imgs/home/levelOfSecurity1.svg",
    title: t("home.levelOfSecurity_b_t1"),
  },
  {
    image: "/imgs/home/levelOfSecurity2.svg",
    title: t("home.levelOfSecurity_b_t2"),
  },
  {
    image: "/imgs/home/levelOfSecurity3.svg",
    title: t("home.levelOfSecurity_b_t3"),
  },
  {
    image: "/imgs/home/levelOfSecurity4.svg",
    title: t("home.levelOfSecurity_b_t4"),
  },
  {
    image: "/imgs/home/levelOfSecurity5.svg",
    title: t("home.levelOfSecurity_b_t5"),
  },
  {
    image: "/imgs/home/levelOfSecurity6.svg",
    title: t("home.levelOfSecurity_b_t6"),
  },
  {
    image: "/imgs/home/levelOfSecurity7.svg",
    title: t("home.levelOfSecurity_b_t7"),
  },
];
</script>

<style lang="less" scoped>
@import url(./pc_style.less);
@media (max-width: 1024px) {
  @import url(./tablet_style.less);
}
@media (max-width: 767px) {
  @import url(./mobile_style.less);
}
</style>

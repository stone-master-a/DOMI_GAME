<template>
  <div class="container">
    <!-- <ElCarousel :interval="5000" height="25rem">
      <ElCarouselItem v-for="item of imageBarList"> -->
    <div class="barItem">
      <div class="innerContainer">
        <span>{{ $t("home.ADTitle") }}</span>
        <span>DOMI GAMES</span>
        <span>{{ $t("home.ADcontent") }}</span>
        <div>{{ $t("home.ADButton") }}</div>
      </div>
    </div>
    <!-- </ElCarouselItem>
    </ElCarousel> -->
    <div class="whatWay_container">
      <div class="notice">
        <span>{{ $t("home.whatWay_t") }}</span>
        <span>{{ $t("home.whatWay_c") }}</span>
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
    <div class="aboutMe_container">
      <div class="content_container">
        <span>{{ $t("home.aboutMe_title") }}</span>
        <span>{{ $t("home.aboutMe_content1") }}</span>
        <span>
          <span>{{ $t("home.aboutMe_content2_t") }}</span>
          {{ $t("home.aboutMe_content2") }}</span
        >
        <span>
          <span>{{ $t("home.aboutMe_content2_t") }}</span>
          {{ $t("home.aboutMe_content3") }}</span
        >
      </div>
    </div>
    <div class="brand_container">
      <img v-for="item of 12" :src="`/imgs/home/${item}.png`" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from "element-plus";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const imageBarList = ref([{ path: "/imgs/home/bar.png" }]);

const whatWayBoxList = computed(() => [
  {
    image: "/imgs/home/whatWay1.png",
    title: t("home.whatWay_b_t1"),
    content: t("home.whatWay_b_c1"),
  },
  {
    image: "/imgs/home/whatWay2.png",
    title: t("home.whatWay_b_t2"),
    content: t("home.whatWay_b_c1"),
  },
  {
    image: "/imgs/home/whatWay3.png",
    title: t("home.whatWay_b_t3"),
    content: t("home.whatWay_b_c1"),
  },
  {
    image: "/imgs/home/whatWay4.png",
    title: t("home.whatWay_b_t4"),
    content: t("home.whatWay_b_c1"),
  },
  {
    image: "/imgs/home/whatWay5.png",
    title: t("home.whatWay_b_t5"),
    content: t("home.whatWay_b_c1"),
  },
  {
    image: "/imgs/home/whatWay6.png",
    title: t("home.whatWay_b_t6"),
    content: t("home.whatWay_b_c1"),
  },
  {
    image: "/imgs/home/whatWay7.png",
    title: t("home.whatWay_b_t7"),
    content: t("home.whatWay_b_c1"),
  },
  {
    image: "/imgs/home/whatWay8.png",
    title: t("home.whatWay_b_t8"),
    content: t("home.whatWay_b_c1"),
  },
]);

const wayChooseBoxList = computed(() => [
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
]);
const levelOfSecurityBoxList = computed(() => [
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
]);
</script>

<style lang="less" scoped>
@media (min-width: 1025px) {
  @import url(./pc_style.less);
}
@media (min-width: 768px) and (max-width: 1024px) {
  @import url(./tablet_style.less);
}
@media (max-width: 767px) {
  @import url(./mobile_style.less);
}
</style>

<template>
  <div class="container">
    <div class="header" :style="`background-image: url(${bgUrl})`">
      <!-- <img src=/> -->
      <div class="text_container">
        <span class="title">{{ $t("other.demoStation") }}</span>
        <div class="account_box">
          <span>{{ $t("other.account") }}：{{ envData.account }} </span>
          <span>{{ $t("other.password") }}：{{ envData.password }}</span>
        </div>
        <div class="button" @click="gotoHref">{{ $t("other.demo") }}</div>
      </div>
    </div>
    <div class="section">
      <span>{{ $t("home.whatWay_b_t2") }}</span>
      <span>
        {{ $t("other.desc") }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, unref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { getNavigationList } from "@/router/index";
const route = useRoute();
const bgUrl = ref("");
watchEffect(() => {
  bgUrl.value = `/imgs/other/${route.params.id}.png`;
  console.log(bgUrl.value);
});

const navigationList = getNavigationList();
function cacheImg() {
  unref(navigationList).forEach((val) => {
    const img = new Image();
    img.src = `/imgs${val.path}.png`;
    img.style.display = "none";
    document.getElementsByClassName("container")[0].append(img);
  });
}

onMounted(() => {
  cacheImg();
});

function gotoHref() {
  window.location.href = import.meta.env.VITE_DEMO_URL;
}

const envData = ref({
  account: import.meta.env.VITE_ACCOUNT,
  password: import.meta.env.VITE_PASSWORD,
});
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

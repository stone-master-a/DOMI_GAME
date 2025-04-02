<template>
  <div class="background_box">
    <img src="/public/imgs/gameAPI/bg.png" />
  </div>
  <div class="project_container">
    <div class="item" v-for="item of List" :key="item.img">
      <img src="/public/imgs/gameAPI/1.png" />
      <span>DG</span>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const List = ref([
  {
    img: "/public/imgs/gameAPI/1.png",
    name: t("gameAPI.1"),
    desc: "",
    url: "",
  },
  {
    img: "/public/imgs/gameAPI/2.png",
    name: t("gameAPI.2"),
    desc: "",
    url: "",
  },
  {
    img: "/public/imgs/gameAPI/3.png",
    name: t("gameAPI.3"),
    desc: "",
    url: "",
  },
  {
    img: "/public/imgs/gameAPI/4.png",
    name: t("gameAPI.4"),
    desc: "",
    url: "",
  },
  {
    img: "/public/imgs/gameAPI/5.png",
    name: t("gameAPI.5"),
    desc: "",
    url: "",
  },
  {
    img: "/public/imgs/gameAPI/6.png",
    name: t("gameAPI.6"),
    desc: "",
    url: "",
  },
  {
    img: "/public/imgs/gameAPI/7.png",
    name: t("gameAPI.7"),
    desc: "",
    url: "",
  },
  {
    img: "/public/imgs/gameAPI/8.png",
    name: t("gameAPI.8"),
    desc: "",
    url: "",
  },
  {
    img: "/public/imgs/gameAPI/9.png",
    name: t("gameAPI.9"),
    desc: "",
    url: "",
  },
  {
    img: "/public/imgs/gameAPI/10.png",
    name: t("gameAPI.10"),
    desc: "",
    url: "",
  },
  {
    img: "/public/imgs/gameAPI/11.png",
    name: t("gameAPI.11"),
    desc: "",
    url: "",
  },
]);
</script>
<style lang="less" scoped></style>

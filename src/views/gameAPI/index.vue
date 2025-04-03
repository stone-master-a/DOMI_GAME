<template>
  <div class="background_box">
    <img src="/public/imgs/gameAPI/bg.png" />
  </div>
  <div class="project_container">
    <div
      class="item"
      v-for="item of List"
      :key="item.img"
      :style="`background-image: url(${item.img})`"
    >
      <img src="/public/imgs/gameAPI/logo.png" />
      <span>DG</span>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const List = computed(() => [
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
<style lang="less" scoped>
.background_box {
  width: 100%;
  > img {
    width: 100%;
    object-fit: cover;
  }
}
.project_container {
  width: 100%;
  display: grid;

  gap: 1.5rem;
  padding: 2rem var(--space);
  .item {
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-position: center;
    background-size: contain;
    padding: 0 0.8rem;
    > img {
      width: 4.5rem;
      height: 4.5rem;
    }
    span:nth-of-type(1) {
      font-size: 20px;
      font-weight: 400;
      color: #ffffff;
      flex-grow: 1;
    }
    span:nth-of-type(2) {
      color: #0e3a66;
      font-family: Inter;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
}
@media (min-width: 1025px) {
  .project_container {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .project_container {
    grid-template-columns: repeat(3, 1fr);
    .item {
      padding: 0 0.4rem;

      > img {
        width: 3.8rem;
        height: 3.8rem;
      }
      > span:nth-of-type(2) {
        font-size: 1.4rem;
      }
    }
  }
}
@media (max-width: 767px) {
  .project_container {
    grid-template-columns: repeat(2, 1fr);
    .item {
      padding: 0 0.2rem;

      > img {
        width: 2.8rem;
        height: 2.8rem;
      }
      > span:nth-of-type(2) {
        font-size: 1.1rem;
      }
    }
  }
}
</style>

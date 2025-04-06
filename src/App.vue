<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import pcHeader from "./layout/header/header.vue";
import FooterC from "./layout/footer/footer.vue";
</script>

<template>
  <div class="appBox">
    <div class="placeholder"></div>
    <header>
      <pcHeader></pcHeader>
    </header>
    <RouterView class="main" />
    <FooterC></FooterC>
  </div>
</template>

<style lang="less" scoped>
.appBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  .placeholder {
    height: 4rem;
    width: 100%;
  }
  header {
    width: 100%;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .main {
    width: 100%;
    min-height: calc(100vh - 3.5rem);
    overflow: hidden;
  }
}
</style>

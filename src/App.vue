<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import pcHeader from "./layout/header/pc-header.vue";
</script>

<template>
  <div class="appBox">
    <header>
      <pcHeader></pcHeader>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
.appBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  header {
    width: 100%;
    background: white;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
  }
}
</style>

<template>
  <div class="footer">{{ copyright }}</div>
</template>

<script setup lang="ts">
const copyright = import.meta.env.VITE_COPYRIGHT;
</script>

<style lang="less">
.footer {
  width: 100%;
  height: 3.5rem;
  background: #5269fd;
  color: white;
  font-family: Inter;
  font-size: 0.75rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

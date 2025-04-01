<template>
  <ElDropdown class="elDropdown" @command="changeLangHandler">
    <ElButton class="elbutton">
      <img :src="store.currentLang?.flag" />
      <span class="text"> {{ store.currentLang?.name }}</span>
    </ElButton>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem
          v-for="item of langTypeList"
          :key="item.key"
          :command="item"
          >{{ item.name }}</ElDropdownItem
        >
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<script setup lang="ts">
import { langTypeList, useLangStore } from "@/stores/lang.ts";
const store = useLangStore();
function changeLangHandler(e: any) {
  store.changeLang(e.key);
}
</script>

<style lang="less" scoped>
.elbutton {
  font-size: 0.75rem;
  width: 4.625rem;
  height: 1.875rem;
  img {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.62rem;
  }
}
</style>

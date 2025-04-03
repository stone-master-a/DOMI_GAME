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
        >
          <img :src="item.flag" />
          <span style="margin-left: 5px">{{ item.name }}</span>
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<script setup lang="ts">
import { useLangStore } from "@/stores/lang.ts";
import { langTypeList } from "@/i18n/config.ts";
const store = useLangStore();
function changeLangHandler(e: any) {
  store.changeLang(e.key);
}
</script>

<style lang="less" scoped>
.elbutton {
  font-size: 0.75rem;
  width: 6rem;
  height: 1.875rem;
  padding: 0;
  img {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.4rem;
  }
}
</style>

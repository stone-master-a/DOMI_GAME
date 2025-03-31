<template>
  <div class="headerContainer">
    <img class="logo" src="/public/imgs/logo.png" />
    <div class="buttonGroup">
      <ElButton class="elbutton">
        <img src="/public/imgs/header/user.svg" />
        登录
      </ElButton>
      <ElDropdown>
        <ElButton class="elbutton">
          <img src="/public/imgs//header/language.svg" />
          {{ store.currentLangName }}
        </ElButton>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem v-for="item of langTypeList" :key="item.key">{{
              item.name
            }}</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </div>
  </div>
  <div class="navigationBar">
    <div
      :class="['item', item.path == location ? 'checked' : '']"
      v-for="item of navigationBarList"
      @click="gotoHandler(item.path)"
    >
      <img
        class="svg-object"
        :src="item.icon + (item.path == location ? 'c' : '') + '.svg'"
      />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { langTypeList, useLangStore } from "@/stores/lang.ts";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const store = useLangStore();
const { t } = useI18n();
const navigationBarList = [
  { name: t("header.navigator1"), icon: "imgs/header/navigator1", path: "/" },
  {
    name: t("header.navigator2"),
    icon: "imgs/header/navigator2",
    path: "/synthesis",
  },
  {
    name: t("header.navigator3"),
    icon: "imgs/header/navigator3",
    path: "/lottery",
  },
  { name: t("header.navigator4"), icon: "imgs/header/navigator4" },
  { name: t("header.navigator5"), icon: "imgs/header/navigator5" },
  { name: t("header.navigator6"), icon: "imgs/header/navigator6" },
  { name: t("header.navigator7"), icon: "imgs/header/navigator7" },
  { name: t("header.navigator8"), icon: "imgs/header/navigator8" },
  { name: t("header.navigator9"), icon: "imgs/header/navigator9" },
  { name: t("header.navigator10"), icon: "imgs/header/navigator10" },
  { name: t("header.navigator11"), icon: "imgs/header/navigator11" },
  { name: t("header.navigator12"), icon: "imgs/header/navigator12" },
];
const location = ref(window.location.pathname);

function gotoHandler(path: any): void {
  router.push(path);
  location.value = path;
}
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

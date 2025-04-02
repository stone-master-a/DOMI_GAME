<template>
  <div class="headerContainer">
    <img class="logo" src="/public/imgs/logo.png" />
    <div class="buttonGroup">
      <ElButton class="elbutton" style="display: none">
        <img src="/public/imgs/header/user.svg" />
        <span class="text">{{ $t("header.login") }}</span>
      </ElButton>
      <ElButton class="elbutton">
        <img src="/public/imgs/header/share.svg" />
      </ElButton>

      <langChange></langChange>
      <ElButton class="elbutton" @click="showNavigationDrawer = true">
        <img src="/public/imgs/header/more.svg" />
      </ElButton>
    </div>
  </div>
  <!-- 移动端导航 -->
  <div class="mobile_navigationDrawer">
    <ElDrawer
      class="drawer"
      v-model="showNavigationDrawer"
      direciton="rtl"
      :show-close="false"
      size="60%"
    >
      <template #header>
        <div class="drawerHeader">
          <img src="/public/imgs/header/transparent_logo.png" />
          <div @click="showNavigationDrawer = false">
            <ElIcon color="#5269fd"><CloseBold /></ElIcon>
          </div>
        </div>
      </template>
      <div class="navigationList">
        <div
          :class="['item', item.path == location ? 'checked' : '']"
          v-for="item of navigationBarList"
          @click="gotoHandler(item.path)"
        >
          <img class="svg-object" :src="item.icon + 'c.svg'" />
          <span>{{ item.name }}</span>
        </div>
        <langChange class="langChange"></langChange>
      </div>
    </ElDrawer>
  </div>
  <!-- pc端导航 -->
  <div class="navigationBar" :lang="locale">
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
import { MoreFilled, CloseBold } from "@element-plus/icons-vue";
import router, { getNavigationList } from "@/router";
import langChange from "./components/langChange.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { ElDrawer, ElIcon } from "element-plus";
const { t, locale } = useI18n();

const navigationBarList = getNavigationList();
const location = ref(window.location.pathname);

function gotoHandler(path: any): void {
  router.push(path);
  location.value = path;
  showNavigationDrawer.value = false;
}

const showNavigationDrawer = ref(false);
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

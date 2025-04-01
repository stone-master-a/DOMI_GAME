<template>
  <div class="container">
    <div class="header">
      <img src="/public/imgs/others/bg.png" />
      <div class="text_container">
        <span class="title">彩票包网演示站</span>
        <div class="account_box">
          <span>账号：12345678</span>
          <span>密码：12345678</span>
        </div>
        <div class="button">演示</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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

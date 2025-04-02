import { createRouter, createWebHistory } from "vue-router";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home/index.vue"),
    },
    {
      path: "/other/:id",
      name: "other",
      component: () => import("@/views/other/index.vue"),
    },
    {
      path: "/gameAPI",
      name: "gameAPI",
      component: () => import("@/views/gameAPI/index.vue"),
    },
  ],
});

export default router;

export function getNavigationList() {
  const { t } = useI18n();
  //导航栏
  return computed(() => [
    {
      name: t("header.navigator1"),
      icon: "/imgs/header/navigator1",
      path: "/",
    },
    {
      name: t("header.navigator2"),
      icon: "/imgs/header/navigator2",
      path: "/other/synthesize",
    },
    {
      name: t("header.navigator3"),
      icon: "/imgs/header/navigator3",
      path: "/other/lottery",
    },
    {
      name: t("header.navigator4"),
      icon: "/imgs/header/navigator4",
      path: "/other/lottery2.1",
    },
    {
      name: t("header.navigator5"),
      icon: "/imgs/header/navigator5",
      path: "/other/TKShop",
    },
    {
      name: t("header.navigator6"),
      icon: "/imgs/header/navigator6",
      path: "/other/shoppingMall",
    },
    {
      name: t("header.navigator7"),
      icon: "/imgs/header/navigator7",
      path: "/other/exchange",
    },
    {
      name: t("header.navigator8"),
      icon: "/imgs/header/navigator8",
      path: "/other/moneyManagement",
    },
    {
      name: t("header.navigator9"),
      icon: "/imgs/header/navigator9",
      path: "/other/pledge",
    },
    {
      name: t("header.navigator10"),
      icon: "/imgs/header/navigator10",
      path: "/gameAPI",
    },
    {
      name: t("header.navigator11"),
      icon: "/imgs/header/navigator11",
      path: "",
    },
    {
      name: t("header.navigator12"),
      icon: "/imgs/header/navigator12",
      path: "",
    },
  ]);
}

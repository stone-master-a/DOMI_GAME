import { computed, ref, unref, type Ref } from "vue";
import { defineStore } from "pinia";
import { i18n } from "@/i18n/index";
export enum langType {
  zhCn = "zhCn",
  en = "en",
}
export const langTypeList = [
  {
    name: "中文",
    key: langType.zhCn,
    flag: "/public/imgs/header/chinaFlag.svg",
  },
  { name: "english", key: langType.en, flag: "" },
];
export const useLangStore = defineStore("language", () => {
  const lang: Ref<langType | string> = ref(
    localStorage.getItem("lang") || langType.zhCn
  );
  function changeLang(langType: langType): void {
    lang.value = langType;
    //更新多语言环境
    i18n.global.locale = langType;
  }
  const currentLang = computed(() => {
    return langTypeList.find((val) => val.key == unref(lang));
  });
  return { changeLang, currentLang };
});

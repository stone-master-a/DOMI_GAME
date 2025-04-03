import { computed, defineAsyncComponent, ref, unref, type Ref } from "vue";
import { defineStore } from "pinia";
import { i18n } from "@/i18n/index";
import { langType, langTypeList } from "@/i18n/config";
export const useLangStore = defineStore("language", () => {
  const lang: Ref<langType | string> = ref(
    localStorage.getItem("lang") || langType.zhCn
  );
  function changeLang(langType: langType): void {
    lang.value = langType;
    //更新多语言环境
    i18n.global.locale = langType;
    localStorage.setItem("lang", langType);
  }
  const currentLang = computed(() => {
    return langTypeList.find((val) => val.key == unref(lang));
  });
  return { changeLang, currentLang };
});

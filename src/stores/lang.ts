import { computed, ref, unref, type Ref } from "vue";
import { defineStore } from "pinia";

export enum langType {
  zhCn = "zhCn",
  en = "en",
}
export const langTypeList = [
  { name: "中文", key: langType.zhCn },
  { name: "english", key: langType.en },
];
export const useLangStore = defineStore("language", () => {
  const lang: Ref<langType | string> = ref(
    localStorage.getItem("lang") || langType.zhCn
  );
  function changeLang(langType: langType): void {
    lang.value = langType;
  }
  const currentLangName = computed(() => {
    return langTypeList.find((val) => val.key == unref(lang))?.name || "";
  });
  return { changeLang, currentLangName };
});

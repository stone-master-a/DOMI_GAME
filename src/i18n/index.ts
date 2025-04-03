import { createI18n, type I18n } from "vue-i18n";
import en from "./lang/en.json";
import zhCn from "./lang/zh-cn.json";
import { useLangStore } from "@/stores/lang";
import { langTypeList } from "./config";
import type { App } from "vue";
let i18n: I18n;
export default function initI18n(app: App<Element>) {
  const { currentLang } = useLangStore();
  i18n = createI18n({
    locale: currentLang?.key,
    messages: Object.assign({}, ...langTypeList.map((item) => item.config)),
    globalInjection: true,
  });
  app.use(i18n);
}

export { i18n };

import { createI18n, type I18n } from "vue-i18n";
import en from "./lang/en.json";
import zhCn from "./lang/zh-cn.json";
import { useLangStore } from "@/stores/lang";
import type { App } from "vue";
let i18n: I18n;
export default function initI18n(app: App<Element>) {
  const { currentLang } = useLangStore();
  i18n = createI18n({
    locale: currentLang?.key || "zhCn",
    messages: {
      zhCn,
      en,
    },
    globalInjection: true,
  });
  app.use(i18n);
}
export { i18n };

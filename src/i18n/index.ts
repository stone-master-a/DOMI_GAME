import { createI18n } from "vue-i18n";
import en from "./lang/en.json";
import zhCn from "./lang/zh-cn.json";

export default createI18n({
  locale: localStorage.getItem("lang") || "zhCn",
  messages: {
    zhCn,
    en,
  },
  globalInjection: true,
});

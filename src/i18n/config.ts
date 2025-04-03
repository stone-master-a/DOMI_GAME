export enum langType {
  zhCn = "zh",
  en = "en",
  vi = "vi",
}
const [zh, en, vi] = await Promise.all([
  import("@/i18n/lang/zh-cn.json"),
  import("@/i18n/lang/en.json"),
  import("@/i18n/lang/vi.json"),
]);

export const langTypeList = [
  {
    name: "中文",
    key: langType.zhCn,
    flag: "/public/imgs/header/chinese.png",
    config: { zh },
  },
  {
    name: "english",
    key: langType.en,
    flag: "/public/imgs/header/english.png",
    config: { en },
  },
  {
    name: "Tiếng Việt",
    key: langType.vi,
    flag: "/public/imgs/header/Vietnamese.png",
    config: { vi },
  },
];

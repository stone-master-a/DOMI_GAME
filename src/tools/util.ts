export enum DeviceType {
  Mobile = "Mobile",
  Tablet = "Tablet",
  Desktop = "Desktop",
}

// 导出一个名为 getDeviceType 的函数，该函数返回一个 DeviceType 枚举值
export function getDeviceType(): DeviceType {
  // 获取当前窗口的宽度
  const width = window.innerWidth;

  // 如果窗口宽度小于等于 768 像素，则返回 DeviceType 枚举中的 Mobile（移动设备）
  if (width <= 768) {
    return DeviceType.Mobile;
    // 如果窗口宽度大于 768 像素且小于等于 1024 像素，则返回 DeviceType 枚举中的 Tablet（平板设备）
  } else if (width > 768 && width <= 1024) {
    return DeviceType.Tablet;
    // 如果窗口宽度大于 1024 像素，则返回 DeviceType 枚举中的 Desktop（桌面设备）
  } else {
    return DeviceType.Desktop;
  }
}
import anime from "animejs/lib/anime.es.js";

function translate(element: HTMLElement | Element) {
  return anime({
    targets: element,
    translateX: "-100vw",
    direction: "reverse",
    easing: "cubicBezier(.5, .05, .1, .3)",
    delay: anime.stagger(100),
  });
}
function gridAime(element: HTMLElement | Element) {
  return anime({
    targets: element,
    scale: [
      { value: 0.1, easing: "easeOutSine", duration: 100 },
      { value: 1, easing: "easeInOutQuad", duration: 500 },
    ],
    delay: anime.stagger(0, { grid: [6, 2], from: "center" }),
  });
}
export const animeTypeMap = {
  translate,
  gridAime,
};
function createIntersectionObserver(
  className: string,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver {
  const elements = document.querySelectorAll(`.${className}`);
  const observer = new IntersectionObserver(callback, options);

  elements.forEach((element) => observer.observe(element));

  return observer;
}

export function bindAnimation(className: string, animeType: Function) {
  const observe = createIntersectionObserver(className, (event) => {
    event.forEach((entry) => {
      if (entry.isIntersecting) {
        animeType.call(null, entry.target);
        observe.unobserve(entry.target); // 取消观察
      } else {
      }
    });
  });
}

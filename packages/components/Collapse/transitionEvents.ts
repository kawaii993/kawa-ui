const _setHeightZero = (kawa: HTMLElement) => (kawa.style.height = "0px");
const _setHeightScroll = (kawa: HTMLElement) =>
  (kawa.style.height = `${kawa.scrollHeight}px`);
const _setHeightEmpty = (kawa: HTMLElement) => (kawa.style.height = "");
const _setOverflowHidden = (kawa: HTMLElement) => (kawa.style.overflow = "hidden");
const _setOverflowEmpty = (kawa: HTMLElement) => (kawa.style.overflow = "");

const transitionEvents: Record<string, (kawa: HTMLElement) => void> = {
  beforeEnter(kawa) {
    _setHeightZero(kawa);
    _setOverflowHidden(kawa);
  },
  enter: (kawa) => _setHeightScroll(kawa),
  afterEnter(kawa) {
    _setHeightEmpty(kawa);
    _setOverflowEmpty(kawa);
  },
  beforeLeave(kawa) {
    _setHeightScroll(kawa);
    _setOverflowHidden(kawa);
  },
  leave: (kawa) => _setHeightZero(kawa),
  afterLeave(kawa) {
    _setHeightEmpty(kawa);
    _setOverflowEmpty(kawa);
  },
};

export default transitionEvents;

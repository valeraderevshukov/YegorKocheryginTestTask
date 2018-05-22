export const mediaWidth = width => window.matchMedia(`(max-width: ${width}px)`).matches;

export const isTouch = () => 'ontouchstart' in window;

export const buildIcon = name => `<svg class="icon icon-${name}"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-${name}"></use></svg>`;

export const SCROLL_WIDTH = () => {
  let documentWidth = parseInt(document.querySelector('.js-out-inner').clientWidth),
    windowsWidth = parseInt(window.innerWidth),
    scrollbarWidth = windowsWidth - documentWidth;
  return scrollbarWidth;
};

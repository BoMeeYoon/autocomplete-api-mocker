export function $(selector) {
  const element = document.querySelector(selector);
  return element;
};

export function all$(selector) {
  const element = document.querySelectorAll(selector);
  return element;
};

export function createElement(tag, className) {
  const element = document.createElement(tag);
  className && element.classList.add(className);
  return element;
};

export function addClassName(seletor, className) {
  return seletor.classList.add(className);
};

export function removeClassName(selector, className) {
  return selector.classList.remove(className);
}
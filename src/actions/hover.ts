import { getCursor } from "../helpers/cursor";

export const hover = (element: HTMLElement) => {
  const cursor = getCursor();
  const { offsetHeight, offsetWidth } = element;
  const { left, top } = element.getBoundingClientRect();
  
  return new Promise((resolve, reject) => {
    if (!cursor) {
      return reject('Cursor element was not found');
    }

    cursor.addEventListener('transitionend', resolve);

    cursor.style.left = `${left + (offsetWidth / 2)}px`;
    cursor.style.top = `${top + (offsetHeight / 2)}px`;
  });
}

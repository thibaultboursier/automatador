import { getCursor } from '../helpers/cursor';

export const hover = <T extends HTMLElement>(element: T): Promise<void> => {
  const cursor = getCursor();
  const { offsetHeight, offsetWidth } = element;
  const { left, top } = element.getBoundingClientRect();

  return new Promise((resolve, reject) => {
    if (!cursor) {
      return reject('Cursor element was not found');
    }

    cursor.addEventListener('transitionend', function callback() {
      cursor.removeEventListener('transitionend', callback);
      setTimeout(resolve, 0);
    });

    cursor.style.left = `${left + offsetWidth / 2}px`;
    cursor.style.top = `${top + offsetHeight / 2}px`;
  });
};

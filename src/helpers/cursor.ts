import cursorBase64 from '../assets/cursor.png';

let cursor: HTMLImageElement;

interface Options {
  transitionDuration?: string;
}

const defaultOptions: Options = {
  transitionDuration: '0.5s',
};

export const createCursor = (options?: Partial<Options>): void => {
  options = {
    ...defaultOptions,
    ...options,
  };

  if (cursor) {
    return;
  }

  cursor = document.createElement('img');

  cursor.height = 50;
  cursor.style.left = '0px';
  cursor.style.position = 'fixed';
  cursor.style.top = '0px';
  cursor.style.transition = `${options.transitionDuration} linear all`;
  cursor.style.zIndex = '15999';
  cursor.src = cursorBase64;

  document.body.appendChild(cursor);
};

export const getCursor = (): HTMLImageElement => cursor;

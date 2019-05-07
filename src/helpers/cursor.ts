import cursorBase64 from '../assets/cursor.png';

let cursor: HTMLImageElement;

interface Options {
  source: string;
  transitionDuration?: string;
}

const defaultOptions: Options = {
  source: cursorBase64,
  transitionDuration: '0.5s',
};

export const createCursor = (options?: Partial<Options>): void => {
  const mergedOptions: Options = {
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
  cursor.style.transition = `${mergedOptions.transitionDuration} linear all`;
  cursor.style.zIndex = '15999';
  cursor.src = mergedOptions.source;

  document.body.appendChild(cursor);
};

export const getCursor = (): HTMLImageElement => cursor;

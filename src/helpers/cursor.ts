import cursorBase64 from '../assets/cursor.png';

let cursor: HTMLImageElement | null;

interface CreateCursorOptions {
  source: string;
  transitionDuration?: string;
}

interface DeleteCursorOptions {
  delayInMS?: number;
}

const defaultCreateCursorOptions: CreateCursorOptions = {
  source: cursorBase64,
  transitionDuration: '0.5s',
};

const defaultDeleteCursorOptions: DeleteCursorOptions = {
  delayInMS: 2000,
};

export const createCursor = (options?: Partial<CreateCursorOptions>): void => {
  const mergedOptions: CreateCursorOptions = {
    ...defaultCreateCursorOptions,
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

export const deleteCursor = (options?: DeleteCursorOptions): Promise<void> => {
  const { delayInMS }: DeleteCursorOptions = {
    ...defaultDeleteCursorOptions,
    ...options,
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!cursor) {
        return reject(`Cursor can't be deleted as it does not exist`);
      }

      cursor.parentNode && cursor.parentNode.removeChild(cursor);
      cursor = null;
      resolve();
    }, delayInMS);
  });
};

export const getCursor = (): HTMLImageElement | null => cursor;

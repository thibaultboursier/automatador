import cursorBase64 from '../assets/cursor.png';

let cursor: HTMLImageElement;

enum CursorSpeed {
    Fast = 'fast',
    Normal = 'normal',
}

interface CreateCursorOptions {
    speed?: CursorSpeed;
}

export const createCursor = (): void => {
    if (cursor) {
        return;
    }

    cursor = document.createElement('img');

    cursor.height = 50;
    cursor.style.left = '0px';
    cursor.style.position = 'fixed';
    cursor.style.top = '0px';
    cursor.style.transition = `0.5s linear all`;
    cursor.style.zIndex = '15999';
    cursor.src = cursorBase64;

    document.body.appendChild(cursor);
};

export const getCursor = (): HTMLImageElement => cursor;

let cursor: HTMLImageElement;

enum CursorSpeed{
    Fast = 'fast',
    Normal = 'normal',
};
  

interface CreateCursorOptions{
    speed?: CursorSpeed;
};

export const createCursor = (options: CreateCursorOptions = {}) => {    
    cursor = document.createElement('img');

    cursor.height = 50;
    cursor.style.left = '0px';
    cursor.style.position = 'fixed';
    cursor.style.top = '0px';
    cursor.style.transition = `0.2s linear all`;
    cursor.style.zIndex = '15999';
    cursor.src = 'https://www.freeiconspng.com/uploads/white-mouse-cursor-arrow-by-qubodup-11.png';

    document.body.appendChild(cursor);
};

export const getCursor = () => cursor;

import { hover } from './hover';

export const click = async (element: HTMLElement): Promise<void> => {
    await hover(element);
    element.click();
};

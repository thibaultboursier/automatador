import { hover } from './hover';

export const click = async (element: HTMLElement) => {
  await hover(element);
  element.click();
};

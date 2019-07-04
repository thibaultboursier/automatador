import { hover } from './hover';
import { dispatchEventsFromElement } from '../helpers/events';

export const click = async (element: HTMLElement): Promise<void> => {
  await hover(element);
  element.click();
  dispatchEventsFromElement(element, 'mousedown');
};

import { dispatchEventsFromElement } from '../helpers/events';
import { hover } from './hover';

interface SelectOptions{}

export const select = async (element: HTMLSelectElement, label: string, options: SelectOptions = {}) => {
  if (element.tagName.toLowerCase() !== 'select') {
    throw new Error('A select element must be provided');
  }

  await hover(element);

  const selectedIndex = Array.from(element.options).findIndex(option => option.label === label);
  element.selectedIndex = selectedIndex;

  dispatchEventsFromElement(element, 'change');
}

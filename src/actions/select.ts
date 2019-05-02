import { dispatchEventsFromElement } from '../helpers/events';
import { hover } from './hover';

interface SelectOptions {}

const defaultSelectOptions = {};

export const select = async (
  element: HTMLSelectElement,
  label: string,
  options?: Partial<SelectOptions>,
): Promise<void> => {
  const {} = {
    ...defaultSelectOptions,
    ...options,
  };

  if (element.tagName.toLowerCase() !== 'select') {
    throw new Error('A select element must be provided');
  }

  await hover(element);

  const selectedIndex = Array.from(element.options).findIndex(option => (option.label || option.text) === label);
  element.selectedIndex = selectedIndex;

  dispatchEventsFromElement(element, 'change');
};

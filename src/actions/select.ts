import { dispatchEventsFromElement } from '../helpers/events';
import { hover } from './hover';

interface Options {}

const defaultOptions: Options = {};

export const select = async (element: HTMLSelectElement, label: string, options?: Partial<Options>): Promise<void> => {
  const {} = {
    ...defaultOptions,
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

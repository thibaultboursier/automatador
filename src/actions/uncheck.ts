import { dispatchEventsFromElement } from '../helpers/events';
import { hover } from './hover';

interface Options {}

const defaultOptions: Options = {};

export const uncheck = async (element: HTMLInputElement, options?: Partial<Options>): Promise<void> => {
  const {} = {
    ...defaultOptions,
    ...options,
  };

  if (element.tagName.toLowerCase() !== 'input' || element.type !== 'checkbox') {
    throw new Error('A input with checkbox type must be provided');
  }

  await hover(element);

  element.checked = false;

  dispatchEventsFromElement(element, 'change');
};

import { wait } from './wait';
import { dispatchEventsFromElement } from '../helpers/events';
import { hover } from './hover';
import { isElementEditable } from '../helpers/dom';

interface Options {
  shouldClear?: boolean;
  shouldTypelikeAnUser?: boolean;
  typingSpeed?: 'NORMAL' | 'FAST';
}

const defaultOptions: Options = {
  shouldClear: true,
  shouldTypelikeAnUser: true,
  typingSpeed: 'NORMAL',
};

const typeTextLikeAnUser = async (
  element: HTMLInputElement | HTMLTextAreaElement,
  text: string,
  options: Options = {},
): Promise<void> => {
  const timeInMS = options.typingSpeed && options.typingSpeed === 'FAST' ? 50 : 200;

  for (const letter of text) {
    element.value = element.value + letter;

    await wait({ timeInMS });
  }
};

export const typeText = async (
  element: HTMLInputElement | HTMLTextAreaElement,
  text: string,
  options?: Partial<Options>,
): Promise<void> => {
  const mergedOptions: Options = {
    ...defaultOptions,
    ...options,
  };

  if (!isElementEditable(element)) {
    throw new Error('Element is not editable');
  }

  await hover(element);

  if (mergedOptions.shouldClear) {
    element.value = '';
  }

  if (mergedOptions.shouldTypelikeAnUser) {
    await typeTextLikeAnUser(element, text, mergedOptions);
  } else {
    element.value = text;
  }

  dispatchEventsFromElement(element, 'change', 'input');
};

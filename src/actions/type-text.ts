import { wait } from './wait';
import { dispatchEventsFromElement } from '../helpers/events';
import { hover } from './hover';

interface TypeTextOptions{
  shouldClear?: boolean;
  shouldTypelikeAnUser?: boolean;
}

export const typeText = async (element: HTMLInputElement, text: string, options: TypeTextOptions = {}) => {
  const shouldClear = options.shouldClear || true;
  const shouldTypelikeAnUser = options.shouldTypelikeAnUser || true;

  await hover(element);

  if (shouldClear) {
    element.value = '';
  }

  if (shouldTypelikeAnUser) {
    typeTextLikeAnUser(element, text);
  } else {
    element.value = text;
  }

  dispatchEventsFromElement(element, 'change', 'input');
}

const typeTextLikeAnUser = async (element: HTMLInputElement, text: string) => {
  for (const letter of text) {
      element.value = element.value + letter;

      await wait({ timeInMS: 200 });
    }
};

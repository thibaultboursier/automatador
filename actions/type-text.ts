import { wait } from './wait';
import { dispatchEventsFromElement } from '../helpers/events';
import { hover } from './hover';

interface TypeTextOptions{
  shouldClear?: boolean;
  shouldTypelikeAnUser?: boolean;
}

export const typeText = async (text: string, element: HTMLInputElement, options: TypeTextOptions = {}) => {
  const shouldClear = options.shouldClear || true;
  const shouldTypelikeAnUser = options.shouldTypelikeAnUser || true;

  await hover(element);

  if (shouldClear) {
    element.value = '';
  }

  if (shouldTypelikeAnUser) {
    typeTextLikeAnUser(text, element);
  } else {
    element.value = text;
  }

  dispatchEventsFromElement(element, 'change', 'input');
}

const typeTextLikeAnUser = async (text: string, element: HTMLInputElement) => {
  for (const letter of text) {
      element.value = element.value + letter;

      await wait({ timeInMS: 200 });
    }
};

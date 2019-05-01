import { wait } from "./wait";
import { dispatchEventsFromElement } from "../helpers/events";
import { hover } from "./hover";
import { isElementEditable } from "../helpers/dom";

interface TypeTextOptions {
  shouldClear?: boolean;
  shouldTypelikeAnUser?: boolean;
}

const defaultTypeTextOptions = {
  shouldClear: true,
  shouldTypelikeAnUser: true
};

export const typeText = async (
  element: HTMLInputElement,
  text: string,
  options?: Partial<TypeTextOptions>
) => {
  const { shouldClear, shouldTypelikeAnUser } = {
    ...defaultTypeTextOptions,
    ...options
  };

  if (!isElementEditable(element)) {
    throw new Error("Element is not editable");
  }

  await hover(element);

  if (shouldClear) {
    element.value = "";
  }

  if (shouldTypelikeAnUser) {
    await typeTextLikeAnUser(element, text);
  } else {
    element.value = text;
  }

  dispatchEventsFromElement(element, "change", "input");
};

const typeTextLikeAnUser = async (element: HTMLInputElement, text: string) => {
  for (const letter of text) {
    element.value = element.value + letter;

    await wait({ timeInMS: 200 });
  }
};

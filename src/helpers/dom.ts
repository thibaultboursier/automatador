export const isElementEditable = (element: HTMLElement): boolean => {
  return (
    element.nodeName === "textarea" ||
    (element.nodeName == "input" &&
      /^(?:text|email|number|search|tel|url|password)$/i.test(
        (element as HTMLInputElement).type
      ))
  );
};

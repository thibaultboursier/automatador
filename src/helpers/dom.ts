export const isElementEditable = <T extends Element>(element: T): boolean => {
  const nodeName = element.nodeName.toLowerCase();

  return (
    nodeName === 'textarea' ||
    (nodeName == 'input' &&
      /^(?:text|email|number|search|tel|url|password)$/i.test(((element as unknown) as HTMLInputElement).type))
  );
};

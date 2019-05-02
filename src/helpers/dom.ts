export const isElementEditable = (element: HTMLElement): boolean => {
  const nodeName = element.nodeName.toLowerCase();

  return (
    nodeName === 'textarea' ||
    (nodeName == 'input' && /^(?:text|email|number|search|tel|url|password)$/i.test((element as HTMLInputElement).type))
  );
};

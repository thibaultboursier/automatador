interface FindElementOptions {
  timeoutInMS: number;
}

const defaultFindElementOptions = {
  timeoutInMS: 10000,
};

export const findElement = (selector: string, options?: Partial<FindElementOptions>): Promise<HTMLElement> => {
  const { timeoutInMS } = {
    ...defaultFindElementOptions,
    ...options,
  };
  const timeStamp = Date.now();

  if (!selector) {
    return Promise.reject('A selector must be provided');
  }

  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const element = document.querySelector(selector) as HTMLElement;

      if (element) {
        clearInterval(interval);
        return resolve(element);
      }

      if (Date.now() - timeStamp >= timeoutInMS) {
        clearInterval(interval);
        return reject(`Element "${selector}" was not found`);
      }
    }, 100);
  });
};

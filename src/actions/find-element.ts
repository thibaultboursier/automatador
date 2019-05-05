interface FindElementOptions {
  timeoutInMS: number;
}

const defaultFindElementOptions = {
  timeoutInMS: 10000,
};

export const findElement = <T extends Element>(
  selector: string,
  options?: Partial<FindElementOptions>,
): Promise<T | null> => {
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
      const element = document.querySelector(selector);

      if (element) {
        clearInterval(interval);
        return resolve(element as T);
      }

      if (Date.now() - timeStamp >= timeoutInMS) {
        clearInterval(interval);
        return reject(`Element "${selector}" was not found`);
      }
    }, 100);
  });
};

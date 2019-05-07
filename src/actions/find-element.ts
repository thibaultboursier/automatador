interface Options {
  timeoutInMS: number;
}

const defaultOptions = {
  timeoutInMS: 10000,
};

export const findElement = <T extends Element>(selector: string, options?: Partial<Options>): Promise<T | null> => {
  const { timeoutInMS } = {
    ...defaultOptions,
    ...options,
  };
  const timeStamp = Date.now();

  if (!selector) {
    return Promise.reject('A selector must be provided');
  }

  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const element = document.querySelector(selector);
      const isTimeElapsed = Date.now() - timeStamp >= timeoutInMS;

      if (element) {
        clearInterval(interval);
        return resolve(element as T);
      }

      if (isTimeElapsed) {
        clearInterval(interval);
        return reject(`Element "${selector}" was not found`);
      }
    }, 100);
  });
};

export const findElement = (selector: string) => {
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

      if ((Date.now() - timeStamp) >= 10000) {
        clearInterval(interval);
        return reject(`Element "${selector}" was not found`);
      }
    }, 100)
  });
}

interface WaitOptions {
  timeInMS?: number;
}

export const wait = (options: WaitOptions = {}): Promise<void> => {
  const timeInMS = options.timeInMS || 2000;

  return new Promise(resolve => setTimeout(resolve, timeInMS));
};

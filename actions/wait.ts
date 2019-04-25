interface WaitOptions{
  timeInMS?: number;
}

export const wait = (options: WaitOptions = {}): Promise<undefined> => {
  const timeInMS = options.timeInMS || 2000;
  
  return new Promise(resolve => setTimeout(resolve, timeInMS));
}

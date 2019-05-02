export const dispatchEventsFromElement = (element: HTMLElement, ...eventTypes: string[]): void => {
  eventTypes.forEach(eventType => {
    element.dispatchEvent(new Event(eventType, { bubbles: true }));
  });
};

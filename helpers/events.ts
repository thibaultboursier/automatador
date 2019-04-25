export const dispatchEventsFromElement = (element: HTMLElement, ...eventTypes: string[]) => {
    eventTypes.forEach(eventType => {
      element.dispatchEvent(new Event(eventType, { bubbles: true }))
    });
 };
 
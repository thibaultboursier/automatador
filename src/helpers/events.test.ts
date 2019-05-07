import { dispatchEventsFromElement } from './events';

it('should dispatch events from input element', () => {
  // Given
  const element = document.createElement('input');
  const changeCallback = jest.fn();
  const inputCallback = jest.fn();

  element.addEventListener('change', changeCallback);
  element.addEventListener('input', inputCallback);

  // When
  dispatchEventsFromElement(element, 'change', 'input');

  // Then
  expect(changeCallback).toHaveBeenCalled();
  expect(inputCallback).toHaveBeenCalled();
});

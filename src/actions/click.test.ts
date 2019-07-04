import { click } from './click';

jest.mock('./hover', () => ({
  hover: () => {},
}));

it('should trigger click event', async () => {
  // Given
  const element = document.createElement('button');
  const callback = jest.fn();
  element.addEventListener('click', callback);

  // When
  await click(element);

  // Then
  expect(callback).toHaveBeenCalled();
});

it('should trigger mousedown event', async () => {
  // Given
  const element = document.createElement('button');
  const callback = jest.fn();
  element.addEventListener('mousedown', callback);

  // When
  await click(element);

  // Then
  expect(callback).toHaveBeenCalled();
});

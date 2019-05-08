import { uncheck } from './uncheck';

jest.mock('./hover', () => ({
  hover: () => {},
}));

it('should uncheck checkbox element', async () => {
  // Given
  const element = document.createElement('input');
  element.type = 'checkbox';
  element.checked = true;

  // When
  await uncheck(element);

  // Then
  expect(element.checked).toBe(false);
});

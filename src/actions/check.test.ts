import { check } from './check';

jest.mock('./hover', () => ({
  hover: () => {},
}));

it('should check checkbox element', async () => {
  // Given
  const element = document.createElement('input');
  element.type = 'checkbox';

  // When
  await check(element);

  // Then
  expect(element.checked).toBe(true);
});

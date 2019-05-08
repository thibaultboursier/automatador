import { typeText } from './typeText';

jest.mock('./hover', () => ({
  hover: () => {},
}));

it('should type text inside input', async () => {
  // Given
  const element = document.createElement('input');

  // When
  await typeText(element, 'bar');

  // Then
  expect(element.value).toBe('bar');
});

it('should not clear filled input before typing text', async () => {
  // Given
  const element = document.createElement('input');

  // When
  await typeText(element, 'foo');
  await typeText(element, 'bar', {
    shouldClear: false,
  });

  // Then
  expect(element.value).toBe('foobar');
});

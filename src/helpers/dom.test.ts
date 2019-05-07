import { isElementEditable } from './dom';

it('should return false when element is a div', () => {
  // Given
  const element = document.createElement('div');

  // Given
  const result = isElementEditable(element);

  // Then
  expect(result).toBe(false);
});

it('should return true when element is an input', () => {
  // Given
  const element = document.createElement('input');

  // Given
  const result = isElementEditable(element);

  // Then
  expect(result).toBe(true);
});

it('should return true when element is a textarea', () => {
  // Given
  const element = document.createElement('textarea');

  // Given
  const result = isElementEditable(element);

  // Then
  expect(result).toBe(true);
});

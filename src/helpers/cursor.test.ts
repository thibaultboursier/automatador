import { createCursor, getCursor } from './cursor';

it('should create a cursor', () => {
  // When
  createCursor();

  // Then
  const cursor = document.querySelector('img');

  expect(cursor).not.toBeNull();
  expect(cursor).toBeInstanceOf(HTMLImageElement);
});

it('should return existing cursor', () => {
  // Given
  createCursor();

  // When
  const cursor = getCursor();

  // Then
  expect(cursor).not.toBeNull();
  expect(cursor).toBeInstanceOf(HTMLImageElement);
});

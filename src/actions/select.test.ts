import { select } from './select';

jest.mock('./hover', () => ({
  hover: () => {},
}));

it('should find element', async () => {
  // Given
  const element = document.createElement('select');
  element.options.add(new Option('Option a', 'a'));
  element.options.add(new Option('Option b', 'b'));
  element.options.add(new Option('Option c', 'c'));

  // When
  await select(element, 'Option c');

  // Then
  expect(element.options[element.selectedIndex].text).toBe('Option c');
});

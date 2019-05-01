import { findElement } from './find-element';

jest.mock('./hover', () => ({
    hover: () => {},
}));

it('should find element', async () => {
    // Given
    document.body.innerHTML = `
        <div>
            <button class="foo"/>
        </div>
    `;

    // When
    const element = await findElement('div > button.foo', {
        timeoutInMS: 0,
    });

    // Then
    expect(element).toBeInstanceOf(HTMLButtonElement);
});

it('should not find element', async () => {
    // Given
    document.body.innerHTML = `
        $<div>
            <button class="foo"/>
        </div>
    `;
    let error;

    // When
    try {
        await findElement('div > button.bar', {
            timeoutInMS: 0,
        });
    } catch (e) {
        error = e;
    }

    // Then
    expect(error).toMatch('Element "div > button.bar" was not found');
});

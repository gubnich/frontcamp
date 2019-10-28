import './style.css';

const inputType = 'text';
const placeholderText = 'type source here';
const maxLength = '50';

export const searchInput = (targetPlace, inputHandler, clickHandler) => {
    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add('sourceInputWrapper');

    const input = document.createElement('input')
    input.classList.add('sourceInput');
    input.placeholder = placeholderText;
    input.maxLength = maxLength;
    input.type = inputType;

    const expandButton = document.createElement('span');
    expandButton.classList.add('expandButton');
    expandButton.innerText = '...'

    inputWrapper.append(input);
    inputWrapper.append(expandButton);

    input.addEventListener('input', () => {
        inputHandler(input.value);

    })

    input.addEventListener('focus', () => {
        inputWrapper.classList.add('active');
        // clickHandler();
    })

    input.addEventListener('blur', () => {
        inputWrapper.classList.remove('active');
        // clickHandler();

    })

    expandButton.addEventListener('click', () => {
        clickHandler();
    })

    targetPlace.prepend(inputWrapper);


}
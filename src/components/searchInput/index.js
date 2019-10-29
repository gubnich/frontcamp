import './style.css';

const inputType = 'text';
const placeholderText = 'type source here';
const maxLength = '50';

export const searchInput = (targetPlace, inputHandler, clickHandler) => {

    // structure
    const inputWrapper = document.createElement('div');
    const input = document.createElement('input')
    const expandButton = document.createElement('span');

    // css
    inputWrapper.classList.add('sourceInputWrapper');
    input.classList.add('sourceInput');
    input.placeholder = placeholderText;
    input.maxLength = maxLength;
    input.type = inputType;
    expandButton.classList.add('expandButton');

    // data
    expandButton.innerText = '...'

    // logic
    input.addEventListener('input', () => {
        inputHandler(input.value.toLowerCase());
    })

    input.addEventListener('focus', () => {
        inputWrapper.classList.add('active');
    })

    input.addEventListener('blur', () => {
        inputWrapper.classList.remove('active');
    })

    expandButton.addEventListener('click', () => {
        clickHandler();
    })

    // insert
    inputWrapper.append(input);
    inputWrapper.append(expandButton);
    targetPlace.prepend(inputWrapper);
}

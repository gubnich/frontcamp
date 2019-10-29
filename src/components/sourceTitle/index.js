import './style.css';

export const sourceTitle = (targetPlace, title = '') => {

    const header = targetPlace.querySelector('.sourceTitle') || document.createElement('header');
    header.classList.add('sourceTitle')
    header.innerText = title;
    targetPlace.querySelector('.sourceTitle') || targetPlace.append(header);
}

import './style.css';

// export const sourceTitle = (targetPlace, title = '') => {

//     const header = targetPlace.querySelector('.sourceTitle') || document.createElement('header');
//     header.classList.add('sourceTitle')
//     header.innerText = title;
//     targetPlace.querySelector('.sourceTitle') || targetPlace.append(header);
// }

export class SourceTitle {
    constructor(targetPlace, title) {
        this.header = targetPlace.querySelector('.sourceTitle') || document.createElement('header');
        this.header.classList.add('sourceTitle')
        this.header.innerText = title;
        targetPlace.querySelector('.sourceTitle') || targetPlace.append(this.header);
    }
}
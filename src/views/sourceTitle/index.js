import { ViewElement } from '../viewElement';
import './style.css';

// export const sourceTitle = (targetPlace, title = '') => {

//     const header = targetPlace.querySelector('.sourceTitle') || document.createElement('header');
//     header.classList.add('sourceTitle')
//     header.innerText = title;
//     targetPlace.querySelector('.sourceTitle') || targetPlace.append(header);
// }

const SOURCE_TITLE_META = [
    ['sourceTitle', 'h2'],
];

export class SourceTitle extends ViewElement {
    constructor() {
        super(SOURCE_TITLE_META);
    }

    update(title) {
        this.sourceTitle.innerText = title;
    }

    getRoot() {
        return this.sourceTitle;
    }
}

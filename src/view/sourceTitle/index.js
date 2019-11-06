import { ViewElement } from '../viewElement';
import './style.css';

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

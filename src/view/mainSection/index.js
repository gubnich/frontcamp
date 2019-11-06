import { ViewElement } from '../viewElement';
import './style.css';

const MAIN_SECTION_META = [
    ['mainSection', 'main'],
];

export class MainSection extends ViewElement {
    constructor() {
        super(MAIN_SECTION_META);
    }

    getRoot() {
        return this.mainSection;
    }
}

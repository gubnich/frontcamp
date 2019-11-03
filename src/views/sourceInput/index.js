import { ViewElement } from '../viewElement';
import './style.css';

const FILTER_SOURCE_INPUT_META = [
    ['sourceInputWrapper', 'header'],
    ['sourceInput', 'input'],
];

export class SourceInput extends ViewElement {
    constructor() {
        super(FILTER_SOURCE_INPUT_META);
        // structure
        this.sourceInputWrapper.append(this.sourceInput);
        // customization
        this.sourceInput.placeholder = 'type source here';
        this.sourceInput.maxLength = '50';
        this.sourceInput.type = 'text';
    }

    getRoot() {
        return this.sourceInputWrapper;
    }

    getInput() {
        return this.sourceInput;
    }

}

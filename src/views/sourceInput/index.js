import { ViewElement } from '../viewElement';
import './style.css';

const FILTER_SOURCE_INPUT_META = [
    ['sourceInputWrapper', 'div'],
    ['sourceInput', 'input'],
    ['expandButton', 'button'],
];

export class SourceInput extends ViewElement {
    constructor() {
        super(FILTER_SOURCE_INPUT_META);
        // structure
        this.sourceInputWrapper.append(this.sourceInput);
        this.sourceInputWrapper.append(this.expandButton);
        // customization
        this.sourceInput.placeholder = 'type source here';
        this.sourceInput.maxLength = '50';
        this.sourceInput.type = 'text';
        this.expandButton.innerText = '...'
    }

    getRoot() {
        return this.sourceInputWrapper;
    }

    getInput() {
        return this.sourceInput;
    }

    getExpandButton() {
        return this.expandButton;
    }
}

import { ViewElement } from '../viewElement';
import './style.css';

const ERROR_POPUP_META = [
    ['errorPopupWrapper', 'div'],
    ['errorPopup', 'div'],
    ['errorPopupMessage', 'p'],
];

export class ErrorPopup extends ViewElement {
    constructor() {
        if (typeof ErrorPopup.instance === 'object') {
            document.body.append(ErrorPopup.instance.errorPopupWrapper);
            return ErrorPopup.instance
        }

        super(ERROR_POPUP_META);
        // structure
        this.errorPopupWrapper.append(this.errorPopup);
        this.errorPopup.append(this.errorPopupMessage);
        document.body.append(this.errorPopupWrapper);

        // logic
        this.errorPopupWrapper.addEventListener('click', () => {
            document.body.removeChild(this.errorPopupWrapper);

        })
        ErrorPopup.instance = this;
        return this;
    }

    getRoot() {
        return this.errorPopupMessage;
    }
}
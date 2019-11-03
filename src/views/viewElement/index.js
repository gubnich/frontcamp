/* ViewElement is a flat set of HTML elements */

export class ViewElement {
    constructor(meta = []) {
        meta.forEach(([elementName, elementTag]) => {
            this[elementName] = document.createElement(elementTag);
            this[elementName].classList.add(elementName);
        })
    }
}

/* ViewElement is a flat set of HTML elements. It knows nothing about tree structure of the elements */

export class ViewElement {
    constructor(meta = []) {
        meta.forEach(([elementName, elementTag]) => {
            this[elementName] = document.createElement(elementTag);
            this[elementName].classList.add(elementName);
        })
    }
}

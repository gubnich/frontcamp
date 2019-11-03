import { ViewElement } from '../viewElement';
import './style.css';

const SOURCE_ITEM_META = [
    ['sourceItem', 'li'],
    ['sourceItemCountry', 'div'],
    ['sourceItemName', 'div'],
    ['sourceItemDescription', 'div'],
    ['sourceItemCategory', 'div'],
];

export class SourceItem extends ViewElement {
    constructor({ id, country, name, description, category }) {
        super(SOURCE_ITEM_META);

        // structure
        this.sourceItem.append(this.sourceItemCountry);
        this.sourceItem.append(this.sourceItemName);
        this.sourceItem.append(this.sourceItemDescription);
        this.sourceItem.append(this.sourceItemCategory);

        // applyData
        this.sourceItem.setAttribute('data-id', id)
        this.sourceItem.setAttribute('data-name', name.toLowerCase())
        this.sourceItemCountry.innerText = country;
        this.sourceItemName.innerText = name;
        this.sourceItemDescription.innerText = description;
        this.sourceItemCategory.innerText = category;

        // addLogic
        this.sourceItem.addEventListener('click', () => {
            this.sourceItem.dispatchEvent(new CustomEvent('sourceChange', { detail: { sourceId: id, sourceName: name }, bubbles: true }))
        });
    }

    getRoot() {
        return this.sourceItem;
    }
}
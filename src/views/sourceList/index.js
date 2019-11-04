import { ViewElement } from '../viewElement';
import { SourceItem } from '../sourceItem';
import './style.css';

const SOURCE_LIST_META = [
    ['sourceList', 'ul'],
];

export class SourceList extends ViewElement {
    constructor(data = []) {
        super(SOURCE_LIST_META);

        // structure
        data.forEach(item => {
            this.sourceList.append(new SourceItem(item).getRoot());
        });
        this.sourceListChildren = Array.from(this.sourceList.children);
    }

    filterSources(sourceName = '') {
        this.sourceListChildren.forEach(item => {
            if (item.getAttribute('data-name').includes(sourceName)) {
                item.classList.add('show');
                item.classList.remove('hide');
            }
            else {
                item.classList.add('hide');
                item.classList.remove('show');
            }
        })
    }

    zipList() {
        this.sourceList.classList.toggle('zip');
    }

    getRoot() {
        return this.sourceList;
    }
}
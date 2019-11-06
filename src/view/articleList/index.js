import { ViewElement } from '../viewElement';
import { ArticleItem } from '../articleItem';
import './style.css';

const ARTICLE_LIST_META = [
    ['articleList', 'ul'],
];

export class ArticleList extends ViewElement {
    constructor(data) {
        super(ARTICLE_LIST_META);
        this.createStructure(data);
    }

    createStructure(data = []) {
        data.forEach(item => {
            this.articleList.append(new ArticleItem(item).getRoot());
        });
    }

    update(data) {
        this.articleList.innerHTML = '';
        this.createStructure(data);
    }

    getRoot() {
        return this.articleList;
    }
}
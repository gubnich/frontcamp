import './style.css';
import { ViewElement } from '../viewElement';

const ARTICLE_ITEM_META = [
    ['articleItem', 'li'],
    ['articleItemImageWrapper', 'a'],
    ['articleItemImage', 'img'],
    ['articleItemTitle', 'div'],
    ['articleItemDescription', 'div'],
    ['articleItemDate', 'div'],
    ['articleItemAuthor', 'a']
];

export class ArticleItem extends ViewElement {
    constructor({ url, urlToImage, title, description, publishedAt, author }) {
        super(ARTICLE_ITEM_META);

        // structure
        urlToImage && this.articleItemImageWrapper.append(this.articleItemImage);
        this.articleItem.append(this.articleItemImageWrapper);
        this.articleItem.append(this.articleItemTitle);
        this.articleItem.append(this.articleItemDescription);
        this.articleItem.append(this.articleItemDate);
        this.articleItem.append(this.articleItemAuthor);

        // applyData
        this.articleItemImageWrapper.href = url || '#';
        this.articleItemImage.src = urlToImage;
        this.articleItemTitle.innerText = title;
        this.articleItemDescription.innerText = description;
        this.articleItemDate.innerText = publishedAt ? new Date(Date.parse(publishedAt)).toDateString() : 'Date unknown';
        if (author) {
            if (author.includes('http')) {
                this.articleItemAuthor.innerText = 'Author info';
                this.articleItemAuthor.href = author;
            } else {
                this.articleItemAuthor.innerText = author;
            }
        } else {
            this.articleItemAuthor.innerText = 'Unknown author';
        }
    }

    getRoot() {
        return this.articleItem;
    }
}
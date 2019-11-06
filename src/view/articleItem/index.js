import './style.css';
import { ViewElement } from '../viewElement';

const ARTICLE_ITEM_META = [
    ['articleItemWrapper', 'li'],
    ['articleItem', 'article'],
    ['articleItemImageWrapper', 'a'],
    ['articleItemImage', 'img'],
    ['articleItemTitle', 'h3'],
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
        this.articleItemWrapper.append(this.articleItem);

        // applyData
        this.articleItemImageWrapper.href = url || '#';
        this.articleItemImage.src = urlToImage;
        this.articleItemImage.alt = title;
        this.articleItemImage.title = title;
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
        return this.articleItemWrapper;
    }
}
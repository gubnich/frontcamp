import { getSourceList, getArticleList } from './api'
import { SourceInput } from './views/sourceInput'
import { SourceList } from './views/sourceList'
import { ArticleList } from './views/articleList'
import { SourceTitle } from './views/sourceTitle'
import './style.css';

const root = document.querySelector('#root');

class MainController {
    constructor() {
        this.initialize();
    }

    async initialize() {
        this.sourceListData = await getSourceList();
        this.sourceList = new SourceList(this.sourceListData);
        this.articleList = new ArticleList();
        this.sourceTitle = new SourceTitle();
        this.sourceInput = new SourceInput();
        this.sourceInput.getInput().addEventListener('input', (({ target }) => {
            this.sourceList.filterSources(target.value);
        }))
        this.sourceInput.getExpandButton().addEventListener('click', (() => {
            this.sourceList.zipList();
        }))
        root.append(this.sourceInput.getRoot());
        root.append(this.sourceList.getRoot());
        root.append(this.sourceTitle.getRoot());
        root.append(this.articleList.getRoot());
        root.addEventListener('sourceChange', ({ detail }) => {
            this.updateArticles(detail.sourceId);
            this.sourceTitle.update(detail.sourceName)
        })
    }

    async updateArticles(sourceId) {
        const articles = await getArticleList(sourceId);
        this.articleList.update(articles);
    }
}

const mainController = new MainController();
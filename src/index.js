import { getSourceList, getArticleList } from './api';
import { MainSection } from './views/mainSection';
import { SourceInput } from './views/sourceInput';
import { SourceList } from './views/sourceList';
import { ArticleList } from './views/articleList';
import { SourceTitle } from './views/sourceTitle';
import './style.css';

const root = document.querySelector('#root');

class AppController {
    constructor() {
        this.initialize();
    }

    async initialize() {
        try {

            this.sourceListData = await getSourceList();
        } catch (e) {
            console.log('////////////////////////')
        }
        this.sourceList = new SourceList(this.sourceListData);
        this.articleList = new ArticleList();
        this.sourceTitle = new SourceTitle();
        this.sourceInput = new SourceInput();
        this.mainSection = new MainSection().getRoot();
        this.sourceInput.getInput().addEventListener('input', (({ target }) => {
            this.sourceList.filterSources(target.value);
        }))
        root.append(this.sourceInput.getRoot());
        root.append(this.sourceList.getRoot());
        root.append(this.mainSection);
        this.mainSection.append(this.sourceTitle.getRoot());
        this.mainSection.append(this.articleList.getRoot());
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

new AppController();
import { ApiFactory } from './api';
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

        // API
        this.apiFactory = new ApiFactory();
        this.sourcesApi = this.apiFactory.createApi('sources');
        this.articlesApi = this.apiFactory.createApi('articles');

        // DATA
        this.sourceListData = await this.sourcesApi.getList();

        // Modules
        this.sourceList = new SourceList(this.sourceListData);
        this.articleList = new ArticleList();
        this.sourceTitle = new SourceTitle();
        this.sourceInput = new SourceInput();
        this.mainSection = new MainSection().getRoot();

        // Insert
        root.append(this.sourceInput.getRoot());
        root.append(this.sourceList.getRoot());
        root.append(this.mainSection);
        this.mainSection.append(this.sourceTitle.getRoot());
        this.mainSection.append(this.articleList.getRoot());

        // Logic
        this.sourceInput.getInput().addEventListener('input', (({ target }) => {
            this.sourceList.filterSources(target.value);
        }))
        root.addEventListener('sourceChange', ({ detail }) => {
            this.updateArticles(detail.sourceId);
            this.sourceTitle.update(detail.sourceName)
        })
    }

    async updateArticles(sourceId) {
        const articles = await this.articlesApi.getList(sourceId);
        this.articleList.update(articles);
    }
}

new AppController();

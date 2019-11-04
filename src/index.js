// import { getSourceList, getArticleList } from './api';
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
        this.apiFactory = new ApiFactory();

        this.logger = new Proxy(ApiFactory, {
            construct: function (target, thisArg, argumentsList) {
                console.log('fffff', target)
                return false
            }
        })

        this.sourcesApi = this.apiFactory.createApi('sources');
        this.articlesApi = this.apiFactory.createApi('articles');
        // this.sourceListData = await getSourceList();
        this.sourceListData = await this.sourcesApi.getList();
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
        // const articles = await getArticleList(sourceId);
        const articles = await this.articlesApi.getList(sourceId);
        this.articleList.update(articles);
    }
}

const appController = new AppController();

var proxy = new Proxy(appController.apiFactory, {
    get: function (target, propKey, receiver) {
        //I only want to intercept method calls, not property access
        var propValue = target[propKey];
        if (typeof propValue != "function") {
            return propValue;
        }
        else {
            return function () {
                console.log("intercepting call to " + propKey + " in cat " + target.name);
                //"this" points to the proxy, is like using the "receiver" that the proxy has captured
                return propValue.apply(this, arguments);
            }
        }
    }
})
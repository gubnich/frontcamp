import { getSourcesList, getArticlesList } from './api'
import { searchInput } from './views/searchInput'
import { sourcesList } from './views/sourcesList'
import { articlesList } from './views/articlesList'
import { SourceTitle } from './views/sourceTitle'
import './style.css';
import { ViewElement } from './views/viewElement'
const dd = new ViewElement([
    ['articleItem', 'li'],
    ['artiarticleItemImageWrappercleItem', 'a']])
console.log('dd', dd)
const root = document.querySelector('#root');

async function dataHandler(sourceId, sourceName) {
    const dataList = await getArticlesList(sourceId);
    const sourceTitle = new SourceTitle(root, sourceName);
    articlesList(root, dataList);
}

(async function Initialize() {
    const dataList = await getSourcesList();
    const { filterHandler, clickHandler } = sourcesList(root, dataList, dataHandler);

    searchInput(root, filterHandler, clickHandler);
})()

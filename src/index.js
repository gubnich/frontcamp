import { getSourcesList, getArticlesList } from './api'
import { searchInput } from './components/searchInput'
import { sourcesList } from './components/sourcesList'
import { articlesList } from './components/articlesList'
import { sourceTitle } from './components/sourceTitle'
import './style.css';

const root = document.querySelector('#root');

async function dataHandler(sourceId, sourceName) {
    const dataList = await getArticlesList(sourceId);
    sourceTitle(root, sourceName);
    articlesList(root, dataList);
}

(async function Initialize() {
    const dataList = await getSourcesList();
    const { filterHandler, clickHandler } = sourcesList(root, dataList, dataHandler);

    searchInput(root, filterHandler, clickHandler);
})()

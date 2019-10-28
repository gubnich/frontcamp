import { getSourcesList, getArticlesList } from './api'
import { searchInput } from './components/searchInput'
import { sourcesList } from './components/sourcesList'
import { articlesList } from './components/articlesList'
import './style.css';

const root = document.querySelector('#root');

async function dataHandler(source) {
    const dataList = await getArticlesList(source);
    const htmlList = articlesList(root, dataList);
}

(async function Initialize() {
    const dataList = await getSourcesList();
    const { filterHandler, clickHandler } = sourcesList(root, dataList, dataHandler);
    const input = searchInput(root, filterHandler, clickHandler);


})()
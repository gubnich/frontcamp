import { getSourcesList, getArticlesList } from './api'
import { searchInput } from './components/searchInput'
import { sourcesList } from './components/sourcesList'
import { articlesList } from './components/articlesList'

const root = document.querySelector('#root');

async function handler(source) {
    const dataList = await getArticlesList(source);
    const htmlList = articlesList(root, dataList);
}

(async function Initialize() {
    const dataList = await getSourcesList();
    const htmlList = sourcesList(root, dataList, handler);
    const input = searchInput(root, htmlList);


})()
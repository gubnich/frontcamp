import { getSourcesList, getArticlesList } from './api'
import { searchInput } from './components/searchInput'
import { sourcesList } from './components/sourcesList'

console.log('helloo');

const root = document.querySelector('#root');

(async function Initialize() {
    const dataList = await getSourcesList();
    const htmlList = sourcesList(root, dataList);
    const input = searchInput(root, htmlList);


})()
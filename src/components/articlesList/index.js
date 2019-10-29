import { articleItem } from '../articleItem'
import './style.css';

export const articlesList = (targetPlace, data) => {

    // structure
    const articleList = targetPlace.querySelector('.articleList') || document.createElement('ul');

    // css
    articleList.classList.add('articleList');

    // data
    articleList.innerHTML = '';

    // insert
    data.forEach(item => {
        articleList.append(articleItem(item));
    });
    targetPlace.querySelector('.articleList') || targetPlace.append(articleList);
}

import { sourcesItem } from '../sourcesItem';
import './style.css';

export const sourcesList = (targetPlace, data, dataHandler) => {

    // structure
    const sourceList = document.createElement('ul');

    // css
    sourceList.classList.add('sourceList');

    // logic
    const filterHandler = (value = '') => {
        Array.from(sourceList.children).forEach(item => {
            if (item.getAttribute('data-name').includes(value)) {
                item.classList.add('show');
                item.classList.remove('hide');
            }
            else {
                item.classList.add('hide');
                item.classList.remove('show');
            }
        })
    }
    const clickHandler = () => {
        sourceList.classList.toggle('zip');
    }

    // insert
    data.forEach(item => {
        sourceList.append(sourcesItem(item, dataHandler));
    });
    targetPlace.append(sourceList);

    filterHandler()
    return { filterHandler, clickHandler };
}

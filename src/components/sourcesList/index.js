import './style.css';

export const sourcesList = (targetPlace, data, callback) => {
    const sourceList = document.createElement('ul');
    sourceList.classList.add('sourceList');
    data.forEach(item => {
        const sourceItem = document.createElement('li');
        const sourceItemCountry = document.createElement('div');
        sourceItemCountry.classList.add('sourceItemCountry');
        sourceItemCountry.innerText = item.country;
        const sourceItemName = document.createElement('div');
        sourceItemName.classList.add('sourceItemName');
        sourceItemName.innerText = item.name;
        const sourceItemDescription = document.createElement('div');
        sourceItemDescription.classList.add('sourceItemDescription');
        sourceItemDescription.innerText = item.description;
        const sourceItemCategory = document.createElement('div');
        sourceItemCategory.classList.add('sourceItemCategory');
        sourceItemCategory.innerText = item.category;
        sourceItem.classList.add('sourceItem');
        sourceItem.append(sourceItemCountry);
        sourceItem.append(sourceItemName);
        sourceItem.append(sourceItemDescription);
        sourceItem.append(sourceItemCategory);
        sourceItem.setAttribute('data-name', item.name.toLowerCase())
        sourceItem.addEventListener('click', () => callback(item.id))
        sourceList.append(sourceItem);
    });
    targetPlace.append(sourceList);

    const filterHandler = (value = '') => {
        Array.from(sourceList.children).forEach(item => {
            console.log(item.getAttribute('data-name'), item.getAttribute('data-name').includes(value))
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

    filterHandler()
    return { filterHandler, clickHandler };
}
import './style.css';

export const sourcesItem = (data, dataHandler) => {

    // structure
    const sourceItem = document.createElement('li');
    const sourceItemCountry = document.createElement('div');
    const sourceItemName = document.createElement('div');
    const sourceItemDescription = document.createElement('div');
    const sourceItemCategory = document.createElement('div');

    // css
    sourceItem.classList.add('sourceItem');
    sourceItemCountry.classList.add('sourceItemCountry');
    sourceItemName.classList.add('sourceItemName');
    sourceItemDescription.classList.add('sourceItemDescription');
    sourceItemCategory.classList.add('sourceItemCategory');
    sourceItem.setAttribute('data-name', data.name.toLowerCase())

    // data
    sourceItemCountry.innerText = data.country;
    sourceItemName.innerText = data.name;
    sourceItemDescription.innerText = data.description;
    sourceItemCategory.innerText = data.category;

    // logic
    sourceItem.addEventListener('click', () => {
        dataHandler(data.id, data.name)
    })

    // insert
    sourceItem.append(sourceItemCountry);
    sourceItem.append(sourceItemName);
    sourceItem.append(sourceItemDescription);
    sourceItem.append(sourceItemCategory);

    return sourceItem;
}
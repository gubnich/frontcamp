import './style.css';

export const articlesList = (targetPlace, data) => {
    // if (targetPlace.querySelector('.articleList')) targetPlace.querySelector('.articleList').innerHTML = '';
    const articleList = targetPlace.querySelector('.articleList') || document.createElement('ul');
    articleList.innerHTML = '';
    articleList.classList.add('articleList');
    data.forEach(item => {
        const articleItem = document.createElement('li');
        articleItem.classList.add('articleItem');
        // articleItem.innerText = JSON.stringify(item);
        const articleItemImageWrapper = document.createElement('div');
        articleItemImageWrapper.classList.add('articleItemImageWrapper');
        const articleItemImage = document.createElement('img');
        articleItemImage.classList.add('articleItemImage');
        articleItemImage.src = item.urlToImage;

        item.urlToImage && articleItemImageWrapper.append(articleItemImage);
        const articleItemTitle = document.createElement('div');
        articleItemTitle.classList.add('articleItemTitle');
        articleItemTitle.innerText = item.title;
        const articleItemDescription = document.createElement('div');
        articleItemDescription.classList.add('articleItemDescription');
        articleItemDescription.innerText = item.description;

        articleItem.append(articleItemImageWrapper);
        articleItem.append(articleItemTitle);
        articleItem.append(articleItemDescription);
        articleList.append(articleItem);
    });
    targetPlace.querySelector('.articleList') || targetPlace.append(articleList);


}
import './style.css';

export const articleItem = (data) => {

    // structure
    const articleItem = document.createElement('li');
    const articleItemImageWrapper = document.createElement('a');
    const articleItemImage = document.createElement('img');
    const articleItemTitle = document.createElement('div');
    const articleItemDescription = document.createElement('div');
    const articleItemDate = document.createElement('div');
    const articleItemAuthor = document.createElement('a');

    // css
    articleItem.classList.add('articleItem');
    articleItemImageWrapper.classList.add('articleItemImageWrapper');
    articleItemImage.classList.add('articleItemImage');
    articleItemTitle.classList.add('articleItemTitle');
    articleItemDate.classList.add('articleItemDate');
    articleItemAuthor.classList.add('articleItemAuthor');

    // data
    articleItemImageWrapper.href = data.url || '#';
    articleItemImage.src = data.urlToImage;
    articleItemTitle.innerText = data.title;
    articleItemDescription.innerText = data.description;
    articleItemDate.innerText = data.publishedAt ? new Date(Date.parse(data.publishedAt)).toDateString() : 'Date unknown';
    if (data.author) {
        if (data.author.includes('http')) {
            articleItemAuthor.innerText = 'Author info';
            articleItemAuthor.href = data.author;
        } else {
            articleItemAuthor.innerText = data.author;
        }
    } else {
        articleItemAuthor.innerText = 'Unknown author';
    }

    // insert
    data.urlToImage && articleItemImageWrapper.append(articleItemImage);
    articleItem.append(articleItemImageWrapper);
    articleItem.append(articleItemTitle);
    articleItem.append(articleItemDescription);
    articleItem.append(articleItemDate);
    articleItem.append(articleItemAuthor);

    return articleItem;
}

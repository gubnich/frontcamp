export const articlesList = (targetPlace, list, callback) => {
    console.log(list)
    const ul = document.createElement('ul');
    list.forEach(item => {
        const li = document.createElement('li');
        console.log(item)
        li.innerText = JSON.stringify(item);
        ul.append(li);
    });
    targetPlace.append(ul);

    
}
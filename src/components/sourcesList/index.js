export const sourcesList = (targetPlace, list, callback) => {
    console.log(list)
    const ul = document.createElement('ul');
    list.forEach(item => {
        const li = document.createElement('li');
        console.log(item)
        li.innerText = JSON.stringify(item);
        li.setAttribute('data-name', item.name.toLowerCase())
        li.addEventListener('click', () => callback(item))
        ul.append(li);
    });
    targetPlace.append(ul);

    const filter = (value) => {
        Array.from(ul.children).forEach(item => {
            console.log(item.getAttribute('data-name').includes(value))
            if (item.getAttribute('data-name').includes(value)) item.classList.toggle('hide')
        })
    }
    filter()
    return filter;
}
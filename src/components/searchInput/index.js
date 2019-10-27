export const searchInput = (targetPlace, callback) => {
    const input = document.createElement('input');
    input.placeholder = 'hdhdhfhg'
    input.addEventListener('input', (e) => {
        console.log(input.placeholder)
        input.placeholder = 'e.target.value + e.target.value'
        console.log(e.target.value)
        callback(input.value);
    })
    targetPlace.prepend(input);


}
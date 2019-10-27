const API_KEY = 'ba5992c165544bceb02618e82aa9d2ff'

export const req = async () => {
    try {
        const res = await fetch(`https://newsapi.org/v1/sources?apiKey=${API_KEY}`);
        const res2 = await fetch(`https://newsapi.org/v1/articles?source=al-jazeera-english&apiKey=${API_KEY}`);
    } catch (error) {
        console.log(error, 'something went wrong');
    }
}

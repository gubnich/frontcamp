const API_KEY = 'ba5992c165544bceb02618e82aa9d2ff'

export const getSourcesList = async () => {
    try {
        const res = await fetch(`https://newsapi.org/v1/sources?apiKey=${API_KEY}`).then((res) => res.json());
        // const res2 = await fetch(`https://newsapi.org/v1/articles?source=al-jazeera-english&apiKey=${API_KEY}`);
        return res.sources;
    } catch (error) {
        console.log(error, 'something went wrong');
    }
}

const API_KEY = 'ba5992c165544bceb02618e82aa9d2ff'

export const getSourcesList = async () => {
    try {
        const res = await fetch(`https://newsapi.org/v1/sources?apiKey=${API_KEY}`).then((res) => res.json());
        return res.sources;
    } catch (error) {
        console.log(error, 'something went wrong');
    }
}

export const getArticlesList = async (sourceId) => {
    try {
        const res = await fetch(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=${API_KEY}`).then((res) => res.json());
        return res.articles;
    } catch (error) {
        console.log(error, 'something went wrong');
    }
}

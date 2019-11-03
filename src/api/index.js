const API_KEY = 'ba5992c165544bceb02618e82aa9d2ff'

export const getSourceList = async () => {
    try {
        const res = await fetch(`https://newsapi.org/v1/sources?apiKey=${API_KEY}`).then((response) => {
            if (response.ok) response.json();
            else throw new Error();
        });
        return res.sources;
    } catch (error) {
        console.log(error, 'something went wrong');
        import(/* webpackChunkName: "lazyLoaded" */ '../errorHandler').then(module => {
            module.showLazyAlert();
        });
    }
}

export const getArticleList = async (sourceId) => {
    try {
        const res = await fetch(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=${API_KEY}`).then((res) => res.json());
        return res.articles;
    } catch (error) {
        console.log(error, 'something went wrong');
    }
}

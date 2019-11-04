const API_KEY = 'ba5992c165544bceb02618e82aa9d2ff';

// export const getSourceList = async () => {
//     try {
//         const response = await fetch(`https://newsapi.org/v1/sources?apiKey=${API_KEY}`).then((res) => {
//             if (res.ok) {
//                 return res.json();
//             }
//             else {
//                 throw new Error();
//             }
//         });
//         return response.sources;
//     } catch (error) {
//         import(/* webpackChunkName: "errorHandler" */ '../errorHandler').then(errorHandler => {
//             errorHandler.handleError('sources');
//         });
//     }
// }

// export const getArticleList = async (sourceId) => {
//     try {
//         const response = await fetch(`https://newsapi.org/v1/articles?apiKey=${API_KEY}&source=${sourceId}`).then((res) => {
//             if (res.ok) {
//                 return res.json();
//             }
//             else {
//                 throw new Error();
//             }
//         });
//         return response.articles;
//     } catch (error) {
//         import(/* webpackChunkName: "errorHandler" */ '../errorHandler').then(errorHandler => {
//             errorHandler.handleError('articles');
//         });
//     }
// }

class Api {
    constructor(apiPoint) {
        this.request = '';
        this.apiPoint = apiPoint;
    }

    async getList(additional) {
        try {
            const response = await fetch(this.request + additional).then((res) => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    throw new Error();
                }
            });
            return response[this.apiPoint];
        } catch (error) {
            import(/* webpackChunkName: "errorHandler" */ '../errorHandler').then(errorHandler => {
                errorHandler.handleError(this.apiPoint);
            });
        }
    }
}

export class ApiFactory {
    createApi(apiPoint) {
        switch (apiPoint) {
            case 'sources':
                const sourcesApi = new Api('sources');
                sourcesApi.request = `https://newsapi.org/v1/sources?apiKey=${API_KEY}`;
                return sourcesApi;
            case 'articles':
                const articlesApi = new Api('articles');
                articlesApi.request = `https://newsapi.org/v1/articles?apiKey=${API_KEY}&source=`;
                return articlesApi;
        }
    }
}

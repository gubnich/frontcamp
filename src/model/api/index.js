import { logger } from '../../logger';

const API_KEY = 'ba5992c165544bceb02618e82aa9d2ff';

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
            import(/* webpackChunkName: "errorHandler" */ '../../errorHandler').then(errorHandler => {
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
                return logger(sourcesApi);
            case 'articles':
                const articlesApi = new Api('articles');
                articlesApi.request = `https://newsapi.org/v1/articles?apiKey=${API_KEY}&source=`;
                return logger(articlesApi);
        }
    }
}

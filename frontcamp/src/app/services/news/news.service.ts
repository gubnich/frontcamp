import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { HttpClient } from "@angular/common/http";
import { mock } from './mock';

const  API_KEY = 'ba5992c165544bceb02618e82aa9d2ff';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public selectedSource$ = new Subject();
  constructor(private http: HttpClient) {
  }

  getSources() {
    // return mock.sources;
    return this.http.get<{sources: []}>(`https://newsapi.org/v1/sources?apiKey=${API_KEY}`).pipe(
      map(({sources}) => sources),
    )
   
  }

  getArticles(sourceId) {
    // return mock.articles;https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=API_KEY
    return this.http.get<{articles: []}>(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${API_KEY}&pageSize=5`).pipe(
      // tap(item => console.log('////////////////', item)),
      map(({articles}) => articles),
    
    )
  }

  getArticle(param) {
    return mock.articles.find(item => item.title == param);
  }

  getSelectedSource() {
    return this.selectedSource$
  }

  setSelectedSource(id) {
    console.log('id',id)
    this.selectedSource$.next(id);
  }
}

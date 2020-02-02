import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import { tap, map, mergeMap } from 'rxjs/operators';

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
    return of(mock.sources);
    return this.http.get<{sources: []}>(`https://newsapi.org/v1/sources?apiKey=${API_KEY}`).pipe(
      map(({sources}) => sources),
    )
   
  }

  getArticles(sourceId) {
    
    // console.log(this.http.get<{articles: []}>(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${API_KEY}&pageSize=5`).pipe(
    //   map(({articles}) => articles),
    //   ))
      return of(mock.articles).toPromise();
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

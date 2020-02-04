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
  public selectedArticle = {};
  public filterValue$ = new Subject();
  public showLocalOnly = false;
  public articles = [];
  constructor(private http: HttpClient) {
  }

  getSources() {
    return of(mock.sources);
    return this.http.get<{sources: []}>(`https://newsapi.org/v1/sources?apiKey=${API_KEY}`).pipe(
      map(({sources}) => sources),
    )
   
  }

  getArticles(sourceId, page) {
    
    // this.http.get<{articles: []}>(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${API_KEY}&pageSize=5`).pipe(
    //   map(({articles}) => this.articles = articles),
    //   )
      return of(mock.articles).toPromise();
      console.log('////////////////////////////////')

      return this.http.get<{articles: []}>(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${API_KEY}&pageSize=5&page=${page}`).toPromise()
  }

  getLocalArticles() {
    
    return this.http.get(`/local/all`).toPromise();
  }

  getArticle() {
    // return mock.articles.find(item => item.title == param);
    return this.selectedArticle;
  }

  getLocalArticle(id) {
    return this.http.get(`/local/article/${id}`).toPromise();
  }

  createArticle(article) {
    console.log('service create')
    return this.http.put(`/local/add`, article).toPromise()
    // fetch(`/local/`, article)
  }

  getSelectedSource() {
    return this.selectedSource$
  }

  setSelectedSource(id) {
    console.log('id',id)
    this.selectedSource$.next(id);
  }

  setFilterValue(value) {
    console.log('filter',value)
    this.filterValue$.next(value);
  }

  getFilterValue() {
    return this.filterValue$
  }

  setSelectedArticle(article) {
    this.selectedArticle = article;
  }

  deleteArticle(id) {
    return this.http.delete(`/local/article/${id}`).toPromise();
  }

  editArticle(article) {
    return this.http.post(`/local/article/${this.selectedArticle['id']}`, article).toPromise();
  }

}

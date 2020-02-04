import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from "@angular/common/http";

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
    return this.http.get<{sources: []}>(`https://newsapi.org/v1/sources?apiKey=${API_KEY}`).pipe(
      map(({sources}) => sources),
    )
  }

  getArticles(sourceId, page) {
    return this.http.get<{articles: []}>(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${API_KEY}&pageSize=5&page=${page}`).toPromise()
  }

  getLocalArticles() {    
    return this.http.get(`/local/all`).toPromise();
  }

  getArticle() {
    return this.selectedArticle;
  }

  getLocalArticle(id) {
    return this.http.get(`/local/article/${id}`).toPromise();
  }

  createArticle(article) {
    return this.http.put(`/local/add`, article).toPromise()
  }

  getSelectedSource() {
    return this.selectedSource$
  }

  setSelectedSource(id) {
    this.selectedSource$.next(id);
  }

  setFilterValue(value) {
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

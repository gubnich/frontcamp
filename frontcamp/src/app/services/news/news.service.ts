import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { mock } from './mock';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public selectedSource$ = new Subject();

  constructor() {
  }

  getSources() {
    return mock.sources;
  }

  getArticles() {
    return mock.articles;
  }

  getArticle(param) {
    return mock.articles.find(item => item.title == param);
  }

  getSelectedSource() {
    return this.selectedSource$;
  }

  setSelectedSource(id) {
    this.selectedSource$.next(id);
  }
}

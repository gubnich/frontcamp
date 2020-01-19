import { Injectable } from '@angular/core';
import { mock } from './mock';
import { of, Subject } from 'rxjs';

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

  getSelectedSource() {
    return this.selectedSource$;
  }

  setSelectedSource(id) {
    console.log('service', id)
    this.selectedSource$.next(id);
  }
}

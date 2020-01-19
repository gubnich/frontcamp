import { Injectable } from '@angular/core';
import { mock } from './mock';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public selectedSourceId$ = new Subject;

  constructor() { }

  getSources() {
    return mock.sources;
  }

  getArticles() {
    return mock.articles;
  }

  getSelectedSourceId() {
    return this.selectedSourceId$;
  }

  setSelectedSourceId(id) {
    console.log('service', id)
    this.selectedSourceId$.next(id);
  }
}

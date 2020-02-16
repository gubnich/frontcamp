import { of, Subject } from 'rxjs';
import { mock } from "./mock";

export class NewsServiceMock {
  public selectedArticle;
  public selectedSource$ = new Subject();
  public filterValue$ = new Subject();

  deleteArticle() {
    return Promise.resolve();
  }

  setSelectedArticle(data) {
    data.selectedArticle = 'done';
  }

  getSelectedArticle() {
    return this.selectedArticle;
  }

  setSelectedSource(id) {
    this.selectedSource$.next(id);
  }

  getSelectedSource() {
    return this.selectedSource$;
  }

  getFilterValue() {
    return this.filterValue$;
  }

  setFilterValue(value) {
    this.filterValue$.next(value);
  }

  getSources() {
    return of(mock.sources);
  }

  getArticles() {
    return Promise.resolve({articles: mock.articles});
  }

  getLocalArticles() {
    return Promise.resolve(mock.articles);
  }

  getArticle() {
    return mock.articles[0];
  }

  createArticle(article) {
    return Promise.resolve(article);
  }

  editArticle(article) {
    return Promise.resolve(article);
  }
};
